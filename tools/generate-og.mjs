import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse, resolve } from 'node:path';
import { existsSync } from 'node:fs';

const execAsync = promisify(execFile);

const TEMPLATES_DIR = 'tools/og-templates';
const OUTPUT_DIR = 'public/img/og';

// Chrome en Windows. Si no lo encuentra, probá con las variantes.
const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  process.env.CHROME_PATH,
].filter(Boolean);

function findChrome() {
  for (const path of CHROME_CANDIDATES) {
    if (existsSync(path)) return path;
  }
  throw new Error(
    'Chrome no encontrado. Instalalo o seteá la variable CHROME_PATH.'
  );
}

async function main() {
  const chromePath = findChrome();
  const outputDirAbs = resolve(OUTPUT_DIR);
  await mkdir(outputDirAbs, { recursive: true });

  const files = (await readdir(TEMPLATES_DIR)).filter(
    (f) => f.endsWith('.html') && !f.startsWith('_')
  );

  console.log(`Renderizando ${files.length} OG images con Chrome...\n`);
  console.log(`Output dir: ${outputDirAbs}\n`);

  for (const file of files) {
    const { name } = parse(file);
    const input = join(TEMPLATES_DIR, file);
    const output = join(outputDirAbs, `og-${name}.png`);

    const url = `file:///${resolve(input).replace(/\\/g, '/')}`;

    await execAsync(chromePath, [
      '--headless=new',
      '--hide-scrollbars',
      '--disable-gpu',
      '--no-sandbox',
      `--screenshot=${output}`,
      '--window-size=1200,630',
      '--default-background-color=00000000',
      url,
    ]);

    console.log(`  ✓ ${file} → og-${name}.png`);
  }

  console.log(`\nListo. OG images en ${outputDirAbs}/`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});