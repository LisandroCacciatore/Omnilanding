# lcacciatore.com

Personal site for **Lisandro Cacciatore** — Quality & Reliability for AI Systems · Sports Performance Analytics.

## Stack
- React 18 + Vite
- Tailwind CSS (dark-only)
- React Router (SPA)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy
Optimized for **Vercel** (configured in `vercel.json`):
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback via rewrite rule (no `404.html` needed)

For GitHub Pages / Netlify: add `public/404.html` with SPA redirect script (see `vercel.json` rewrites for reference).

## Structure
- `src/data/` — All content. Edit here, not in components.
- `src/components/` — Reusable presentational pieces.
- `src/sections/` — Page blocks grouped by route.
- `src/pages/` — Route entry points.
- `src/styles/blog.css` — Scoped styles for blog post rendering (migrated from old static blog).

## Routes
| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Overview with two pillars (QA/AI, Sports) |
| `/qa-ai` | QaAi | AI Quality & Evaluation services, case studies, tech stack |
| `/sport` | Sport | Sports Performance Analytics product, projects, experience |
| `/about` | About | Full profile, dual-track experience, credentials |
| `/blog` | Blog | Post index (supports `lang` field) |
| `/blog/:slug` | BlogPost | Individual post (renders HTML via `dangerouslySetInnerHTML`) |
| `/contact` | Contact | Channels + direct email |
| `*` | NotFound | 404 page with links back |

## Blog
Posts live in `src/data/blog.js`. Each post:
```js
{
  slug: 'post-slug',
  title: 'Post Title',
  excerpt: 'Short description for index',
  date: '2026-01-15',
  tags: ['Tag1', 'Tag2'],
  lang: 'en', // or 'es'
  body: '<h2>HTML content</h2><p>...</p>' // rendered via dangerouslySetInnerHTML
}
```
The n8n automation post (`automatizacion-clubes-n8n`) is included in Spanish with full HTML from the old static blog.

## Legacy `_old/` folder
Contains the previous multi-surface implementation (React root + static HTML in `public/blog/`, `public/consultoria/`). **Keep until production deploy is verified.** After confirming the Vercel preview works and the main domain serves the new SPA correctly, delete `_old/`.

## OG Image Regeneration
```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new \
  --window-size=1200,630 --virtual-time-budget=5000 \
  --screenshot=public/img/og-qa.png "file:///$PWD/tools/og-cover.html"
```

## Production Verification
`tools/verificar-prod.py` checks that the deployed URL mounts React and all routes respond. Update it for new routes if needed (old `consultoria/` route removed).