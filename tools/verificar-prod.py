"""Verifica que PRODUCCION (lcacciatore.com) sirva las tres superficies y que
el portfolio realmente MONTE (no sólo que el HTML responda).
Uso: python verificar-prod.py <dump-home.html> <dump-blog.html> <dump-consultoria.html>
"""
import re
import sys

home, blog, cons = (open(p, encoding="utf-8", errors="replace").read() for p in sys.argv[1:4])

fallos = []
total = [0]


def check(ok, desc, detalle=""):
    total[0] += 1
    print(f"{'OK    ' if ok else 'FALLA '} {desc}{' | ' + detalle if detalle else ''}")
    if not ok:
        fallos.append(desc)


# --- / : el portfolio tiene que estar MONTADO ---
check("I test what systems" in home, "hero montado en produccion", "texto del h1 presente")
for marker in ["AVAILABLE FOR WORK", "Get in touch", "Case study coming", "04 / Decision"]:
    check(marker in home, f"marcador presente: {marker}")
check(
    "https://lisandrocacciatore.github.io/Arg_Plifting_Analysis/" in home,
    "link real de Sports Analytics",
)
secciones = re.findall(
    r'id="(quality-mindset|expected-vs-actual|software-quality|ai-evaluation|projects|experience|contact)"',
    home,
)
check(len(set(secciones)) == 7, "7 anclas de navegacion resolubles", f"{len(set(secciones))}/7")

falsos = [p for p in ["98.4", "OPTIMAL", "SYSTEMS READY", "googleusercontent", "Let's talk"] if p in home]
check(not falsos, "sin restos de los defectos corregidos", f"encontrados: {falsos or 'ninguno'}")
check("<img" not in home, "el portfolio no tiene ninguna <img> (fix 2)")

# --- /blog/ : el post y el nav repuntado a /consultoria/ ---
check("Automatización de clubes con n8n y AI Agents" in blog, "post del blog servido")
check("Borrador" in blog, "badge de borrador servido", "CSS lo muestra en mayusculas")
check("/consultoria/#problema" in blog, "nav del blog repuntado a /consultoria/" , "sin links muertos")
check("index.html#problema" not in blog, "nav viejo eliminado")

# --- /consultoria/ : landing y captura de leads intactas ---
check("Sabés cuántos" in cons, "landing de consultoria servida")
check('id="lead-form"' in cons, "formulario de leads a Supabase intacto")
check("coach-thumb.jpg" in cons, "imagenes de la landing con ruta absoluta")

print()
print(f"comprobaciones: {total[0]} | fallos: {len(fallos)}")
print("PROD OK" if not fallos else f"PROD CON FALLAS: {fallos}")
sys.exit(0 if not fallos else 1)
