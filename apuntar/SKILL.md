---
name: apuntar
description: Anota una idea, mejora o pendiente en el documento de ideas del proyecto sin implementarla, respetando sus convenciones (o creándolas la primera vez). Úsala cuando alguien diga "apunta esto", "anótalo", "añádelo a pendientes", "que no se me olvide" o "esto para más adelante". También para consultar qué hay apuntado.
---

# Apuntar una idea

Dejar constancia ordenada de una idea sobre el futuro del proyecto **sin ejecutarla, sin
planificarla y sin estimarla**. Solo que no se pierda, y que dentro de seis meses siga
entendiéndose sin tener que reconstruir la conversación en la que nació.

Esta skill **nunca escribe código**. Su único efecto sobre el proyecto son uno o dos
archivos de texto.

## Por qué existe

Una idea dictada de pasada muere de dos formas: se olvida, o sobrevive como una línea
suelta que meses después nadie sabe interpretar. Las dos se evitan igual — escribirla
entera en el momento, en un sitio fijo y con un formato constante.

Y hay una tercera muerte, peor: apuntarla y ponerse a hacerla. Quien dice «apunta esto» no
está pidiendo que se haga. Está pidiendo justo lo contrario, que **no** se haga ahora.

## 1. Encuentra el documento antes de escribir nada

Busca en la raíz del repositorio el documento que ya cumpla esta función. Nombres
habituales: `PENDIENTES.md`, `TODO.md`, `IDEAS.md`, `BACKLOG.md`, `ROADMAP.md`,
`NOTAS.md`, o el equivalente en el idioma del proyecto.

**Si existe, manda su formato, no el de esta skill.** Léelo entero antes de tocarlo,
empezando por su cabecera: si tiene convenciones escritas, son las buenas aunque difieran
de lo que se propone más abajo. Si no las tiene escritas pero se le ve un patrón (cómo
agrupa, cómo marca lo hecho), imítalo.

Si no existe ninguno, ve a «Primera vez en el proyecto».

## 2. Decide si es una idea o es un diseño

Es la distinción que mantiene el documento legible:

- **El «qué»** — la idea a secas. Va al documento de ideas.
- **El «cómo»** — si además se ha desarrollado por adelantado la implementación (flujo
  paso a paso, esquema de datos, endpoints concretos, consultas, pantallas), eso **no**
  cabe ahí. Va a un segundo documento hermano —**`pendientes-extra.md`**, siempre ese
  nombre— con un identificador con el formato **`EXTRA-1`**, correlativo y sin huecos. Y en
  el documento principal queda solo la idea con una referencia que invite a ir a leerla:

  ```markdown
  - Permitir exportar el informe mensual — diseño ya desarrollado, ver
    [pendientes-extra.md](pendientes-extra.md) EXTRA-3.
  ```

Sin esa separación, tres ideas bien desarrolladas convierten la lista en un documento
técnico que ya nadie hojea. Con ella, la lista se sigue leyendo de un vistazo y el detalle
está a un clic para quien lo necesite.

## 3. Colócala donde toca

Elige la sección temática que le corresponda. **Si no encaja en ninguna, crea una sección
nueva** en vez de forzarla en la que más se le parezca — una idea metida donde no va es
una idea perdida.

Las secciones son las del proyecto, no una taxonomía fija: en un producto pueden ser sus
áreas funcionales, en otro las capas técnicas, en otro las fases del negocio. Usa el
vocabulario con el que ahí se habla del producto; si al leer la lista alguien del equipo no
reconoce sus propias palabras, la clasificación está mal hecha.

### ¿Punto nuevo o sub-punto de uno que ya existe?

Antes de añadir, mira si ya hay apuntado algo de lo que esto sea una parte.

- **Sub-punto**, si solo tiene sentido dentro del otro: es un matiz, una faceta o una
  condición de esa idea, y completarlo por separado no dejaría nada terminado.
- **Punto aparte**, si podría implementarse y cerrarse por su cuenta aunque la otra idea
  nunca llegue a hacerse, y solo comparten el área del producto.

**La prueba:** ¿esto se puede dar por hecho de forma independiente? Si sí, va suelto. Si
no, se anida.

No es una preferencia estética: de esto depende que el cierre funcione. Un padre solo se
tacha cuando todos sus hijos lo están, así que anidar de más deja ideas terminadas
retenidas por un padre que nunca se cierra, y anidar de menos dispersa una misma idea en
líneas sueltas que se acaban implementando a medias.

Si al anidar el punto padre se queda con muchos hijos y ya se lee mal, dilo al terminar y
propón convertirlo en sección propia. No lo reorganices por tu cuenta.

Si el documento distingue prioridades o tiene una zona explícita de «algún día», respétala:
apuntar algo en la zona activa cuando es una fantasía a tres años ensucia lo que sí está
vivo.

## 4. Redáctala

- **Si la idea en sí no está clara, pregunta antes de escribirla.** Reescribir bien algo
  confuso produce una frase bonita que dentro de seis meses **sigue sin significar nada**,
  y encima con aspecto de estar bien apuntada. Una lista donde hay puntos que nadie
  entiende se deja de leer entera. Basta con preguntar qué se busca conseguir con eso.
- **Completa, aunque llegue desordenada.** Lo que se dicta hablando sale en desorden; se
  escribe claro y ordenado. Eso es reescribir, no interpretar.
- **Sin ampliar el alcance.** No añadas la mejora obvia que se te ocurra encima. Si se te
  ocurre y parece valiosa, dila en el chat y que decida quien manda; no la cueles en el
  documento.
- **Neutra.** Sin defenderla ni criticarla. Es un registro, no una propuesta.
- **Con el porqué, si se dijo.** Una idea sin motivo es indiscutible dentro de seis meses.
- Si contradice algo ya apuntado antes, **apúntala igual y señálalo en una frase** al
  responder. No la descartes por tu cuenta ni la fusiones en silencio con la otra.

## 5. Aplica la edición con cuidado

- **Edición quirúrgica**, no reescribir el archivo entero: es un documento vivo que otros
  editan a mano y cuyo historial importa.
- **No reordenes ni «limpies» de paso** lo que no te han pedido tocar.
- **No toques nada más del proyecto.** Ni código, ni configuración, ni otros documentos.
- Al terminar, resume en una o dos frases qué se apuntó y dónde. No hace falta pedir
  confirmación de que está bien apuntado.

## Convenciones que merece la pena mantener

Si el documento ya las tiene, respétalas. Si lo creas tú, escríbelas en su cabecera para
que sobrevivan a la conversación en que se inventaron.

### Marca de frescura, con ventana de dos rondas

Lo tocado en la ronda actual lleva una marca (🟠); lo tocado en la ronda anterior baja a
una marca más tenue (⚪); lo anterior a eso se queda sin marca. Antes de añadir nada nuevo,
haz esa rotación.

Da algo que una lista larga no da por sí sola: ver de un vistazo por dónde se estuvo
moviendo el proyecto últimamente, sin leer fechas ni el historial de versiones.

### Al completarse no se borra, se tacha

Cuando una idea se implemente, **nunca borres la línea**. Se marca en su mismo sitio con
`✅ Realizado` y el texto tachado (`~~así~~`), acompañado de la referencia que permita ir
al cambio concreto: **su identificador `CH-0NN`** si el proyecto lleva un registro de
cambios, o la fecha si no lleva ninguno.

El motivo es que el documento vale tanto por lo hecho como por lo pendiente: una idea
tachada explica por qué el proyecto es como es, y evita que alguien la vuelva a proponer
como novedad.

Dos detalles:

- **Si solo se hizo una parte**, desglosa la idea en sub-puntos y marca cada uno por
  separado. El punto padre solo se tacha cuando todos sus hijos lo estén.
- **Si se implementó en varias tandas**, lista todas las referencias, no solo la última.
- Una idea ya tachada **queda fuera de la rotación de marcas de frescura**: es registro
  histórico, no idea activa.
- **Mismo criterio en el documento de desarrollos**: su entrada tampoco se borra al
  implementarse, se marca igual. Si se borrara, la idea tachada del documento principal
  quedaría apuntando al vacío.

### Si el proyecto adopta un sistema de seguimiento a mitad de camino

Es habitual empezar sin registro de cambios —los puntos completados se marcan solo con la
fecha— y adoptar uno más adelante. Cuando detectes que ahora existe y que hay puntos ya
completados marcados solo con fecha, **dilo y ofrece ponerlos al día**. No lo hagas por tu
cuenta en mitad de otra petición: es una edición masiva de un documento vivo, y quien lo
mantiene tiene derecho a verla venir.

Si acepta, las reglas de esa pasada:

- **Solo se enriquece lo que tenga correspondencia real.** Busca en el registro la entrada
  que cubra ese cambio, cruzando fecha y descripción. **Si no la hay —lo normal en todo lo
  anterior a la adopción del registro—, el punto se queda con su fecha y punto.** No
  inventes, no deduzcas ni aproximes un identificador para que el formato quede uniforme:
  una referencia inventada lleva al lector a un sitio equivocado, que es peor que no
  llevarlo a ninguno.
- **La fecha no se sustituye, se acompaña.** Es un dato real y verificable; el
  identificador se añade al lado:
  `✅ Realizado — 2026-03-04 (CH-012)`.
- **Ante la duda, no toques.** Si la correspondencia es plausible pero no evidente, deja el
  punto como está y menciónalo al terminar para que lo decida una persona.
- Que queden puntos sin identificador **no es una deuda ni un fallo**: es el rastro de que
  el proyecto existía antes que su registro. Un documento con dos formatos por épocas es
  más honesto que uno uniforme a base de referencias inventadas.

A partir de ese momento, lo que se complete de nuevo ya usa el identificador con
normalidad.

### No lo enlaces desde las instrucciones del proyecto

Si el proyecto tiene un archivo de instrucciones que se carga en toda conversación, el
documento de ideas **no debe estar referenciado desde ahí**, y conviene decirlo en su
cabecera para que nadie lo «arregle» más adelante.

Es deliberado: una lista de mejoras futuras cargada en cada sesión contamina trabajos que
no tienen nada que ver, invitando a arreglar de paso cosas que nadie ha pedido hoy. El
documento se consulta cuando se quiere consultar.

## Primera vez en el proyecto

Si no hay documento, créalo con el nombre **`PENDIENTES.md`**, en la raíz del proyecto.
Siempre ese: tenerlo igual en todos evita buscarlo. Con esta cabecera, y dentro la primera
idea:

```markdown
# Pendientes

Notas de mejoras futuras. Documento vivo, no vinculante, y a propósito no referenciado
desde las instrucciones del proyecto (una lista de ideas futuras cargada en cada
conversación condiciona trabajos que no tienen nada que ver). Se actualiza solo bajo
petición explícita.

> **Marca de frescura**: los puntos tocados en la actualización más reciente llevan 🟠;
> los de la ronda anterior bajan a ⚪; los anteriores se quedan sin marca. Al añadir algo
> nuevo se hace esa rotación primero.
>
> **«Qué» vs «cómo»**: aquí va la idea. Si se desarrolla por adelantado cómo se haría
> (diseño técnico, flujo, esquema de datos), ese detalle va a `pendientes-extra.md` con un
> identificador propio, y aquí queda solo la idea con la referencia.
>
> **Al completarse**: la línea no se borra — se marca `✅ Realizado` con la referencia del
> cambio y se tacha el texto. Si solo se hizo una parte, se desglosa en sub-puntos y cada
> uno se marca por separado. Un punto realizado deja de rotar marcas de frescura.

## [primera sección temática]
- ...
```

Crea el documento hermano de desarrollos solo cuando haga falta el primero, no de entrada.

## Si en vez de añadir te piden consultar

«Qué teníamos pendiente», «léeme las ideas de tal cosa»: lee y resume, y no edites nada.
Consultar no es una excusa para reorganizar.

## Lo que esta skill no hace

- No prioriza, no estima, no asigna, no planifica.
- No decide si la idea es buena.
- No implementa nada, por pequeño que sea. Si lo apuntado se arregla en dos minutos,
  dilo y ofrécelo — pero como pregunta aparte, después de haberlo apuntado.
