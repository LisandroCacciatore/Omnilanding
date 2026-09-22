# Omnilanding — Landing de consultoría

**Sitio comercial de la oferta de auditoría operativa para dueños de gimnasios.**

🔗 **[lcacciatore.com](https://lcacciatore.com/)**

---

## Qué resuelve

Un gimnasio pierde alumnos y no sabe exactamente por qué: se atribuye a la competencia, a la zona o a la época. La oferta es una **Auditoría Operativa 1:1** que identifica la causa real de la fuga y entrega un plan accionable para retener. El sitio existe para captar ese interés y convertir la visita en una conversación, no para explicar todo lo que hace el producto.

## Mi rol

Definí la oferta, reposicioné el sitio y lo implementé:

- **Reposicionamiento**: la oferta principal pasó a ser la auditoría; el producto (TechFitness) quedó como sección al final, con features, demo y acceso.
- **Estructura de navegación** reencuadrada alrededor del problema del cliente: `problema · consultoría · sobre mí · techfitness · faq`.
- **Jerarquía de CTAs**: WhatsApp para consultoría en hero, nav, sticky y cierre; el demo solo aparece en su propia sección.
- **Captura de leads** con formulario a Supabase y fallback a WhatsApp cuando no está configurado.
- **Metadata social completa**: OG tags, twitter card, canonical y `og-cover.png` 1200×630.

## Stack

HTML estático · Tailwind (CDN) · Supabase JS (captura de leads) · Vercel

## Evidencia

| Qué | Dónde |
|---|---|
| Metadata social completa y verificable | `<head>` de `index.html`: `og:*`, `twitter:*`, `canonical`, `og:image` 1200×630 |
| Configuración de despliegue | `vercel.json` |
| Imágenes y portada social | `img/` |
| Reposicionamiento de la oferta | historial de commits (C3/C4/C5/C7) |

## Estado

Sitio activo y reposicionado en septiembre de 2026. Observaciones:

- **Tailwind por CDN en producción**: conviene migrar a build.
- El repo tiene 9 archivos: el contenido vive íntegramente en `index.html`.
- Convive con un segundo dominio del mismo autor ([lisandrocacciatore.com](https://lisandrocacciatore.com/)), que apunta a la marca técnica. Vale decidir si esa separación es intencional o si conviene unificar la identidad.
