# Omnilanding — Portfolio QA + Blog

**`lcacciatore.com` sirve tres superficies desde un mismo repo:**

| Ruta | Qué es | Tecnología |
|---|---|---|
| `/` | **Portfolio QA / AI Evaluation** | React 18 + Vite 5 + Tailwind 3 |
| `/blog/` | Notas técnicas (automatización, datos, calidad) | HTML estático + Tailwind CDN |
| `/consultoria/` | Landing comercial: Auditoría Operativa para gimnasios (con captura de leads a Supabase) | HTML estático + Tailwind CDN |

## Por qué el repo está armado así

Vite construye la raíz y **copia `public/` tal cual a `dist/`**. Por eso el blog y la
landing de consultoría viven en `public/`: no se procesan con React, pero viajan en el
mismo deploy y siguen disponibles en sus URLs.

```
public/
├── blog/          -> https://lcacciatore.com/blog/
├── consultoria/   -> https://lcacciatore.com/consultoria/
└── img/           -> assets compartidos por las tres superficies
tools/
└── og-cover.html  -> fuente de img/og-qa.png (no se despliega)
```

> El nav del blog apunta a las secciones de `/consultoria/` (`#problema`, `#consultoria`,
> `#sobre-mi`, `#techfitness`, `#faq`). Si se mueve la landing, hay que repuntar
> `public/blog/*/index.html`.

## Comandos

```bash
npm install
npm run dev              # http://localhost:5173
npm run build            # -> dist/
npm run preview          # sirve dist/ en http://localhost:4173
npm run verify:render    # verificación de render con aserciones (ver abajo)
```

## Verificación de render

`src/ssr-check.jsx` ejecuta **el árbol real de componentes** por SSR y afirma strings
esperados por sección: los 3 fixes del rediseño, las anclas del navbar, los contactos
reales, y que **no** existan los valores falsos que se eliminaron.

```bash
npm run verify:render
```

Salida esperada: `36 aserciones | fallos: 0 | RENDER OK` y exit code 0.

### Verificar producción

`tools/verificar-prod.py` comprueba que **la URL publicada realmente monte React**
(no sólo que el HTML responda 200) y que las tres superficies estén vivas:

```bash
CH="/c/Program Files/Google/Chrome/Application/chrome.exe"
OUT="$LOCALAPPDATA/Temp/prod"
mkdir -p "$OUT"
for p in "home:/" "blog:/blog/" "consultoria:/consultoria/"; do
  "$CH" --headless=new --disable-gpu --virtual-time-budget=9000 \
    --dump-dom "https://lcacciatore.com${p#*:}" > "$OUT/prod-${p%%:*}.html" 2>/dev/null
done
python tools/verificar-prod.py "$OUT/prod-home.html" "$OUT/prod-blog.html" "$OUT/prod-consultoria.html"
```

Salida esperada: `comprobaciones: 16 | fallos: 0 | PROD OK`.

## Datos

Todo el contenido vive en `src/data/`. Los componentes son sólo presentación.

| Archivo | Contenido |
|---|---|
| `site.js` | identidad, contacto, nav, pipeline y flujos del hero |
| `capabilities.js` | capacidades de QA y stack enterprise |
| `aiDimensions.js` | dimensiones de evaluación de AI + framework |
| `projects.js` | HERMES y Sports Analytics (metodología, sin métricas inventadas) |
| `experience.js` | trayectoria, strip de stack, bio y cita |

## Regenerar la portada social

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new \
  --window-size=1200,630 --virtual-time-budget=5000 \
  --screenshot=public/img/og-qa.png "file:///$PWD/tools/og-cover.html"
```

## Deploy

Vercel, con `framework: vite`, `buildCommand: npm run build`, `outputDirectory: dist`
(fijado en `vercel.json` para que no dependa de la detección automática). Los rewrites a
`omnicomrade.vercel.app` (`/app`, `/login`, `/signin`) siguen activos: los archivos
estáticos se resuelven antes.

## Licencia

© 2026 Lisandro Cacciatore. Todos los derechos reservados.
