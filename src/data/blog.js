// Blog content — ready to be swapped for MDX or a CMS later.
export const posts = [
  {
    slug: 'evaluating-ai-agents',
    title: 'Evaluating AI Agents: Where to Start',
    excerpt: 'A practical framing for designing evaluation criteria when the system you are validating is non-deterministic and multi-step.',
    date: '2026-01-15',
    tags: ['AI', 'QA'],
    lang: 'en',
    body: `
The first mistake teams make when evaluating agents is looking for a single score.

Agentic systems are not classifiers. They plan, call tools, delegate subtasks, and produce side effects. A single accuracy number tells you almost nothing about whether the agent is safe to run in production.

## Three axes worth separating

1. **Outcome correctness** — did the agent reach the intended end state?
2. **Trajectory reliability** — was the path used to get there defensible?
3. **Failure containment** — when it breaks, does it fail safely and recover?

## Why Specification-Driven Development helps

Define the expected behavior before implementation. Contracts, inputs, guardrails. Then evaluation becomes verification against a spec instead of an open-ended hunt.

This post is a placeholder. Replace with the real article.
    `.trim(),
  },
  {
    slug: 'strength-data-to-decisions',
    title: 'From Strength Data to Coaching Decisions',
    excerpt: 'Why collecting more athlete data does not automatically produce better coaching — and what does.',
    date: '2026-01-08',
    tags: ['Sports', 'Analytics'],
    lang: 'en',
    body: `
Most strength and conditioning programs do not suffer from a lack of data. They suffer from a lack of structure around it.

Bar velocity, tonnage, ACWR, HRV, RPE — these are all inputs. None of them are answers.

## The gap

Coaches need a small number of signals they trust, presented at the moment a decision is actually being made. Everything else is noise.

## What "useful" looks like

- A readiness indicator the coach can read in under 3 seconds.
- A workload trend that flags anomalies without crying wolf.
- A briefing that reads like an assistant wrote it, not a database.

This post is a placeholder. Replace with the real article.
    `.trim(),
  },
  {
    slug: 'automatizacion-clubes-n8n',
    title: 'Automatización de clubes con n8n y AI Agents',
    excerpt: 'Cuando un club decide "automatizar", casi siempre arranca por el lugar equivocado: busca la herramienta antes de haber escrito qué tiene que pasar.',
    date: '2026-10-01',
    tags: ['Automatización', 'n8n', 'Clubes', 'IA'],
    lang: 'es',
    body: `
<div class="callout callout-borrador"><div class="etq">BORRADOR</div><p>Sin revisar: escrito sin investigación web (el backend de búsqueda no está operativo, ver <code>30-Research/automatizacion-clubes-n8n.md</code>). Los lugares marcados <code>[[FUENTE PENDIENTE: ...]]</code> son afirmaciones que <strong>no</strong> deben publicarse sin respaldo. Ver la lista al final.</p></div>
<hr>
<p>Cuando un club decide "automatizar", casi siempre arranca por el lugar equivocado: busca la herramienta antes de haber escrito qué tiene que pasar.</p>
<p>Lo digo desde adentro: coordino el departamento de fuerza de un club —doce profesores, tres gimnasios—. Horarios y cobertura, presupuesto de equipamiento, compras, evaluaciones físicas, reportes. Sé cuánto tiempo se va en tareas que se podrían escribir como una regla, porque las hago.</p>
<p>La pregunta útil no es <em>¿puedo automatizar esto?</em> — casi todo se puede. La pregunta útil es:</p>
<p><strong>¿Esto es una regla o es un criterio?</strong></p>
<p>Es la única distinción que importa para elegir la herramienta. Y explicarla bien ahorra meses de trabajo tirado.</p>
<hr>
<h2>Regla o criterio: la distinción que ordena todo</h2>
<p>Una <strong>regla</strong> se puede escribir así: <em>si pasa X, entonces hacer Y</em>. No necesita que nadie opine.</p>
<div class="callout callout-regla"><div class="etq">REGLA</div><p>El socio cumplió 30 días sin asistir → generar una alerta para el profesor.</p></div>
<p>Eso no es un problema de inteligencia artificial. Es un <code>if</code>. Va en un script, se ejecuta siempre igual, cuesta casi nada y se puede probar con un test.</p>
<p>Un <strong>criterio</strong>, en cambio, requiere interpretar algo ambiguo:</p>
<div class="callout callout-criterio"><div class="etq">CRITERIO</div><p>Llegó un mensaje de un socio: "che, no puedo seguir viniendo por ahora" — ¿es una baja, una pausa por lesión, o alguien que vuelve en dos semanas?</p></div>
<p>Ahí no hay <code>if</code> que alcance. Ahí sí conviene un agente.</p>
<p><strong>La mayoría de lo que un club quiere automatizar es una regla disfrazada de criterio.</strong> Planillas de asistencia, vencimientos de cuota, recordatorios, altas y bajas, avisos de cumpleaños: todo eso son reglas. Y son las que más tiempo consumen, porque se hacen a mano todos los días.</p>
<hr>
<h2>Qué hace bien n8n (y para qué no sirve)</h2>
<p>n8n es una buena pieza para <strong>orquestar</strong>: conectar sistemas que no se hablan entre sí, correr pasos en orden, reintentar cuando algo falla, y dejar registro de qué pasó en cada corrida.</p>
<p>Su mejor cualidad, para el caso de un club, es que sabe <strong>esperar a una persona</strong>. Un flujo puede frenarse, pedir una aprobación por WhatsApp o Telegram, y continuar sólo cuando alguien responde. Eso es exactamente lo que hace falta cuando el paso siguiente es irreversible.</p>
<p>Donde n8n se queda corto es cuando se le pide <strong>vivir el criterio</strong>. Un flujo con treinta ramas condicionales no es una automatización: es un programa mal escrito, escondido en una interfaz visual, que nadie puede testear.</p>
<p>[[FUENTE PENDIENTE: nombre y comportamiento exacto del nodo de n8n para aprobaciones ("Send and Wait for Response"), verificar contra la documentación oficial antes de publicar.]]</p>
<hr>
<h2>Dónde entran los agentes, y dónde no</h2>
<p>Un agente de IA es <strong>caro y no determinista</strong>. Dos consecuencias prácticas:</p>
<ol><li>Si el resultado tiene que ser siempre el mismo para la misma entrada, <strong>no va un agente</strong>. Un vencimiento de cuota es una fecha, no una opinión.</li><li>Si el paso es irreversible —cobrar, firmar, dar de baja a un socio—, <strong>tampoco va un agente</strong>, ni siquiera uno bueno.</li></ol>
<p>Los agentes entran donde el no-determinismo es justamente lo que se busca: interpretar un mensaje escrito en lenguaje humano, resumir el estado de un grupo, redactar un aviso, clasificar un texto ambiguo. Ahí un modelo es claramente mejor que una regla.</p>
<hr>
<h2>El patrón que uso: el agente escribe, el código actúa</h2>
<p>Cuando mezclás modelo y automatización, el riesgo aparece siempre en el mismo lugar: <strong>el paso que no se puede deshacer</strong>. Si el modelo se equivoca redactando, lo corregís. Si se equivoca cobrando, ya está.</p>
<p>El patrón que resuelve esto separa las dos responsabilidades de forma explícita:</p>
<ul><li><strong>El agente escribe.</strong> Investiga, redacta, propone. Puede equivocarse: es corregible.</li><li><strong>El código actúa.</strong> Publica, envía, registra. Determinista, con tests, y sin depender de que el modelo se porte bien.</li></ul>
<p>En el medio va un <strong>registro de aprobación</strong>. No una frase de confirmación en un chat: un registro con un identificador, que el paso determinista verifica <em>antes</em> de tocar nada. Si no existe ese registro, el sistema no hace nada. No es que "avisa que no puede": no toca el archivo, no manda el mensaje, no cobra.</p>
<p>Dos detalles que hacen la diferencia en la práctica:</p>
<ul><li><strong>Idempotencia.</strong> Un doble click, un reintento de red o una corrida duplicada del proceso no pueden ejecutar la acción dos veces.</li><li><strong>Traza.</strong> Cada transición queda registrada, con quién la autorizó y qué evidencia dejó.</li></ul>
<p>En el sistema que uso todos los días, ese paso se ve así:</p>
<pre><code class="language-bash">$ publicar.py <slug>
112: {"codigo": 3, "resultado": "sin_registro_de_aprobacion"}    # no publica

$ publicar.py <slug> --push
115: {"codigo": 0, "resultado": "publicado", "commit": "c990c34"}</code></pre>
<p>La primera corrida no falla por un error: <strong>no encuentra autorización y no toca nada</strong>. Ni el archivo, ni el mensaje, ni la plata. La segunda corre porque un humano apretó un botón, y eso quedó registrado con un identificador.</p>
<hr>
<h2>El borde: lo que no se automatiza nunca</h2>
<p>Hay una línea que no conviene cruzar, y es más cercana de lo que parece:</p>
<ul><li>Cobrar o mover plata.</li><li>Firmar o presentar algo frente a un organismo.</li><li>Dar de baja a un socio.</li><li>Mandar comunicaciones sensibles en nombre del club.</li></ul>
<p>Para todos esos casos el objetivo es el mismo: <strong>el sistema prepara hasta el borde y frena</strong>. Deja el borrador escrito, el formulario completo, el comprobante listo — y espera. La última acción la hace una persona.</p>
<p>No es una limitación técnica. Es una decisión de diseño.</p>
<hr>
<h2>Cómo empezar, sin comprar nada</h2>
<ol><li><strong>Listá los procesos que se repiten todas las semanas.</strong> No los importantes: los repetidos.</li><li><strong>Clasificá cada uno: regla o criterio.</strong> Sin excepciones, sin "depende".</li><li><strong>Estimá volumen por tiempo.</strong> Una regla que corre diez veces por día gana siempre contra un criterio que aparece una vez por mes.</li><li><strong>Automatizá primero la regla de mayor volumen y menor criterio.</strong> Es el retorno más rápido y el más aburrido de implementar, que es exactamente la señal de que está bien elegido.</li><li><strong>El criterio viene después</strong>, y siempre con una aprobación humana en el medio.</li></ol>
<p>No voy a tirar cuántas horas pierde "un club promedio": no tengo ese número y suena a folleto. Lo que sí puedo decir es de dónde sale el tiempo en el mío —horarios, cobertura de profes, presupuesto de equipamiento, compras, evaluaciones físicas, reportes—. Todas tareas que tienen una regla detrás.</p>
<hr>
<h2>Cierre</h2>
<p>Automatizar un club no es meter agentes en todos lados. Es sacarle a la gente el trabajo que se puede escribir como regla, para que le quede tiempo para el trabajo que sí necesita criterio: mirar al socio, decidir, acompañar.</p>
<p>La herramienta es lo último que se elige. Primero se escribe qué tiene que pasar.</p>
<hr>
<h2>Lista de pendientes antes de publicar</h2>
<ul><li class="tarea"><span class="chk"></span><strong>Queda 1 sola marca <code>[[FUENTE PENDIENTE]]</code></strong> (el nodo de n8n): verificar contra la documentación oficial antes de publicar.</li><li class="tarea"><span class="chk"></span>Calibrar el tono: <code>60-Meta/style-guide.md</code> sigue <strong>vacía</strong> (espera los párrafos de audio). Este borrador usa un tono directo provisorio.</li><li class="tarea hecha"><span class="chk">&#10003;</span>Perfil objetivo definido: <code>60-Meta/cv-clubes-ia.md</code> cargado (2026-10-01).</li><li class="tarea hecha"><span class="chk">&#10003;</span>El ejemplo del patrón lleva código real con la salida del comando (2026-10-01).</li><li class="tarea"><span class="chk"></span>Decidir si el artículo nombra al club o queda como "un club". Hoy queda sin nombrar; la recomendación está en <code>60-Meta/cv-clubes-ia.md</code>.</li></ul>

<div class="cta-final glass-strong">
  <h3>¿Tu club pierde tiempo en cosas que se pueden escribir como regla?</h3>
  <p>Hago auditorías operativas 1:1: reviso tus procesos y te dejo un plan accionable.</p>
  <a href="https://wa.me/543415040228?text=Hola%2C%20quiero%20consultar%20una%20auditor%C3%ADa%20operativa" target="_blank" rel="noopener" class="btn-primary" style="padding:16px 30px; border-radius:16px; font-weight:700;">
    Consultar auditoría
    <svg class="icon-svg" style="width:18px;height:18px;" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  </a>
</div>
    `.trim(),
  },
];