# Documentación — capa de gobernanza para programación autónoma

Manual de uso de la colección. Explica **para qué sirve cada skill, cuándo actúa, qué te
da y cómo se instala**.

> **Qué no encontrarás aquí:** el procedimiento interno de cada skill. Eso vive dentro de
> cada una y cambia con el tiempo; repetirlo aquí crearía una segunda versión que acabaría
> mintiendo. Esto documenta **el contrato**: lo que puedes esperar. Para el detalle, abre
> la skill.

---

## 1. Qué es esto

Un conjunto de once skills que, instaladas juntas, hacen que se pueda **programar hablando
en lenguaje corriente** sin que el trabajo pierda rigor.

La idea de fondo: hay un puñado de buenas prácticas que marcan la diferencia entre un
proyecto que aguanta y uno que se desmorona —comprobar antes de decir que algo está
terminado, dejar escrito por qué se decidió cada cosa, mirar la pantalla en vez de suponer,
no tocar lo que funciona—. Normalmente dependen de que alguien se acuerde. **Aquí no
dependen de eso.**

### Cómo funcionan juntas sin conocerse

Ninguna skill nombra a otra. Se coordinan de dos formas:

- **Por descripción.** Cada una declara cuándo es útil. Lo que pides encaja con una y esa
  se activa. No hay cableado entre ellas.
- **Por el ciclo instalado.** Las que actúan solas necesitan una línea en un archivo que se
  lea al principio de cada conversación. Ese archivo las encadena a todas en un orden, y
  **ahí es donde se cablea el flujo completo** — fuera de las skills, que siguen sin
  conocerse entre ellas.

Consecuencia práctica: **puedes instalar una sola y funciona.** Y puedes instalarlas todas
y funcionan como un sistema.

---

## 2. Activas y pasivas

Es la distinción que más conviene entender.

**Las activas se despiertan porque tú dices algo.** «Apunta esto», «dame ideas», «vamos a
revisar el proyecto». No hay que configurar nada: se instalan y ya responden.

**Las pasivas actúan solas, en un momento concreto.** Por ejemplo, justo antes de que se te
diga que un trabajo está terminado. Ese momento no lo anuncias tú, así que **no hay ninguna
frase que las despierte** — y por eso necesitan una línea instalada donde se lea en cada
conversación. Las cinco líneas juntas son el ciclo de trabajo.

**Si no instalas esa línea, la skill está ahí pero no hace nada.** Sin aviso, sin síntoma.
Por eso la instalación tiene dos pasos.

| Skill | Cómo actúa |
|---|---|
| `planificar-proyecto` | Activa |
| `constructor-del-manual` | Activa |
| `lluvia-de-ideas` | Activa |
| `apuntar` | Activa |
| `auditar-proyecto` | Activa |
| `registrar-comprobacion-humana` | Activa |
| `investigar` | **Pasiva** |
| `validar-antes-de-entregar` | **Pasiva** |
| `registrar-cambios` | **Pasiva** |
| `mirar-la-pantalla` | **Pasiva** |
| `recorrer-la-aplicacion` | **Pasiva** |

---

## 3. Instalación

**El procedimiento completo está en [INSTALAR.md](INSTALAR.md)**, con los dos caminos
posibles, los comandos y cómo comprobar que ha funcionado. Aquí solo va la forma, para que
se entienda por qué es así.

**Paso 1 — Copiar las skills.** Cada una es una carpeta con su archivo dentro. Van a la
carpeta de skills, la tuya de usuario o la del proyecto: se elige una de las dos, **nunca
las dos a la vez**.

**Paso 2 — Poner el ciclo de trabajo.** Un solo archivo en la carpeta de reglas, con una
línea por skill pasiva: dice en orden qué pasa en cada momento del trabajo y **cuál de ellas
lo hace**. Cada skill declara su línea en su archivo `INSTALACION.md`; el ciclo es esas cinco
líneas puestas en orden.

**Este segundo paso lo haces tú.** Puedes pedírselo a Claude —enseñándole
[INSTALAR.md](INSTALAR.md) y las declaraciones— y que te proponga los archivos antes de
crearlos, pero **no ocurre solo ni hay ninguna skill que lo haga**: es un paso manual,
asistido si quieres.

**Por qué hacen falta dos pasos:** no existe ningún mecanismo que permita a un paquete
escribir en el manual de tu proyecto, ni ejecutar nada al instalarse. Está comprobado contra
la documentación oficial, no supuesto.

### Qué aparece al configurar

Un solo archivo, en la carpeta de reglas del sitio donde hayas instalado —la del proyecto, o
la tuya de usuario:

```
.claude/rules/            (o bien  ~/.claude/rules/)
└── ciclo-de-trabajo.md
```

Dentro, una línea por skill pasiva, en orden: antes de construir, se investiga; nada más
cambiar algo visible, se mira; al acabar un camino, se recorre; antes de reportar terminado,
se valida; al cerrar, se registra. **Cada línea nombra la skill que hace ese paso**, y
desinstalar una es borrar su línea.

**Lo que ese archivo no lleva es el procedimiento de las skills, y es lo que lo hace
funcionar.** Dice **cuándo**, nunca **cómo**: el cómo vive dentro de cada skill y solo ahí,
así que para cumplir la línea hay que abrirla.

Suena a detalle y es lo contrario. Durante un tiempo cada regla llevaba además el
procedimiento corto, para que funcionara sin la skill. Resultado medido: **el texto corto
resuelve el momento, nadie busca más, y la skill no llega a abrirse** — de tres, se abrió
una. El repuesto compite con lo que debería reemplazar, y gana el repuesto.

En su lugar, el ciclo lleva una **salvaguarda**: si una de esas skills no está, se dice y lo
decides tú, en vez de improvisar un sustituto. Así una desinstalación **se nota**; con el
procedimiento copiado no se notaba nunca.

Si no hay carpeta de reglas —porque uses otra herramienta—, el ciclo va dentro del documento
de instrucciones que tenga, entre marcas de inicio y fin que dicen en texto llano de dónde
salió y que puede retirarse.

### Se instala todo y se configura todo

**Las once se instalan y el ciclo va entero, en cualquier proyecto.** Sin excepciones y sin
decisiones que tomar.

Podría parecer que algunos pasos sobran —¿para qué el de mirar la pantalla en un proyecto
sin nada visible?—. No sobran, porque **están redactados en condicional**: «algo *visible
para alguien*», «*un camino que una persona pueda recorrer*». Donde no hay nada que encaje,
la condición no se cumple y el paso no llega a activarse. Está cargado y dormido.

Configurarlo todo tiene dos ventajas sobre hacerlo a medias:

- **No hay que acordarse de nada.** Todos los proyectos se comportan igual, y no hay que
  comprobar qué está activo antes de fiarse.
- **El día que el proyecto cambie, ya está puesto.** Si le sale una interfaz donde antes
  no había, ese paso empieza a actuar solo.

### Si has editado el ciclo a mano

Al reinstalar o actualizar, se compara con lo declarado. Si coincide, se sustituye. **Si no
coincide, está tocado: no se toca, se te enseña la diferencia y se pregunta.** Tus cambios
no se borran en silencio.

### Si vienes de una versión anterior a la 0.2.0

Hasta la `0.1.2` el paso 2 eran **cinco archivos de regla** con el procedimiento corto
dentro. Desde la `0.2.0` es **uno solo con el ciclo, sin procedimiento**. Al actualizar hay
que crear el nuevo **y borrar los cinco viejos**: dejar los dos es el peor resultado
posible, porque tendrías el ciclo diciendo que abras la skill y al lado el texto que hace
que no haga falta. El procedimiento está en [INSTALAR.md](INSTALAR.md).

---

## 4. El flujo completo

Así encajan de principio a fin:

**1. Tienes una idea** → `planificar-proyecto`. Te pregunta en lenguaje llano hasta que la
idea quede definida. Sale `PROYECTO.md`.

**2. Conversación nueva** → `constructor-del-manual`. Lee esa definición y escribe el manual
del proyecto: las reglas de trabajo, y el ciclo que encadena las skills instaladas. Deja el
terreno preparado.

*El ciclo de partida lo deja puesto la instalación, una sola vez, siguiendo
[INSTALAR.md](INSTALAR.md). Lo que hace esta skill es afinarlo con lo que este proyecto
tenga de verdad — y si encuentra reglas sueltas de una versión anterior, proponer que el
ciclo las sustituya.*

**3. Se construye.** Y mientras se construye, actúan solas: `investigar` antes de algo
complejo, `mirar-la-pantalla` tras un cambio visual, `recorrer-la-aplicacion` al terminar
un flujo, `validar-antes-de-entregar` antes de decirte que está hecho, y `registrar-cambios`
al cerrar.

**4. Tú compruebas** → `registrar-comprobacion-humana` anota lo que confirmes.

**5. Y cuando quieras** → `lluvia-de-ideas` para abrir, `auditar-proyecto` para repasarlo
todo, `apuntar` para no perder nada por el camino.

---

## 5. Las once, una por una

### `planificar-proyecto` · activa

**Para qué.** Convertir una idea contada como tú la cuentas en un proyecto definido, antes
de escribir una línea de código.

**Cuándo.** «Tengo una idea», «quiero hacer una aplicación que…», «ayúdame a definir esto».

**Qué te da.** Una conversación de preguntas en lenguaje llano —nunca técnico— hasta que tú
digas que la idea está cerrada. Al final, un resumen de lo entendido para que lo corrijas,
y después el documento `PROYECTO.md`.

**Lo que no hace.** No escribe código, no elige tecnología hasta el final, y **no da la
planificación por terminada por su cuenta**: termina cuando tú lo digas.

**Instalación.** No necesita nada.

---

### `constructor-del-manual` · activa

**Para qué.** Escribir el manual del proyecto: el archivo que se lee al principio de cada
conversación y gobierna cómo se trabaja ahí.

**Cuándo.** Al preparar un proyecto nuevo, cuando pidas dejar listo para trabajar uno ya
definido, o cuando el manual de uno existente se haya quedado viejo o demasiado largo.

**Qué te da.** No solo un documento: **un reparto**. Cada regla va al sitio que le toca
—manual, regla de zona, skill o bloqueo automático— y se te explica por qué. Y distingue
tres niveles de prohibición, incluido uno intermedio que te pregunta aunque trabajes sin
aprobaciones.

Y no deja las obligaciones como una lista de normas sueltas: **escribe el ciclo de trabajo**
que encadena las skills que haya instaladas de verdad, **nombrándolas**, para que se lean
como un método y no como cinco deberes independientes.

Con dos cosas que deciden si funciona: **no copia el procedimiento de ninguna** —el ciclo
dice cuándo, y el cómo vive dentro de cada skill—, y **deja una salvaguarda** para que, si
alguna no está instalada, se diga en vez de improvisar.

En un proyecto que ya existe, primero te enseña un diagnóstico y **tú eliges cuánto se
interviene**: retoque, poda o rehacerlo. Con copia de seguridad, y nunca borra una regla
que no entienda.

**Lo que no hace.** No define el producto: define cómo se trabaja en él.

**Instalación.** No necesita nada.

---

### `investigar` · pasiva

**Para qué.** Que no se decida de memoria cuando equivocarse sale caro.

**Cuándo.** Sola, antes de construir algo. Pasa cinco comprobaciones de una línea y solo
investiga si alguna salta — la primera corta casi todos los casos, así que no se dispara
por cualquier cosa. También si se lo pides expresamente.

**Qué te da.** Una investigación acotada, con una pregunta concreta, **buscando en contra y
no a favor**, y un documento con lo encontrado, lo descartado y las fuentes.

**Lo que no hace.** No decide. Y respeta lo que decidiste queriendo: lo investigado informa,
no manda. **Y no investiga si no puede consultar fuentes fuera**: lo dice antes de empezar,
en vez de entregar deducciones propias con aspecto de investigación.

**Instalación.** **Sí.** Sin su línea en el ciclo, sus comprobaciones no llegan a pasarse nunca.

---

### `validar-antes-de-entregar` · pasiva

**Para qué.** Que «está terminado» sea una afirmación comprobada, o una frase honesta sobre
lo que no se ha podido comprobar.

**Cuándo.** Justo antes de decirte que algo está hecho.

**Qué te da.** Tres bloques: qué se ejecutó y con qué resultado real, **qué quedó sin
comprobar y por qué**, y qué te toca comprobar a ti —entre cinco y nueve puntos concretos,
no un «échale un ojo»—.

Si el proyecto no tiene comprobaciones definidas, te propone unas explicadas en cristiano y
**se quedan como tuyas**.

**Lo que no hace.** No dice que sea lo que pediste. Verde significa «no está roto de las
formas que este proyecto sabe detectar», nada más.

**Instalación.** **Sí, y es la más necesaria.** Su momento es enteramente interno.

---

### `registrar-cambios` · pasiva

**Para qué.** Que dentro de seis meses se pueda saber **por qué el proyecto es como es**.

**Cuándo.** Al terminar cualquier trabajo con efecto real, antes de darlo por cerrado.

**Qué te da.** Una entrada en `CHANGELOG.md` con su identificador, la fecha, la zona, **la
decisión con su porqué y qué alternativa se descartó**, y la validación realmente ejecutada.

**Lo que no hace.** No entra lo mecánico —formateo, erratas—, ni ideas ni pendientes: aquí
solo lo ya hecho. Y **el pasado no se reescribe**: si algo se revierte, se añade una entrada
nueva que nombra a la anterior.

**Instalación.** **Sí.**

---

### `mirar-la-pantalla` · pasiva

**Para qué.** Ver la interfaz de verdad en vez de suponer que está bien. *Los tests dicen si
las cuentas salen; no dicen si se puede leer.*

**Cuándo.** Tras cualquier cambio visible, antes de darlo por terminado. También si dices
que algo se ve raro, se sale o no se lee.

**Qué te da.** Capturas de la aplicación real abiertas y juzgadas —no una suposición—,
mirando por separado si se lee, si cabe, cómo queda vacío y cómo queda en el otro tema. Y al
terminar, **te pide que confirmes que es lo que querías**, porque eso no está en ninguna
captura.

**Lo que no hace.** No audita rendimiento, no comprueba caminos, y no ve lo que solo existe
en el aparato de verdad —teclado del móvil, gestos, giro—: eso te lo pide a ti, en concreto.

**Instalación.** **Sí**, y va en todos los proyectos: donde no haya nada visible, su condición no se cumple y su línea queda dormida sin estorbar.

**Montaje.** La primera vez en cada proyecto hay que montar el navegador automatizado, y
decidir con qué aparato y a qué tamaño se captura. Está en su archivo `MONTAJE.md`, aparte
para no cargarlo las demás veces. **Sin eso no puede trabajar**: lo dice y se para, y si el
cambio se entrega igual, se entrega sin mirar.

---

### `recorrer-la-aplicacion` · pasiva

**Para qué.** Comprobar que **el camino funciona cuando lo recorre una persona**. Las
comprobaciones automáticas verifican las piezas, no el trayecto.

**Cuándo.** Al acabar de construir o cambiar un camino que alguien puede recorrer.

**Qué te da.** La aplicación conducida por su interfaz, sin atajos, hasta el final. Y si
hizo falta un atajo para avanzar, **ese recorrido no cuenta como comprobado** y se dice.

**Antes de tocar nada** comprueba contra qué entorno trabaja, y si hay algo que alguien
echaría de menos, te avisa antes de la primera pulsación. Y limpia lo que crea, incluso si
el recorrido falla a la mitad.

**Lo que no hace.** No juzga el aspecto, y no sustituye a las comprobaciones del proyecto:
es lenta y frágil, y comprueba que algo funciona *ahora*.

**Instalación.** **Sí.**

**Montaje.** La primera vez en cada proyecto hay que montar el navegador automatizado, y
decidir contra qué entorno se recorre y con qué credenciales se entra. Está en su archivo
`MONTAJE.md`. **Sin eso no puede trabajar**: lo dice y se para.

---

### `registrar-comprobacion-humana` · activa

**Para qué.** Guardar lo que **tú** has comprobado con tus manos. Es la única información
que hoy no guarda nada: un registro de cambios solo habla de cosas que cambiaron, y cuando
revisas algo, la mayor parte de lo que compruebas **está bien**.

**Cuándo.** Cuando confirmas haber probado algo: «ya lo he probado y va bien», «esto lo dejo
así, no lo arreglamos».

**Qué te da.** Líneas en `COMPROBACIONES.md` con cinco estados fijos. Dos de ellos no los
guarda ningún otro documento: **lo aparcado a propósito** —que te protege de que alguien
«arregle» en seis meses algo que decidiste dejar— y **el hallazgo abierto**, que es deuda y
no decisión.

**Lo que no hace.** No comprueba nada: escribe lo que tú dictas. No inventa resultados ni da
por confirmado lo que nadie confirmó.

**Instalación.** No necesita nada.

---

### `auditar-proyecto` · activa

**Para qué.** Recorrer el proyecto entero hasta que no quede ninguna parte sin mirar nunca.
**Lo no comprobado es invisible**: no genera avisos y se confunde con lo que está bien.

**Cuándo.** «Vamos a revisar el proyecto», «¿qué partes no hemos mirado nunca?».

**Qué te da.** La lista completa de zonas, y dentro de cada una **el catálogo de lo que hace
de verdad, sacado del código** — porque «moderación revisada» no significa nada. Cada punto
con su estado, y avisando de lo que cambió desde su última revisión y qué cambió.

**Lo que no hace.** No comprueba —tú compruebas— y **no escribe nada**: la lista y el avance
se calculan cada vez leyendo el proyecto y el historial. No puede desincronizarse porque no
hay nada que sincronizar.

**Instalación.** No necesita nada.

---

### `apuntar` · activa

**Para qué.** Registrar una idea o un pendiente **sin implementarlo**. Quien dice «apúntalo»
está pidiendo justo que no se haga ahora.

**Cuándo.** «Apunta esto», «que no se me olvide», «esto para más adelante».

**Qué te da.** Una línea en `PENDIENTES.md`, en su sección temática, con marcas de frescura
para ver de un vistazo por dónde se movió el proyecto. Si además desarrollas el cómo, eso va
a `pendientes-extra.md` con su identificador, para que la lista siga leyéndose de un vistazo.

**Al completarse no se borra: se tacha en su sitio** con la referencia del cambio. Una idea
tachada explica por qué el proyecto es como es.

**Lo que no hace.** No prioriza, no estima, no planifica, y no implementa — ni lo que parezca
de dos minutos.

**Instalación.** No necesita nada.

---

### `lluvia-de-ideas` · activa

**Para qué.** Proponer cosas que no se habían pensado, con criterio y sin relleno.

**Cuándo.** «Dame ideas», «¿qué le falta a esto?».

**Qué te da.** Dos pasadas. Primero **lo evidente**, en lista compacta para despachar en
veinte segundos. Y después **tres ideas desarrolladas**, cada una citando algo concreto de
tu proyecto, con su juicio y su mejor argumento en contra. Tres, no veinte: nueve de golpe
significa que cada una recibió la novena parte de la atención.

**Lo que no hace.** No implementa, no prioriza y no rellena para llegar a un número. Si de
una vuelta salen dos ideas buenas, son dos.

**Instalación.** No necesita nada.

---

## 6. Los documentos que aparecen

| Documento | Quién lo escribe | Qué guarda |
|---|---|---|
| `PROYECTO.md` | `planificar-proyecto` | Qué es el proyecto y qué no. Núcleo congelado |
| `PENDIENTES.md` | `apuntar` | Lo que quieres hacer algún día |
| `pendientes-extra.md` | `apuntar` | El desarrollo técnico de una idea |
| `CHANGELOG.md` | `registrar-cambios` | Lo ya hecho, y por qué |
| `COMPROBACIONES.md` | `registrar-comprobacion-humana` | Lo que has comprobado a mano |
| El manual del proyecto | `constructor-del-manual` | Cómo se trabaja aquí |

**Si el proyecto ya tiene uno de estos con otro nombre, se respeta el suyo.** Los nombres
estándar son para cuando se crea de cero.

---

## 7. Convenciones fijas

No se eligen por proyecto. Tenerlas iguales en todas partes es lo que permite leer un
documento ajeno sin aprenderse una leyenda nueva.

- **`CH-001`** — identificador de cambio. Tres cifras, correlativo, sin huecos.
- **`EXTRA-1`** — identificador del desarrollo técnico de una idea.
- **`D-1`** — identificador de una decisión en la definición del proyecto.
- **🟠 ⚪** — marcas de frescura: naranja lo tocado en la última ronda, blanco la anterior,
  sin marca lo más viejo.
- **✅ 🐛 🎨 ⚠️ ❌** — los cinco estados de lo comprobado: confirmado correcto, fallo
  encontrado y corregido, cambio aplicado sin que hubiera fallo, aparcado a propósito,
  hallazgo abierto.
- **`✅ Realizado`** + texto tachado — cómo se cierra un pendiente, sin borrarlo nunca.
- El registro de cambios es **una tabla**, una fila por entrada.

---

## 8. Cosas que conviene saber

**Puedes renunciar a cualquier cosa.** Si dices «esto no lo compruebes» o «no investigues,
tira», se respeta sin discutir — y se deja dicho en la entrega que se hizo sin comprobar.
No se anuncia en cada mensaje porque las pasivas existen precisamente para que no tengas que
gestionarlas, pero la puerta está ahí.

**Nada de esto garantiza cumplimiento.** El manual del proyecto se lee y se sigue, pero no
es una barrera. Para lo que jamás debe ocurrir hace falta un bloqueo automático de verdad —
y el constructor del manual te avisa cuando algo lo necesita, en vez de dejarte creer que
escribirlo basta.

**Solo funcionan sobre lo que se ve en un navegador**, las dos que miran y recorren. En
aplicaciones nativas no se configuran, y lo dicen en vez de fingir cobertura.

**Y esas dos necesitan un paso extra**: montar el navegador automatizado, una vez por
proyecto y solo si el proyecto tiene interfaz. No montarlo no rompe nada del resto — esas
dos se paran y lo dicen. El procedimiento está en [INSTALAR.md](INSTALAR.md).
