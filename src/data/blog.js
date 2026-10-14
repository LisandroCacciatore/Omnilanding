/**
 * Artículos del blog.
 *
 * Cada artículo tiene:
 *  - slug: identificador único en la URL (/blog/<slug>)
 *  - title: titular del post
 *  - excerpt: resumen corto (aparece en el índice y en el meta description)
 *  - category: id de categoría (ver blogCategories abajo)
 *  - categoryLabel: nombre visible de la categoría
 *  - readingTime: string, se calcula a mano
 *  - date: ISO (YYYY-MM-DD)
 *  - cover: ruta a la imagen (public/images/blog/...) o URL de placeholder
 *  - content: array de bloques. Cada bloque es un string:
 *      - "## texto"  → H2
 *      - "**texto**" → párrafo con bold al inicio
 *      - "- item"    → list item (líneas consecutivas forman una <ul>)
 *      - resto       → párrafo normal
 *
 * Para agregar un post: sumá un objeto al array y corré `npm run build`
 * (el sitemap se regenera solo).
 *
 * Las portadas usan placehold.co mientras no estén las imágenes reales.
 * Cuando las tengas, reemplazá la URL por `/images/blog/<slug>.jpg` y
 * poné el archivo en public/images/blog/.
 */

export const blogCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'evaluacion', label: 'Evaluación' },
  { id: 'implementacion', label: 'Implementación' },
  { id: 'qa-ia', label: 'QA & IA' },
  { id: 'automatizacion', label: 'Automatización' },
  { id: 'metodologia', label: 'Metodología' },
];

export const blogPosts = [
  // =====================================================================
  // 01 — Por qué los proyectos fallan
  // =====================================================================
  {
    slug: 'por-que-los-proyectos-de-ia-en-estudios-fallan',
    title:
      'Por qué la mayoría de los proyectos de IA en estudios profesionales fallan antes de empezar',
    excerpt:
      'No fallan por la tecnología. Fallan porque nadie definió qué significaba que funcionara. Un repaso de los cuatro errores que veo más seguido.',
    category: 'metodologia',
    categoryLabel: 'Metodología',
    readingTime: '7 min',
    date: '2026-04-02',
    cover:
      'https://placehold.co/1600x900/f1eee7/7c5730?text=Art%C3%ADculo+01',
    content: [
      'Hay un patrón que se repite. Un socio del estudio lee sobre IA en algún lado, se entusiasma, y a las dos semanas ya hay una suscripción a ChatGPT Team. Tres meses después, nadie la usa. La herramienta sigue ahí, pagada, silenciosa.',
      'Lo interesante es que el problema no fue la herramienta. ChatGPT hace lo que dice que hace. El problema es que nadie definió, antes de contratar nada, qué significaba que la adopción funcionara.',
      '## Error 1 · Empezar por la herramienta',
      '"Vamos a usar IA" no es un problema. Es una decisión técnica apurada sin un problema de negocio detrás. La secuencia correcta es al revés: primero identificás una tarea que hoy consume horas no facturables del equipo, después evaluás si hay una solución con IA que la resuelva mejor, y recién ahí elegís la herramienta.',
      'Un ejemplo concreto. En un estudio jurídico, la redacción de minutas de reuniones con clientes consume, en promedio, entre 4 y 6 horas semanales por socio. Ese es un problema. Ahora sí podemos preguntarnos: ¿un asistente que transcriba y estructure la reunión reduce ese tiempo?',
      '## Error 2 · No definir qué significa "funciona"',
      'Esta es la falla más común y la más silenciosa. Un estudio implementa un asistente que responde preguntas sobre contratos internos. La demo funciona: el asistente responde bien tres preguntas del socio que lo probó. Se compra.',
      'A la semana aparece el primer caso real. Un asociado pregunta algo que el asistente no debería saber (información de otro cliente) y el asistente responde igual, inventando una respuesta plausible. Nadie había definido que "no responder con información de otros clientes" fuera un criterio de aceptación.',
      '**Sin criterios cuantitativos, cualquier respuesta parece buena.** Y en un estudio profesional, una respuesta plausible pero falsa es peor que no tener asistente.',
      '## Error 3 · No evaluar los límites',
      'Todos prueban el caso ideal. Nadie prueba el caso donde falta información clave, donde el documento está escaneado a 200 dpi, donde el cliente escribió en un dialecto regional, donde hay un error de tipeo en el nombre de la contraparte.',
      'Los sistemas de IA no fallan de forma binaria como el software tradicional. Fallan de forma gradual, y esos límites son exactamente donde un estudio profesional se juega su reputación.',
      'La evaluación de un sistema de IA tiene que incluir, sí o sí, un set de casos límite diseñado específicamente para romperlo. Si no rompe, no está probado.',
      '## Error 4 · Nadie lo usa después',
      'La herramienta funciona técnicamente. Pero nadie la adoptó. ¿Por qué? Porque nunca se integró al flujo de trabajo existente.',
      'El asistente vive en un navegador. El trabajo real vive en Outlook, en el sistema de gestión de causas, en Word. Si usar el asistente implica salir de esas herramientas, no se usa. No importa lo bueno que sea.',
      '**La integración al flujo no es un detalle de UX. Es un requisito de adopción.** Y se define antes de construir, no después.',
      '## La secuencia que funciona',
      'El orden no es negociable:',
      '- **Entender** cómo trabaja el estudio hoy. Quién hace qué, dónde se pierde tiempo, qué decisiones se toman sin información suficiente.',
      '- **Definir** qué tiene que hacer el sistema, qué no tiene permitido hacer, cómo medimos que funciona, cómo medimos que falla.',
      '- **Construir** con criterios de ingeniería de software, no con prompts sueltos en un chat.',
      '- **Evaluar** contra el comportamiento esperado, con casos límite diseñados para romper el sistema antes de que lo rompa un cliente real.',
      'Esto no es específico de la IA. Es lo que hace cualquier equipo de ingeniería serio cuando construye software crítico. La IA agrega una capa de incertidumbre, pero no reemplaza el método.',
    ],
  },

  // =====================================================================
  // 02 — Detección de alucinaciones
  // =====================================================================
  {
    slug: 'como-evaluar-si-tu-sistema-de-ia-esta-alucinando',
    title:
      'Cómo evaluar si tu sistema de IA está alucinando (y cómo solucionarlo)',
    excerpt:
      'Las alucinaciones no se detectan con el ojo humano. Se detectan con un set de pruebas diseñado específicamente para forzarlas. Acá está cómo se arma.',
    category: 'evaluacion',
    categoryLabel: 'Evaluación',
    readingTime: '9 min',
    date: '2026-03-18',
    cover:
      'https://placehold.co/1600x900/f1eee7/7c5730?text=Art%C3%ADculo+02',
    content: [
      'Una alucinación es cuando el modelo inventa información que suena verdadera. No es un bug en el sentido tradicional: no hay una línea de código que esté mal. Es un comportamiento emergente del sistema, y por eso es tan difícil de atrapar mirando la salida.',
      'En un estudio jurídico, una alucinación puede ser una cita de jurisprudencia que no existe. En un estudio contable, una tasa impositiva de un período que nunca estuvo vigente. Ambas se ven razonables. Ambas son errores graves si el asociado las usa sin verificar.',
      '## Por qué no se detectan mirando',
      'El problema es que la salida del modelo está calibrada para sonar plausible. Un socio que prueba el sistema durante 10 minutos va a ver 10 respuestas plausibles y va a concluir que funciona. La alucinación aparece justo en el caso donde nadie la está mirando.',
      '**No se detecta con inspección. Se detecta con un set de pruebas diseñado específicamente para forzarla.**',
      '## Cómo se arma el set de pruebas',
      'La metodología tiene tres pasos.',
      '**Paso 1 · Definir la categoría de preguntas donde la alucinación es crítica.** No todas las alucinaciones importan. Si el asistente responde mal el nombre del cliente, es molesto pero recuperable. Si inventa un plazo procesal, es grave. El primer paso es aislar el subconjunto de preguntas críticas.',
      '**Paso 2 · Escribir 20 casos donde la respuesta correcta es "no sé" o "no tengo información suficiente".** Esta es la parte contraintuitiva. El sistema tiene que poder decir "no sé". Si siempre responde algo, está alucinando por diseño.',
      'Los casos deben incluir:',
      '- Preguntas sobre información que el sistema no tiene indexada.',
      '- Preguntas sobre información de otro cliente o expediente.',
      '- Preguntas con datos falsos embebidos ("según el fallo X, que no existe, ¿corresponde Y?").',
      '- Preguntas ambiguas donde el contexto no alcanza para responder.',
      '- Preguntas que mezclan dos temas distintos para forzar confusión.',
      '**Paso 3 · Correr los 20 casos, contar cuántos el sistema responde con información inventada.** No cuántos responde mal — eso es otra métrica. Cuántos responde con datos que no están en la fuente. El número objetivo es cero.',
      'Si el número es mayor a cero, hay un problema. Y no se soluciona ajustando el prompt: se soluciona cambiando el diseño del sistema.',
      '## Cómo se soluciona',
      'Las alucinaciones en sistemas profesionales se reducen con tres cambios de diseño, en orden de impacto:',
      '**Restricción de la fuente.** El sistema solo puede responder con información que está en un corpus auditado. Si la respuesta no está ahí, no responde. Esto se logra con RAG restringido, no con un modelo general.',
      '**Verificación cruzada.** El sistema no puede emitir una respuesta que incluya datos cuantitativos (fechas, montos, tasas, plazos) sin marcarlos y citarlos a la fuente. El asociado puede hacer clic y verificar en dos segundos.',
      '**Límite explícito de temas.** El sistema declina responder sobre temas fuera de su alcance y deriva a un humano. Es mejor un "no puedo responder esto, consultalo con un socio" que una respuesta inventada.',
      '## La evaluación como proceso continuo',
      'El set de 20 casos no se corre una vez. Se corre después de cada cambio en el sistema, cada actualización del modelo, cada modificación del corpus. Es lo que en QA llamamos **regresión**: las pruebas que confirman que lo que funcionaba sigue funcionando.',
      'En IA, la regresión no solo confirma que las respuestas correctas siguen correctas. Confirma que las respuestas inventadas siguen sin aparecer. Es la única forma de mantener un sistema de IA en producción sin sorpresas.',
    ],
  },

  // =====================================================================
  // 03 — Pruebas de regresión para IA
  // =====================================================================
  {
    slug: 'pruebas-de-regresion-para-ia',
    title:
      'Pruebas de regresión para IA: por qué tu demo funciona pero tu sistema real falla los lunes',
    excerpt:
      'El caso ideal siempre funciona. El caso real es un PDF escaneado a las 8 de la mañana con el nombre del cliente mal escrito. Cómo diseñar pruebas que atrapen esos casos antes de que los encuentre tu cliente.',
    category: 'qa-ia',
    categoryLabel: 'QA & IA',
    readingTime: '8 min',
    date: '2026-03-04',
    cover:
      'https://placehold.co/1600x900/f1eee7/7c5730?text=Art%C3%ADculo+03',
    content: [
      'Esta es una escena que se repite en casi todos los proyectos de IA que audito. El sistema se demuestra un viernes a las 4 de la tarde, con un set de datos limpios, preparados, con los casos ideales. Funciona perfecto. Se despliega el lunes. Y falla.',
      'La pregunta es: ¿por qué falla el lunes?',
      '## La diferencia entre el caso ideal y el caso real',
      'En la demo, el PDF está escaneado a 300 dpi, bien rotado, con texto seleccionable. En el caso real, el cliente manda una foto del contrato con el celular, torcida 4 grados, con sombra del pulgar sobre el margen derecho.',
      'En la demo, el nombre del cliente está bien escrito. En el caso real, hay un typo porque la secretaria lo transcribió apurada.',
      'En la demo, el usuario sabe qué preguntar. En el caso real, el asociado pregunta mal porque está apurado y no sabe cómo formular la consulta para que el sistema entienda.',
      '**El 90% de los fallos en producción vienen del 10% de los casos que nadie probó.** No son fallos del modelo: son fallos del sistema al enfrentarse a la variabilidad real.',
      '## Cómo se diseña un set de regresión para IA',
      'Un set de regresión serio tiene cuatro capas.',
      '**Capa 1 · Casos base (happy path).** Los 10-15 casos donde todo está bien y el sistema tiene que responder correctamente. Son los más fáciles. Si fallan, hay un problema grave.',
      '**Capa 2 · Casos de variación de input.** Los mismos 10-15 casos, pero con el input degradado de las formas en que la realidad lo degrada:',
      '- Texto con typos.',
      '- PDFs escaneados a baja resolución.',
      '- Imágenes rotadas.',
      '- Nombres con acentos o caracteres especiales.',
      '- Fechas en formatos distintos (DD/MM/YYYY vs MM-DD-YYYY).',
      '**Capa 3 · Casos de contexto insuficiente.** Preguntas donde el sistema no tiene suficiente información para responder y tiene que declinar. Estos son los que atrapan las alucinaciones (ver el artículo sobre detección de alucinaciones).',
      '**Capa 4 · Casos adversarios.** Inputs diseñados específicamente para romper el sistema. Prompt injection, documentos con texto oculto, preguntas que mezclan dos expedientes distintos en la misma consulta.',
      '**Sin las cuatro capas, el sistema no está probado. Está demostrado.**',
      '## El proceso de regresión',
      'El set se corre en tres momentos:',
      '- **Antes del primer deploy.** Para saber si el sistema está listo.',
      '- **Después de cada cambio en el código o en el corpus.** Para confirmar que lo que funcionaba sigue funcionando.',
      '- **Mensualmente, contra los casos reales del último mes.** Para detectar deriva (drift) antes de que un cliente la detecte.',
      'Cada corrida produce un reporte: cuántos casos pasaron, cuántos fallaron, y qué cambió con respecto a la corrida anterior. Ese reporte es el que permite tomar decisiones con datos en lugar de con sensaciones.',
      '## Por qué esto no lo hace casi nadie',
      'Porque es trabajo invisible. Nadie ve el set de pruebas. Nadie ve el reporte de regresión. Lo que se ve es el resultado: el sistema funciona el lunes a las 8 de la mañana cuando el cliente manda el PDF escaneado. O no funciona.',
      'La diferencia entre un sistema de IA que dura un año en producción y uno que se abandona en tres meses es, casi siempre, esto: tener o no tener un set de regresión serio detrás.',
    ],
  },

  // =====================================================================
  // 04 — Guía de implementación
  // =====================================================================
  {
    slug: 'integrar-asistente-de-ia-en-tu-estudio-juridico',
    title:
      'Integrar un asistente de IA en tu estudio jurídico: guía de 4 pasos para evitar el caos',
    excerpt:
      'Cómo pasar de "vamos a usar IA" a tener un asistente que el equipo realmente use. Sin caos, sin abandono, sin tres meses perdidos.',
    category: 'implementacion',
    categoryLabel: 'Implementación',
    readingTime: '10 min',
    date: '2026-02-19',
    cover:
      'https://placehold.co/1600x900/f1eee7/7c5730?text=Art%C3%ADculo+04',
    content: [
      'La mayoría de los estudios jurídicos que arrancan con IA lo hacen mal. No por falta de tecnología — al contrario, hoy es más fácil que nunca. Lo hacen mal por falta de secuencia: empiezan por la herramienta, sin haber definido antes qué problema resuelve.',
      'Esta guía es una secuencia concreta para hacerlo bien. Son 4 pasos, en orden. Saltearse uno es la forma más rápida de terminar con una herramienta abandonada.',
      '## Paso 1 · Elegir la tarea correcta',
      'No todas las tareas son buenas candidatas para un asistente de IA. Las que funcionan cumplen tres condiciones:',
      '- **Son repetitivas.** Se hacen muchas veces por semana, con variaciones chicas entre una vez y otra.',
      '- **Consumen tiempo no facturable.** Son tareas administrativas o de preparación, no el trabajo profesional en sí.',
      '- **Tienen un output verificable.** Es fácil darse cuenta si el resultado está bien o mal.',
      'Ejemplos que cumplen: resumen de expedientes largos, extracción de datos de contratos, redacción de primeras versiones de minutas, clasificación de documentación entrante.',
      'Ejemplos que no cumplen: redacción de escritos judiciales finales, estrategia procesal, negociación con la contraparte. Estas tareas tienen un costo de error demasiado alto y una variabilidad demasiado grande.',
      '**Empezá por una sola tarea. No por cinco.** El error clásico es querer resolver todo a la vez.',
      '## Paso 2 · Definir qué significa "funciona"',
      'Este paso es el que casi todos saltean y el que más se nota después. Antes de escribir una línea de código, hay que responder por escrito:',
      '- ¿Qué tiene que hacer el sistema, exactamente?',
      '- ¿Qué NO tiene permitido hacer?',
      '- ¿Cómo sabemos que funciona? ¿Con qué criterios, medidos cómo?',
      '- ¿Cómo sabemos que falla? ¿Qué casos límite tenemos que probar?',
      'Un ejemplo concreto para un asistente que resume expedientes:',
      '- **Debe** extraer: partes, objeto, estado procesal, próximos vencimientos.',
      '- **No debe** inventar información si algún campo no está en el expediente. Debe marcarlo como "no encontrado".',
      '- **Funciona** cuando extrae correctamente los 4 campos en al menos el 95% de los casos de un set de 50 expedientes de prueba.',
      '- **Falla** cuando inventa un vencimiento que no está en el expediente. Cero tolerancia a esto.',
      'Ese documento — una carilla, dos como máximo — es la especificación. Es lo que va a permitir saber, en tres meses, si el sistema hizo lo que tenía que hacer.',
      '## Paso 3 · Construir con criterio de ingeniería',
      'Acá es donde se separan los proyectos que duran de los que se abandonan. La tentación es armar el asistente con prompts sueltos en un chat y llamarlo sistema. No funciona.',
      'Un sistema serio tiene:',
      '- **Un corpus auditado.** La base de conocimiento que el asistente puede usar. Documentada, versionada, con criterios claros de qué entra y qué no.',
      '- **Límites de confidencialidad.** El asistente no puede mezclar información de expedientes distintos. Esto no es un prompt: es una restricción arquitectónica.',
      '- **Logs de cada interacción.** Quién preguntó qué, cuándo, y qué respondió el sistema. Es lo que permite auditar y mejorar.',
      '- **Trazabilidad de fuentes.** Cada respuesta cita el documento del que salió la información. El asociado puede verificar en dos clics.',
      '**Esto no es un asistente de IA. Es un sistema de software con IA adentro.** La diferencia se nota a los tres meses.',
      '## Paso 4 · Evaluar y mantener',
      'El sistema no se entrega y se olvida. Se entrega con un set de pruebas que corre todas las semanas, y un reporte que el estudio revisa.',
      'El reporte tiene tres números:',
      '- **Precisión.** Porcentaje de casos donde el sistema respondió correctamente.',
      '- **Falsos positivos.** Cuántas veces inventó información. Tiene que ser cero.',
      '- **Falsos negativos.** Cuántas veces declinó responder cuando sí tenía la información. Tiene que ser bajo.',
      'Con esos tres números, el estudio sabe si el sistema está funcionando mejor o peor que el mes pasado. Y puede tomar decisiones con datos en lugar de con sensaciones.',
      '## Lo que no hay que hacer',
      'Tres errores que veo siempre:',
      '- **Empezar por la herramienta.** "Vamos a usar ChatGPT Team" no es un proyecto, es un gasto.',
      '- **No definir criterios de aceptación.** Sin ellos, cualquier respuesta parece buena.',
      '- **No integrar al flujo existente.** Si el asistente vive en un navegador y el trabajo vive en Outlook, no se usa.',
      'La buena noticia: ninguna de estas tres cosas es difícil. Solo requiere frenar y hacer el trabajo previo antes de contratar la herramienta. Los estudios que lo hacen son los que tres meses después tienen un asistente que el equipo usa todos los días.',
    ],
  },

  // =====================================================================
  // 05 — Automatización contable
  // =====================================================================
  {
    slug: 'automatizacion-de-documentos-en-estudios-contables',
    title:
      'Automatización de documentos en estudios contables: cuánto tiempo puedes recuperar realmente',
    excerpt:
      'La respuesta corta: mucho, pero menos de lo que prometen los vendedores. Un desglose honesto de dónde está el ahorro real y dónde no.',
    category: 'automatizacion',
    categoryLabel: 'Automatización',
    readingTime: '7 min',
    date: '2026-02-05',
    cover:
      'https://placehold.co/1600x900/f1eee7/7c5730?text=Art%C3%ADculo+05',
    content: [
      'Cada vez que un estudio contable me contacta, la conversación arranca igual: "queremos automatizar la carga de facturas y documentos". Y cada vez tengo que dar la misma respuesta incómoda: la automatización real ahorra menos de lo que prometen los vendedores de software, pero mucho más de lo que el estudio cree.',
      'Vamos a desglosar dónde está el ahorro real.',
      '## Lo que la automatización sí resuelve',
      'Hay tres tareas concretas donde el ahorro es grande y consistente.',
      '**Ingesta de documentos.** Un sistema que recibe documentos por email, los clasifica por tipo, extrae los datos clave y los carga al sistema de gestión. Esto reemplaza entre 2 y 4 horas semanales por persona en un estudio mediano.',
      '**Extracción de datos estructurados.** Facturas de proveedores, recibos de sueldos, extractos bancarios. Los sistemas de OCR modernos con validación contra el sistema contable reducen errores de carga y liberan tiempo del personal junior.',
      '**Validaciones cruzadas.** Comparar automáticamente los datos cargados con los datos de origen y marcar discrepancias. Esto no reemplaza el control humano pero sí elimina el 80% de los chequeos manuales repetitivos.',
      '## Lo que la automatización no resuelve',
      'Acá viene la parte honesta.',
      '**Documentos mal escaneados.** Si el cliente manda una foto del remito con el celular, torcida y con sombra, ningún sistema lo resuelve bien. Sigue haciendo falta un humano que lo mire. La automatización reduce la frecuencia, no la elimina.',
      '**Casos atípicos.** Un proveedor nuevo, un tipo de documento que el sistema no vio antes, una factura con un formato raro. Estos casos van a requerir intervención manual siempre. Cuanto más grande el estudio, más frecuentes estos casos.',
      '**Relación con el cliente.** La conversación con el cliente sobre sus documentos no se automatiza. El sistema le puede enviar un recordatorio automático, pero la respuesta a "che, ¿por qué me pedís esto de nuevo?" sigue siendo humana.',
      '**Decisiones contables.** El sistema puede preparar la información, pero no decide. La clasificación de un gasto como deducible o no, la interpretación de una norma, la recomendación al cliente, todo eso sigue siendo trabajo profesional.',
      '## Cuánto tiempo se recupera realmente',
      'Hagamos el cálculo para un estudio mediano: 4 contadores, 1 administrativo, 150 clientes activos.',
      'Antes de automatización:',
      '- Ingesta de documentos: ~10 horas semanales entre todos.',
      '- Carga manual al sistema: ~6 horas semanales.',
      '- Validaciones cruzadas: ~3 horas semanales.',
      '- Total: ~19 horas semanales en tareas automatizables.',
      'Después de automatización (con un sistema bien implementado):',
      '- Ingesta de documentos: ~4 horas semanales (casos atípicos y documentos mal escaneados).',
      '- Carga manual: ~2 horas semanales (verificación de la carga automática).',
      '- Validaciones cruzadas: ~1 hora semanal (revisar excepciones).',
      '- Total: ~7 horas semanales.',
      '**Ahorro real: ~12 horas semanales.** En un estudio con un costo cargado de USD 30 por hora por persona, son USD 360 semanales, unos USD 1.500 mensuales.',
      'Ese número es real, pero tiene tres condiciones:',
      '- El sistema tiene que estar bien implementado (no es magia).',
      '- El equipo tiene que usarlo (integración al flujo).',
      '- El volumen tiene que justificarlo (en estudios muy chicos, el overhead no se amortiza).',
      '## Lo que no hay que creer',
      'Los vendedores suelen prometer ahorros del 80% o 90%. En la práctica, el ahorro realista está entre el 60% y el 70%, con las condiciones de arriba.',
      'La diferencia entre el 70% real y el 90% prometido no es un problema del sistema: es que el 20-30% restante son casos límite que siempre van a existir. Un proveedor que promete el 90% está o mintiendo o no entendió el problema.',
      '## Cómo evaluar la inversión',
      'La pregunta correcta no es "¿cuánto cuesta la automatización?". Es "¿cuántas horas por semana me ahorra, y a cuánto valen esas horas?".',
      'Si el ahorro es de 12 horas semanales y el costo del sistema es USD 500 mensuales, el retorno es evidente. Si el estudio tiene 30 clientes en lugar de 150, el ahorro puede ser de 3 horas semanales, y la cuenta cambia.',
      '**Empezá por medir cuánto tiempo consume cada tarea hoy.** Sin ese número, cualquier evaluación de automatización es una opinión.',
    ],
  },

  // =====================================================================
  // 06 — SDD aplicado
  // =====================================================================
  {
    slug: 'sdd-aplicado-como-definir-que-significa-que-tu-sistema-funcione',
    title:
      'SDD aplicado: cómo definir qué significa que tu sistema de IA "funcione"',
    excerpt:
      'Specification-Driven Development aplicado a IA. Por qué escribir la especificación antes de tocar el código es la diferencia entre un sistema que dura y uno que se abandona.',
    category: 'metodologia',
    categoryLabel: 'Metodología',
    readingTime: '9 min',
    date: '2026-01-22',
    cover:
      'https://placehold.co/1600x900/f1eee7/7c5730?text=Art%C3%ADculo+06',
    content: [
      'Hay una frase que repito en cada proyecto: "Antes de construir, entiendo. Después defino. Recién después escribo la primera línea." No es un eslogan. Es un método.',
      'Se llama Specification-Driven Development (SDD), y es la aplicación de algo que la ingeniería de software hace hace décadas al mundo de la IA. La idea es simple: la especificación no es un documento burocrático, es el contrato que define cuándo el sistema está bien construido.',
      '## Por qué SDD importa más en IA que en software tradicional',
      'En software tradicional, la especificación define comportamiento determinista. "Cuando el usuario hace clic en este botón, se guarda el registro en la base de datos". Se puede verificar con un test binario: pasa o no pasa.',
      'En IA, la especificación tiene que convivir con la incertidumbre. "Cuando el usuario pregunta sobre un contrato, el sistema responde con información del contrato, y no inventa". Esto no es binario. Es estadístico. Es un umbral.',
      '**La especificación en IA tiene que incluir tres capas: qué debe hacer, qué no debe hacer, y cómo medimos ambas cosas.**',
      '## Las tres capas de una especificación de IA',
      'Vamos con un ejemplo concreto: un asistente para un estudio contable que responde preguntas sobre normativa impositiva.',
      '**Capa 1 · Qué debe hacer.**',
      '- Responder preguntas sobre normativa vigente.',
      '- Citar la norma específica en cada respuesta.',
      '- Ofrecer la respuesta en menos de 5 segundos.',
      '- Reconocer cuándo la pregunta está fuera del alcance y declinar.',
      '**Capa 2 · Qué no debe hacer.**',
      '- Inventar números de norma.',
      '- Responder con información de un cliente cuando se le pregunta sobre otro.',
      '- Dar consejos específicos que correspondan a un contador público.',
      '- Responder sobre normativa derogada como si estuviera vigente.',
      '**Capa 3 · Cómo medimos.**',
      '- Precisión: 95% de respuestas correctas en un set de 100 preguntas.',
      '- Trazabilidad: 100% de respuestas incluyen cita a la norma.',
      '- Seguridad: 0 respuestas con información de clientes cruzada.',
      '- Alcance: 100% de preguntas fuera de tema son declinadas explícitamente.',
      '- Latencia: 95% de respuestas en menos de 5 segundos.',
      '**Sin las tres capas, la especificación está incompleta. Y sin especicación completa, no hay forma de saber si el sistema está bien.**',
      '## Por qué la gente saltea este paso',
      'Por dos razones, ambas entendibles y ambas equivocadas.',
      '**Razón 1 · "Es obvio qué tiene que hacer".** No lo es. Lo que es obvio es la idea general. Los detalles son donde está el trabajo, y los detalles son exactamente lo que la especificación define.',
      '**Razón 2 · "Frena la velocidad".** Es cierto, escribir la especificación lleva tiempo. Un día, dos como máximo. Pero el tiempo que ahorra después es exponencial: sin especificación, cada discusión sobre si el sistema funciona se vuelve una discusión de opiniones. Con especificación, es una discusión de números.',
      '## Cómo se escribe en la práctica',
      'Una especificación de IA no tiene que ser un documento de 40 páginas. Tiene que ser:',
      '- **Escrita.** En un archivo, no en la cabeza del socio.',
      '- **Corta.** Dos a cuatro páginas. Si es más, probablemente incluya cosas que son decisiones de implementación, no requisitos.',
      '- **Verificable.** Cada punto tiene que poder traducirse en una prueba concreta.',
      '- **Acordada.** El socio y el equipo técnico la firman. Es el contrato del proyecto.',
      '- **Viva.** Se actualiza cuando cambia el alcance, y cada cambio se documenta con fecha y motivo.',
      '## El proceso completo',
      'SDD aplicado a IA tiene cuatro fases:',
      '- **Entender.** Cómo trabaja el estudio hoy. Dónde se pierde tiempo, qué decisiones se toman a ciegas.',
      '- **Definir.** La especificación de las tres capas. Es la fase más importante y la que más se saltea.',
      '- **Construir.** Con criterios de ingeniería. La especificación guía cada decisión.',
      '- **Evaluar.** Contra la especificación. Cada punto de la capa 3 es un test.',
      'El ciclo se repite: cada nueva función, cada cambio de alcance, pasa por las cuatro fases. No es un método de una sola vez. Es la forma de trabajar.',
      '## La diferencia que hace',
      'Al principio parece burocracia. A los tres meses, cuando el sistema está en producción y hay que decidir si conviene ampliarlo, la diferencia es enorme.',
      'Sin SDD, la decisión es "¿lo ampliamos? No sé, probémoslo y vemos". Con SDD, la decisión es "la precisión bajó del 95% al 91% en el último mes, hay que ajustar el corpus antes de ampliar".',
      'La primera es una corazonada. La segunda es un dato. Y en un estudio profesional, la diferencia entre las dos es la diferencia entre improvisar y dirigir.',
    ],
  },
];

/**
 * Helpers para filtrar y acceder a los posts.
 */
export const getPostBySlug = (slug) =>
  blogPosts.find((p) => p.slug === slug);

export const getPostsByCategory = (categoryId) =>
  categoryId === 'all'
    ? blogPosts
    : blogPosts.filter((p) => p.category === categoryId);

export const getRelatedPosts = (currentSlug, category, limit = 3) =>
  blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);

/**
 * Ordena los posts por fecha descendente (más nuevos primero).
 */
export const getSortedPosts = () =>
  [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));