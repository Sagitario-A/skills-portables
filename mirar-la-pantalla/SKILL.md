---
name: mirar-la-pantalla
description: Ver con tus propios ojos la interfaz que acabas de escribir, haciendo capturas de la app real en un navegador real y abriéndolas para juzgarlas. Úsala para comprobar cualquier cambio visual de una app web —maquetación, estilos, un componente nuevo, colores, textos en pantalla, modo oscuro, tamaños en móvil— antes de darlo por terminado. También cuando alguien diga que algo se ve raro, se sale, no se lee o queda feo.
---

# Mirar la pantalla

Los tests dicen si las cuentas salen. **No dicen si se puede leer.** Escribir interfaz sin
verla es trabajar a ciegas.

Esta skill monta lo necesario para **hacer capturas de la app de verdad y abrirlas tú**. No
es para tests: es para mirar.

## El bucle

1. **Disparar** las capturas de los estados que toque el cambio.
2. **Abrirlas con la herramienta Read**, que muestra las imágenes. Este paso no es opcional
   ni se sustituye por «asumo que estará bien»: si no la has abierto, no la has visto.
3. **Juzgar** la pantalla como si la vieras por primera vez, sin saber qué debería salir.
   Y no de una sola mirada general: ver más abajo.
4. **Arreglar** y volver a 1.

Ningún cambio visual está terminado hasta haber cerrado este bucle al menos una vez.

## Mira varias veces, buscando una cosa cada vez

Una mirada general de «¿se ve bien?» encuentra mucho menos de lo que parece. Está medido
en la evaluación de interfaces por criterio: **una sola persona mirando encuentra en torno
a un tercio de los problemas**, y tres personas encuentran tres cuartos. No porque unas
sean mejores, sino porque **cada una mira buscando cosas distintas**.

Con un solo par de ojos se recupera parte de eso haciendo **pasadas separadas, con un
único criterio cada una**:

1. **¿Se lee?** Contraste del texto sobre su fondo, tamaños, textos sobre imágenes.
2. **¿Cabe?** Algo que se sale, que desborda, que se solapa, que corta una palabra a la
   mitad.
3. **¿Y cuando no hay nada, o hay demasiado?** El estado vacío y el caso extremo con
   textos larguísimos y cifras enormes.
4. **¿Y en el otro tema?** Si la app respeta el del sistema, la pantalla en modo oscuro es
   una pantalla distinta.

Y ayuda mirar desde **situaciones concretas** en vez de en abstracto: alguien en una
pantalla pequeña, alguien que entra por primera vez y no sabe dónde mirar, alguien con la
cuenta llena de datos. Cada situación enseña defectos que las otras no.

## Al terminar, di qué has visto y qué no puedes saber

Cerrado el bucle, hay dos cosas que separar, y confundirlas es prometer de más:

- **Lo que sí puedes afirmar**, y conviene decirlo con esa medida: **que has mirado
  buscando unas cosas concretas y no has visto nada**. No «está bien» — una sola pasada no
  da para afirmar eso. Lo que se ha mirado sí se puede enumerar: que el
  texto se lee sobre su fondo, que nada se sale ni se solapa, que el estado vacío no queda
  deforme, que en modo oscuro no hay negro sobre negro. Eso son defectos objetivos: la
  captura los enseña o no los enseña.
- **Lo que no puedes saber**: si es lo que pidieron. Una pantalla impecable puede resolver
  mal lo que se encargó — el botón en el lado que no era, un texto que dice otra cosa, un
  paso de más en el camino. Ninguna captura contiene la intención de quien lo pidió.

Así que termina siempre diciendo las dos: **qué has mirado y has dado por bueno**, y
**pide que te confirmen que es lo que se quería**. En concreto, no en general: «así queda
el listado vacío y así con datos, ¿es lo que buscabas?» vale; «échale un ojo» no vale.

## Para qué sirve y para qué no

Sirve para cualquier cosa que se vea en un navegador y se sirva por HTTP, sea cual sea la
tecnología de detrás. **No** sirve para apps nativas, de escritorio empaquetadas ni de línea
de comandos.

Y sirve para **mirar**, no para dar caminos por buenos. Aquí se pulsa y se escribe solo
para llegar al estado que se quiere fotografiar; el fin es la imagen. Que el recorrido
funcionara mientras montabas la escena es un indicio agradable, no una comprobación: no
concluyas que un flujo está bien porque lo hayas atravesado de camino a la foto.

## Montarlo, la primera vez

**Solo la primera vez en cada proyecto.** Las instrucciones están en `MONTAJE.md`, en esta
misma carpeta: qué instalar, cómo decidir el aparato y el tamaño con los que capturar, y
cómo se levanta la aplicación.

Están aparte porque no pintan nada las demás veces, y cargarlas en cada uso gastaría
atención a cambio de nada. Si el proyecto ya lo tiene montado, no hace falta abrirlas.

**Si el proyecto no lo tiene montado, esta skill no puede trabajar**: dilo y ofrece
montarlo. Y si el cambio se entrega igual sin montarlo, **eso se entrega sin mirar**, y hay
que decirlo con esas palabras — callarlo es exactamente la sensación de cobertura falsa que
esta skill existe para evitar.

## El fichero de capturas

Va aparte de los tests y **no comprueba nada**: su único trabajo es dejar imágenes.
Copia `plantilla-capturas.ts` de esta carpeta y adáptala.

Dos cosas que hacen que funcione:

- **Espera a que la pantalla esté quieta antes de disparar.** Una captura tomada justo
  después de pulsar sale con el estado anterior. Espera a algo observable —que aparezca un
  texto, que un botón quede marcado—, nunca a un temporizador.
- **Captura también los estados incómodos**: recién instalada y vacía, llena de datos, en
  error, y el caso extremo con textos largos y cifras enormes. Y en los dos temas si la app
  respeta el del sistema, con `test.use({ colorScheme: 'dark' })`.

## Cuándo la captura miente

Una foto puede enseñar algo que el usuario **no va a ver nunca**, y entonces se juzga una
pantalla que no existe. Los cuatro casos conocidos:

- **Animaciones a medio camino.** El elemento sale en una posición intermedia que no
  ocurre en reposo. Si la app anima, **desactiva las animaciones** antes de disparar.
- **Tipografías aún sin cargar.** Con la letra de reserva cambian los cortes de línea y
  los anchos, y con ellos media maquetación. **Espera a que las fuentes estén cargadas**,
  no a que aparezca el texto: el texto aparece antes.
- **Estados de carga.** Los esqueletos y los indicadores giratorios **no tienen momento
  estable**: siempre están cambiando. Espera al contenido de verdad, nunca al esqueleto.
- **Imágenes o recursos externos que no han llegado.** Un hueco en la foto puede ser un
  fallo de maquetación o simplemente una imagen lenta. Compruébalo antes de darlo por
  roto.

La regla de fondo sigue siendo la misma —esperar a algo observable y nunca a un
temporizador—, pero estos cuatro no los resuelve esperar a que aparezca un texto.

## El estado final no es lo único que se ve

Una captura enseña la pantalla **en reposo**. Pero entre que alguien abre la página y esa
quietud pasan cosas que también se ven: contenido que salta al cargar una imagen, texto
que cambia de anchura al entrar la tipografía buena, un aviso que aparece arriba y empuja
todo hacia abajo. Nada de eso sale en la foto final, y todo eso lo sufre quien usa la app.

**La captura sigue siendo el trabajo normal.** Lo de abajo **no se hace por rutina**: una
secuencia cuesta todavía más de mirar que una foto, y en un cambio de color no pinta nada.
Solo se abre con motivo — porque alguien describa algo que suena a movimiento («parpadea»,
«se mueve al cargar», «me cambia el botón de sitio») o porque la medida del punto 2 lo
diga.

**Capturar la secuencia es barato; mirarla no.** Treinta imágenes abiertas se miran las
treinta mal. Así que la pregunta no es cuántas capturar, sino **cuáles merece la pena
abrir**. Y hay una respuesta mejor que ir comparando fotos:

**1. Deja que la herramienta capture la ráfaga sola.** El registro de ejecución de
Playwright guarda **una captura en cada acción** y las presenta como una tira de
fotogramas, junto al estado del documento antes y después. No hay que programar nada: se
activa y ya está. Para la carga inicial, grabar vídeo de la sesión hace lo mismo.

**2. Mide el salto de maquetación en vez de mirar fotogramas.** Cuánto se mueve el
contenido durante la carga es una magnitud con umbral publicado: por debajo de 0,1 se
considera bueno, y **por encima de 0,25 hay algo saltando de forma perceptible**. Un
número decide si hace falta mirar; solo si lo dice, se abre la secuencia y se busca el
fotograma donde salta.

**3. Y si salta, las causas están catalogadas**, así que no hay que adivinar:

- **Imágenes sin dimensiones declaradas** — la causa número uno con diferencia. El
  navegador no sabe cuánto hueco reservar hasta que la imagen llega, y al llegar empuja
  todo lo de debajo.
- **Tipografías que se cambian a mitad** — o el texto está invisible hasta que carga la
  letra buena, o se ve con la de reserva y salta al cambiar de anchos.
- **Contenido inyectado por encima de lo que ya estaba** — un aviso que aparece arriba y
  desplaza la página entera.

**Y el límite que mantiene esta skill siendo lo que es:** que la pantalla dé botes al
cargar **no es un dato de rendimiento, es un defecto visual** — algo que la persona ve y
que le hace pulsar donde no quería. Por eso cabe aquí. Pero la medida **no es un veredicto
ni se reporta como nota**: es solo el interruptor que decide si hace falta mirar.

Esta skill **no audita nada**. No mide tiempos de carga, no da puntuaciones, no entra en
el mundo de las métricas de rendimiento, que es vecino y no es este. Su trabajo sigue
siendo mirar si lo que se acaba de hacer se ve bien.

**Un límite que no hay que cruzar:** comparar fotogramas seguidos **de la misma
ejecución** para localizar dónde se mueve algo es una herramienta de búsqueda. Comparar
contra una imagen guardada para hacer fallar una comprobación es otra cosa, y es la del
apartado siguiente. No conviene deslizarse de una a la otra.

## Por qué esto no acaba abandonado

Existe una práctica parecida en apariencia: guardar una imagen de referencia y comparar
automáticamente en cada cambio, fallando si difiere. **Esto no es eso**, y conviene saber
la diferencia porque aquella tiene un final documentado y conocido: las diferencias
saltan por motivos que nadie pretendía —una fuente, una animación, una fecha—, hay que
revisar a mano lo que no era real, y **el equipo acaba ignorando los avisos, incluidos los
que sí importaban**.

Aquí no hay imágenes de referencia que mantener ni nada que se ponga rojo. Se hacen fotos
**para mirarlas**. No hay ningún aviso que se pueda empezar a ignorar, así que ese final
no puede ocurrir — y por eso no conviene convertir esto en aquello.

## Lo que esta skill no hace, y lo que no puede ver

Son dos cosas distintas y conviene no mezclarlas: lo que **no es su trabajo**, y lo que
**sí sería su trabajo pero una captura no alcanza**.

### No es su trabajo

- **No audita el rendimiento.** No mide tiempos, no da puntuaciones, no persigue métricas.
  La única magnitud que usa —cuánto salta el contenido al cargar— es un defecto que se ve
  con los ojos, y se usa solo para decidir si hay que abrir una secuencia.
- **No comprueba caminos.** Aquí se pulsa para llegar al estado que se va a fotografiar;
  que el recorrido funcionara por el camino es un indicio, no una comprobación.
- **No dice si es lo que se pidió.** Eso no está en ninguna captura: hay que preguntarlo.

### Es visual, pero una captura no llega

Hay defectos visuales que **solo existen en el aparato de verdad**. No están aquí para
hacerlos —no se pueden hacer desde una captura—, sino **para declararlos**: cerrar el
bucle sin mencionarlos da una sensación de cobertura que no es cierta.

**Nombra solo los que apliquen a dónde se va a usar esta app** —la misma pregunta que ya
se contestó al montarla—. Recitar los cinco siempre hace que se lea en diagonal el que sí
importaba.

- **En móvil**: el teclado y qué tapa al abrirse, los gestos del sistema, el giro del
  aparato, la instalación como aplicación en la pantalla de inicio.
- **En cualquier sitio**: el renderizado exacto de las fuentes, que cambia entre sistemas
  y puede mover los cortes de línea.

Y conviértelo en una pregunta concreta, no en un aviso genérico. **Pídele a una persona lo
que solo ella puede ver**: «¿el teclado numérico sale solo al abrir el campo de importe?»
vale; «¿qué tal se ve en tu móvil?» no vale.

## Estados que dependen de la fecha

Mueve el reloj del navegador en vez de esperar:

```ts
await page.clock.install({ time: new Date('2026-08-03T10:00:00') })
await page.goto('/')
// ...deja datos preparados...
await page.clock.setFixedTime(new Date('2026-09-02T10:00:00'))
await page.reload() // ahora la app cree que es septiembre
```
