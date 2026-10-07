import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse, extname } from 'node:path';

const INPUT_DIR = 'public/img';
const OUTPUT_DIR = 'public/img/optimized';

// Anchos a generar. Un archivo por ancho.
const WIDTHS = [400, 800, 1600];

// Calidad WebP. 82 es el punto dulce entre peso y fidelidad visual.
const WEBP_QUALITY = 82;

// Imágenes a procesar. La thumb ya está optimizada, la salteamos.
const SKIP = new Set(['coach-thumb.jpg', 'og-cover.png', 'og-qa.png']);

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(INPUT_DIR);
  const targets = files.filter((f) => {
    if (SKIP.has(f)) return false;
    const ext = extname(f).toLowerCase();
    return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
  });

  console.log(`Procesando ${targets.length} imágenes...\n`);

  for (const file of targets) {
    const { name } = parse(file);
    const inputPath = join(INPUT_DIR, file);

    for (const width of WIDTHS) {
      const outName = `${name}-${width}w.webp`;
      const outPath = join(OUTPUT_DIR, outName);

      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY, effort: 5 })
        .toFile(outPath);

      console.log(`  ✓ ${file} → ${outName}`);
    }
  }

  console.log('\nListo. Las nuevas imágenes están en public/img/optimized/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});