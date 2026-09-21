---
name: planificar-proyecto
description: Convertir una idea contada en lenguaje corriente en un proyecto definido, mediante conversación y preguntas, antes de escribir una sola línea de código. Úsala cuando alguien diga "tengo una idea", "quiero hacer una aplicación que...", "vamos a planificar esto" o "ayúdame a definir qué quiero", y siempre antes de arrancar un proyecto nuevo.
---

# Planificar un proyecto

Convertir una idea contada como se cuenta una idea —desordenada, a medias, en lenguaje de
persona— en un proyecto definido. **Sin escribir código, sin elegir tecnología y sin correr.**

El objetivo no es que la otra persona aprenda a expresarse en términos técnicos. Es que
pueda hablar como habla, y que al final exista una definición que no deja huecos.

## La regla que hace que esto funcione: no correr

**Prohibido, hasta que la persona diga que la idea está cerrada:**

- proponer tecnologías, servicios o arquitectura;
- diseñar estructura de archivos, base de datos o pantallas;
- escribir código, aunque sea un ejemplo;
- dar la planificación por terminada por iniciativa propia.

Esto va escrito como prohibición por un motivo: **la tendencia natural es converger deprisa**
—a los dos mensajes ya se está proponiendo un stack—. Y converger pronto es cerrar
decisiones antes de saber qué se está construyendo, que es exactamente lo que esta skill
existe para evitar.

Se termina cuando lo diga la persona. No cuando parezca que ya está.

## 1. Averigua desde dónde se arranca

**No empieces a preguntar sin saber cuánto hay ya.** A veces llega una frase suelta; a veces
algo rumiado durante meses con medio diseño hecho; a veces un intento anterior que salió mal.

Escucha primero, resume lo que has entendido, y pregunta solo lo que falte. Interrogar desde
cero a quien ya lo tiene medio pensado hace perder media hora y da la sensación de no estar
escuchando.

## 2. Pregunta como se le pregunta a una persona

**En lenguaje mundano, nunca técnico.** La traducción a decisiones técnicas es trabajo tuyo,
no suyo:

- Mal: «¿base relacional o documental?»
- Bien: «¿tus datos se parecen más a una hoja de cálculo donde todo está relacionado con
  todo, o a fichas sueltas que no se hablan entre ellas?»

De la segunda pregunta sacas la misma decisión, y además la respuesta es fiable.

**Nada de preguntas obvias: ve a lo difícil.** Lo que no se ha pensado todavía, los casos
raros, las contradicciones, lo que pasa cuando algo sale mal. Preguntar lo evidente gasta
paciencia y no aporta nada.

**De pocas en pocas.** Tres o cuatro por vuelta, salidas de lo que aún no se sabe. Un
cuestionario de quince preguntas se contesta mal y mata la conversación.

**Siempre con recomendación.** No un menú neutro: «yo haría esto, por esto». Quien pregunta
sabe más del terreno técnico, y esconderlo detrás de una lista de opciones equivalentes
traslada a la otra persona una decisión que no le corresponde.

Si hay herramienta para presentar preguntas con opciones, úsala; si no, van en el mensaje,
numeradas.

**Cuando pidan una solución concreta, pregunta para qué sirve — pero solo a veces.**
Quien no es técnico describe soluciones porque es más fácil que describir problemas, y ahí
es donde se cuela el error: se construye perfectamente algo que no hacía falta. «Quiero un
botón de exportar» puede significar «quiero recibir un resumen cada mes», y entonces el
botón obliga a acordarse todos los meses.

**El criterio para preguntar es uno: ¿la respuesta cambiaría lo que se va a construir?**
Si no, no preguntes. Eso deja fuera tres casos solos:

- **Ya se ha contado el problema** y luego se propone la solución → no hace falta, ya se
  sabe para qué es.
- **No se te ocurre ninguna alternativa** → saberlo no cambiaría nada, ibas a construir lo
  mismo.
- **Es barato y fácil de deshacer** → un botón mal puesto se mueve en dos minutos.

Y dos correas: **se pregunta una sola vez** por cosa, y **si contestan «porque sí, lo
quiero así», se acabó**. Es su proyecto.

**Empieza por lo que más arrastra.** Hay respuestas de las que cuelga todo lo demás —si hay
cuentas de usuario, si hay varios tipos de usuario, si los datos son de una persona o
compartidos—. Preguntarlas tarde obliga a rehacer media conversación.

**Mira también lo que no se ha dicho.** La gente habla espontáneamente de unos temas y se
calla otros **hasta que se los preguntan** — y el silencio no es acuerdo, es un hueco.

Cada cierto rato, compara la lista de más abajo con lo que ha salido en la conversación y
**pregunta por lo que falta**. Si lleva media hora hablando de pantallas y no ha salido ni
una vez qué pasa cuando dos personas tocan lo mismo a la vez, eso no está decidido: no ha
salido.

**Distingue «no lo sé» de «me da igual».** El primero necesita ayuda para decidir: se le
explican las consecuencias de cada camino en lenguaje llano. El segundo es una delegación:
se decide y se deja anotado que se decidió aquí.

## 3. Lo que hay que sacar sí o sí

Si falta alguna de estas, dolerá después:

- **Qué es, para quién, y sobre todo qué NO es.** El límite es lo único que impide el
  proyecto infinito, y casi nadie lo dice por su cuenta: hay que preguntarlo.
- **Si hay cuentas de usuario, y si hay tipos distintos de usuario.** Cambia absolutamente
  todo lo demás.
- **Qué datos guarda y cuáles son delicados.**
- **Cuánta gente lo va a usar**, en orden de magnitud: diez, mil o un millón.
- **Dinero**: cuánto se puede pagar al mes, si se va a cobrar, de quién es el proyecto.
- **Dónde se usa**: móvil, escritorio o los dos.
- **Qué pasa si se cae o se pierden los datos.** No es lo mismo un juguete que algo de lo que
  dependa gente.
- **Si se trabaja en solitario o hay más manos**, ahora o previsiblemente.
- **Qué se rechaza de antemano**: tecnologías, servicios o caminos que no se quieren.

## 4. Opina, no solo preguntes

Esto es una conversación, no un formulario:

- **Si algo no se puede hacer, dilo cuanto antes**, no al final. Descubrir en el último
  mensaje que la idea central choca con una limitación real es una pérdida de tiempo
  evitable.
- **Si algo va a costar dinero y se quería gratis, dilo en cuanto se vea**, con la cifra
  aproximada.
- **Si dos cosas que se han pedido se contradicen**, señálalo y pide que se elija.
- **Si algo es mucho más caro de construir de lo que parece**, avísalo: a menudo hay una
  versión al 80% que cuesta la décima parte, y merece la pena poder elegir.
- Y **si la idea es buena, dilo también**. La opinión sincera vale en las dos direcciones.

## 5. La propuesta técnica va al final, y como propuesta

Cuando la idea esté cerrada —y solo entonces—, propón cómo se haría: con alternativas, con
lo que cuesta cada una, y con una recomendación razonada. **Necesita aprobación explícita.**

Y no te pases de ahí: el trabajo de esta skill es dejar clarísimo **el qué** y las
restricciones. Diseñar el sistema entero es otra cosa y llega después.

## 6. Antes de escribir nada, devuelve lo entendido

Que exista un documento no garantiza que las dos partes entiendan lo mismo — es un fallo
corriente incluso con todo escrito: **cada uno sale de la conversación con una idea
distinta del plan**, y eso no se descubre hasta que está construido.

Así que antes de redactar, **resume en corto lo que has entendido** y pide que lo
corrijan. Lo esencial: qué es, qué no es, para quién, las restricciones que mandan, y qué
tendrá que poder hacerse para dar el proyecto por terminado.

Es una vuelta más de cinco minutos que evita escribir un documento entero sobre un
malentendido.

## 7. El documento que se produce

**Se llama `PROYECTO.md`** y va en la raíz. Siempre ese nombre, para que se sepa dónde
está sin preguntar. Con estas propiedades:

**Autosuficiente.** Debe entenderse sin haber estado en la conversación. Quien lo lea dentro
de un año no tiene el contexto que tú tienes ahora.

**Dice qué queda fuera de alcance.** Explícitamente, con su lista. Es la mitad del valor del
documento.

**Termina con la comprobación de principio a fin** que demostrará que el proyecto está
hecho: qué tiene que poder hacer alguien, de principio a fin, para que se pueda decir que
aquello funciona. Sin esto, «terminado» queda a interpretación.

**Estructurado para encontrar, no para leer del tirón.** Cada decisión enunciada en una
frase, con su título, y el desarrollo debajo. La prosa corrida de tres páginas obliga a
leerla entera cada vez.

**Con las decisiones numeradas, con el formato `D-1`.** Siempre ese: `D` de decisión,
correlativo y sin huecos. No se elige por proyecto — el manual de trabajo y el registro de
cambios van a citarlas («ver `PROYECTO.md`, D-5»), y una referencia tiene que significar lo
mismo en todas partes.

La decisión es la unidad que se cita, se contradice y se revisa; numerar párrafos o
secciones no sirve para eso.

**Dice qué queda sin decidir, y lo dice en voz alta.** No todo tiene que decidirse ahora,
y forzarlo produce decisiones inventadas que luego nadie se atreve a tocar porque «están
en el documento». Lo que se deja abierto **va escrito como abierto**, con una línea de qué
habrá que decidir y cuándo hará falta.

El motivo: si algo simplemente no aparece, se lee como que no existe. Escrito como
pendiente de decidir, se lee como lo que es — y quien lo retome sabe que ahí hay una
decisión esperando, no un olvido.

**Núcleo congelado y añadidos fechados.** Qué es, qué no es, para quién y los principios **no
se reescriben nunca**. Cuando algo cambie de rumbo, se añade debajo una sección con fecha
que dice qué cambió, por qué, y a qué decisión sustituye. Reescribir el origen borra la
intención original — y con ella la posibilidad de saber si el proyecto se ha desviado o ha
evolucionado.

## 8. Y luego, conversación nueva

**Y di cuál es el paso siguiente, con nombre.** Al entregar el documento, deja claro que
antes de construir nada toca **preparar el proyecto y escribir sus reglas de trabajo**.

Si hay una herramienta instalada que haga eso, dilo con el comando exacto que la invoca,
para que solo haya que copiarlo. Si no la hay, explica en dos líneas qué habría que dejar
escrito a mano.

**El motivo es concreto:** quien acaba de definir su proyecto lo normal es que diga «venga,
a construir», y en esa frase no hay nada que active ese paso. Si nadie lo señala, se
empieza a trabajar sin reglas puestas — y no se nota, porque todo parece ir bien.

## Lo que esta skill no hace

- **No escribe código**, ni siquiera un ejemplo suelto para ilustrar.
- **No elige tecnología** antes de que la idea esté cerrada, y después solo la propone.
- **No decide por la otra persona** lo que la otra persona quiere. Traduce, recomienda y
  avisa; elegir es suyo.
- **No amplía el proyecto.** Si se le ocurre algo que nadie ha pedido, se dice en la
  conversación y se deja fuera del documento salvo que lo acepten.
- **No da la planificación por terminada** por su cuenta.
