---
name: recorrer-la-aplicacion
description: Conducir la aplicación web por su interfaz real, como lo haría una persona, para comprobar que un camino completo funciona de principio a fin — dar de alta algo, completar un formulario, recorrer un flujo entero. Úsala cuando pidan probar que algo "se puede hacer de verdad", cuando las pruebas pasen pero haya dudas de si el flujo funciona, o antes de dar por bueno un camino nuevo.
---

# Recorrer la aplicación

Las pruebas automáticas comprueban piezas sueltas, y casi siempre rodeadas de imitaciones:
un servidor falso, unos datos inventados, un reloj detenido. Todas pueden pasar mientras el
camino real está cortado, porque nadie lo ha andado entero ni una vez.

Esta skill lo anda. Abre la aplicación de verdad y la **conduce**: pulsa, escribe, envía,
espera, y comprueba que se llega al final.

## La pregunta que responde

**«¿Funciona el camino cuando lo recorre una persona?»** Solo esa.

No responde a si se ve bien —una pantalla puede funcionar y ser ilegible—, ni a si el
camino es el que se quería. Puede completarse un alta impecable de algo que nadie pidió
poder dar de alta. **Confirmar la intención sigue siendo de quien lo encargó**, y hay que
decírselo al entregar, no dejarlo entender.

## Solo lo que vive en un navegador

Sirve para aplicaciones web servidas por HTTP, sea cual sea la tecnología de detrás. **No**
sirve para aplicaciones nativas de escritorio ni de móvil. Si el encargo es una de esas,
dilo claramente en vez de fingir una cobertura que no existe.

## Montarlo, la primera vez

**Solo la primera vez en cada proyecto.** Conducir la aplicación necesita un navegador
automatizado, y además dos decisiones que no se inventan: contra qué entorno se recorre y
con qué credenciales se entra. Todo eso está en `MONTAJE.md`, en esta misma carpeta.

Están aparte porque no pintan nada las demás veces. **Si el proyecto no lo tiene montado,
esta skill no puede trabajar**: dilo y ofrece montarlo, en vez de dar el recorrido por hecho
o buscar un atajo por debajo.

## Cuándo toca recorrer

**Siempre que se acabe de construir o cambiar un camino que una persona pueda andar por la
interfaz, y antes de darlo por terminado.** Que las comprobaciones automáticas pasen no
sustituye a esto: verifican las piezas, no el trayecto.

No aplica cuando lo que se ha tocado no tiene camino que andar —algo que se ejecuta solo
por detrás, una transformación de datos, una pieza interna sin puerta de entrada en la
pantalla—. Ahí no hay recorrido posible, y decirlo con esas palabras es más útil que montar
un paseo decorativo para poder marcar una casilla.

## Antes de tocar nada: mira dónde estás pisando

**Mirar una aplicación es inofensivo. Conducirla, no: crea datos de verdad.** Un formulario
de alta recorrido tres veces deja tres registros dentro, y un flujo de borrado recorrido una
vez destruye algo que existía.

Antes de la primera pulsación:

1. **Averigua contra qué entorno vas a trabajar.** Mira la configuración que use el
   proyecto para distinguir entornos, la dirección a la que apunta, y qué credenciales hay
   puestas.
2. **Por defecto, el entorno real.** Es el más fiel —mismas reglas, mismos permisos,
   mismos límites— y un entorno aparte siempre acaba desviándose de él, que es justo por
   donde se cuelan los fallos que solo aparecen en producción. Si el proyecto todavía no lo
   usa nadie, no hay nada que sopesar: adelante, y limpia al terminar.
3. **La única razón para apartarse de ahí es el daño posible**, nunca la etiqueta del
   entorno: que dentro haya algo que alguien echaría de menos si se estropea —gente
   usándolo de verdad, datos que costó construir—. Y en ese caso **no lo decidas tú: avisa
   y que lo decida quien manda**, que igual prefiere que se recorra igual con una cuenta
   suya. Recorrer un camino destructivo —borrar, cancelar, dar de baja— sube el listón: ahí
   se avisa siempre antes de la primera pulsación.
4. **Si no consigues determinar dónde estás, pregunta.** No lo deduzcas por el nombre ni
   por que «parece de pruebas». Equivocarse aquí no estropea una comprobación: estropea
   datos de alguien.

Y aunque no haya usuarios, si el sitio lo comparte más gente, lo que dejes dentro le
molestará a quien entre después.

## Recórrelo como lo haría una persona

**Por la interfaz, sin atajos.** Nada de saltar a una dirección interna para esquivar un
paso, ni de dejar el estado montado por debajo para empezar más adelante, ni de accionar
funciones internas directamente.

El motivo es que **el atajo se salta justo lo que había que comprobar**. Si tienes que
recurrir a uno para avanzar, ese recorrido **no cuenta como comprobado**: se reporta como
lo que es, un camino que no se pudo terminar andando, y se dice en qué paso hizo falta la
ayuda. Un recorrido asistido que se presenta como recorrido limpio es peor que no haber
recorrido nada.

**Cuenta con que aparezcan cosas que no esperabas.** Avisos de cookies, mensajes
emergentes, sesiones caducadas, confirmaciones que no estaban la última vez. Son la causa
más habitual de que un recorrido se tuerza, y **forman parte del camino**: si le aparecen
a una persona, te tienen que aparecer a ti. No las esquives por debajo — atiéndelas como
las atendería ella, y si estorban de verdad, eso ya es un hallazgo.

**Espera a algo observable, nunca a un temporizador.** Que aparezca un texto, que un botón
se habilite, que la fila esté en la lista. Los tiempos fijos fallan al azar en cuanto la
máquina va más lenta, y una comprobación que falla al azar deja de creerse a los tres días.

## Abre el recorrido con un encargo, no con una lista de pasos

Antes de la primera pulsación, di en una frase **qué vas a recorrer y qué estás
buscando**. Por ejemplo: «dar de alta algo desde cero y comprobar que aparece en la lista
y se puede volver a abrir».

Lo que da dirección es el **qué se busca**, no los pasos. Un encargo bien puesto orienta
sin decir dónde hay que pulsar — y esos pasos se deciden andando, que es justo de donde
sale el valor de este método.

Sirve además para dos cosas prácticas: permite saber cuándo el recorrido ha terminado, y
deja constancia de qué se probó aunque el guion se tire. Sin encargo, un recorrido no se
puede cerrar ni contar.

## Qué recorrer

1. **El camino principal primero**: el que atraviesa lo que se ha cambiado, de principio a
   fin, hasta la confirmación final. Si esto no pasa, lo demás sobra.
2. **Y luego donde se rompen las cosas**, que casi nunca es el camino feliz:
   - enviar con lo obligatorio vacío,
   - meter algo que no vale (formato raro, cifras enormes, texto larguísimo),
   - retroceder a mitad y volver a entrar,
   - enviar dos veces seguidas,
   - recargar con el proceso empezado.

No hace falta hacerlas todas siempre: elige las que el cambio pueda haber roto. Pero di
cuáles recorriste y cuáles no.

## Deja la aplicación como estaba

Es la parte que más se olvida y la que más molesta cuando falta.

- **Apunta lo que vas creando, uno a uno.** Cuando la aplicación te devuelva un
  identificador al crear algo —el número de la fila, la dirección donde ha quedado—,
  **anótalo**. Esa lista es la forma fiable de borrar después: se borra **lo que se
  registró**, no lo que parezca tuyo.
- **Y márcalo además con algo único de esta ejecución**, no con una etiqueta genérica:
  un texto distintivo junto con la fecha y la hora. La marca genérica es peligrosa —
  borrar «todo lo que empiece por prueba» puede llevarse por delante lo que otra persona
  está usando en ese momento. El borrado por marca es **el último recurso**, no el
  primero.
- **Deshazlo por la propia aplicación si tiene forma de hacerlo.** Su botón de borrar, su
  cancelación, su función de deshacer. Es la vía preferente por dos motivos: no deja restos
  incoherentes con lo que la aplicación espera, y de paso compruebas gratis que ese borrado
  funciona.
- **Si esa forma no existe todavía, ve a los datos directamente.** Es lo normal cuando lo
  que se acaba de construir es justo el alta y el borrado aún no está hecho: quedarse de
  brazos cruzados solo deja basura. Pero al ir por debajo se pierden las salvaguardas de la
  aplicación, así que se extrema el cuidado:
  - Localiza los registros **por los identificadores que anotaste al crearlos**. Solo si
    no los tienes, por la marca única de esta ejecución — nunca por «los últimos» ni
    «los que parecen de prueba».
  - Comprueba antes qué cuelga de ellos. Un borrado directo puede arrastrar cosas
    relacionadas en cascada, o al revés, dejar huérfano algo que apuntaba ahí.
  - Borra exactamente eso y nada más, y **di al terminar qué has borrado y por dónde**.
    Haber tenido que ir por debajo es información, no un detalle a omitir.
- **Borra solo lo tuyo.** Ante la más mínima duda de si algo lo creaste tú, **no lo
  toques** y dilo al terminar. Dejar basura identificada es un incordio; borrar algo ajeno
  es un destrozo. No están al mismo nivel.
- **Limpia también cuando el recorrido falle a la mitad.** Es justo cuando quedan cosas a
  medio crear, y justo cuando es más fácil marcharse sin recoger.
- **Si no puedes limpiar algo, dilo exactamente**: qué quedó, dónde, y cómo reconocerlo.
  Nunca lo dejes en silencio.

## Qué reportar

- **Qué camino se recorrió**, paso a paso y en corto, para que se entienda qué se probó.
- **Dónde se rompió, si se rompió**: el paso exacto, qué se esperaba y qué pasó.
- **Qué no se recorrió** y por qué.
- **Qué quedó dentro**, si algo quedó.
- Y el recordatorio de que esto dice que el camino funciona, no que sea el camino que se
  quería.

## El recorrido se deduce cada vez; el guion se tira

Esto no es una manía nuestra: es el núcleo de una disciplina con nombre —las **pruebas
exploratorias**— en la que aprender, diseñar la prueba y ejecutarla ocurren a la vez. Su
argumento central es que en las pruebas con guion **el aprendizaje ocurre antes de
ejecutar, y luego hay que volver a hacerlo durante la ejecución**: lo importante se
descubre andando, y un guion escrito de antemano no puede contenerlo.

El guion que escribas para conducir la aplicación es **de usar y tirar**, y no por
descuido: es lo que hace que esto funcione.

**El recorrido hay que deducirlo de nuevo cada vez, a partir de lo que se acaba de
cambiar.** Quien acaba de construir la funcionalidad es quien mejor sabe qué caminos ha
abierto, cuáles ha tocado de refilón y por dónde puede haber quedado un cabo suelto. Esa
deducción, rehecha desde cero, explora sitios distintos en cada pasada — y ahí es donde
aparecen los fallos que nadie estaba buscando.

Un guion guardado hace justo lo contrario: recorre eternamente el mismo camino, el que a
alguien se le ocurrió el primer día. Todo lo que quede fuera de esa línea deja de mirarse
para siempre, y encima con la sensación tranquilizadora de que «está cubierto».

A eso se suma el coste: estos recorridos se rompen en cuanto cambia un texto o se mueve un
botón, y una pila de ellos abandonados y en rojo enseña al equipo a ignorar los avisos —
peor que no tenerlos, porque también se ignoran los de verdad.

Si aun así alguien quiere conservar uno, que sea una decisión consciente de quien se
comprometa a mantenerlo vivo.

## El riesgo de abusar de esto

Un recorrido completo **parece demostrar más que ninguna otra comprobación**, y por eso
tienta usarlo para todo. Hay un antipatrón conocido para eso: acabar con casi todo el
peso en recorridos completos y pocas comprobaciones pequeñas.

Sale caro, y está medido: los recorridos completos son **los más frágiles de todas las
comprobaciones** —fallan por rarezas del navegador, tiempos, animaciones y avisos
inesperados—, los más lentos, y un solo cambio en la interfaz puede romper docenas a la
vez. En una empresa grande llegaron a medir que el 16% de sus comprobaciones fallaban de
forma inestable, con los recorridos completos contribuyendo de forma desproporcionada.

Así que esto **no sustituye a las comprobaciones pequeñas del proyecto**: las
complementa. Si al terminar un recorrido queda claro que hacía falta una comprobación
automática de algo, dilo — pero no la sustituyas por recorrer otra vez mañana.

## Lo que esta skill no hace

- **No juzga cómo se ve.** Que el camino funcione no dice nada del aspecto.
- **No sustituye a la suite de pruebas del proyecto**: es lenta y frágil, y comprueba que
  algo funciona *ahora*, no que siga funcionando mañana.
- **No inventa credenciales ni datos de acceso.** Si hacen falta y no los hay, se piden.
- **No decide que un fallo es aceptable.** Lo reporta.
