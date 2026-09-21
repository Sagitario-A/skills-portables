---
name: constructor-del-manual
description: 'Escribir o poner al día el manual del proyecto - el documento de instrucciones que se carga en toda conversación y gobierna cómo se trabaja ahí - repartiendo cada regla en el sitio que le toca y dejando montado el ciclo de trabajo que se repite. Sirve tanto para un proyecto nuevo como para uno ya en marcha. Úsala cuando pidan definir las reglas, convenciones o forma de trabajar de un proyecto, cuando pidan dejar preparado para trabajar un proyecto ya definido, cuando se acabe de definir qué va a ser el proyecto y toque prepararlo, o cuando su manual o documento de instrucciones se haya quedado viejo o demasiado largo. No define el producto: define cómo se trabaja en él.'
---

# Construir el manual del proyecto

Escribir el documento que se lee al principio de cada conversación y que gobierna cómo se
trabaja en este proyecto concreto.

Es el documento de más valor y el más fácil de estropear: todo lo que sobra ahí dentro
**hace que se incumpla lo que sí importa**.

## Antes de nada: esto es contexto, no es una barrera

Un documento de instrucciones se lee y se sigue, pero **no es una configuración que impida
nada**. No hay garantía de cumplimiento estricto, y menos aún con reglas vagas o
contradictorias.

De ahí la consecuencia que hay que decir en voz alta cada vez que aparezca:

> **Para lo que jamás debe ocurrir, escribirlo no basta.**

Si en la conversación surge una prohibición absoluta, escríbela igual, pero **avisa de que
eso necesita un bloqueo automático de verdad** en la herramienta que se esté usando, y
propón montarlo. Dejar una prohibición absoluta solo escrita da una sensación de seguridad
que no se corresponde con nada.

### Tres niveles, no dos

El error habitual es tener solo «bloqueado» y «escrito». Hacen falta tres, y colocar cada
cosa en su nivel es lo que hace que el sistema no estorbe:

**Nivel 1 — Bloqueo duro.** No existe caso legítimo; no ocurre nunca. Candidatos:
- confirmar o subir cambios que contengan claves o credenciales — una vez publicadas en
  cualquier sitio se consideran comprometidas para siempre, y no hay marcha atrás;
- **reescribir lo que ya quedó registrado como pasado**: el historial compartido del
  repositorio, y también las entradas ya escritas de cualquier registro de cambios o
  historial de comprobaciones del proyecto. Añadir encima siempre; reescribir nunca.

**Nivel 2 — Confirmación obligatoria, aunque las aprobaciones estén desactivadas.** Cosas
que a veces hacen falta de verdad, pero que **no deben ocurrir por inercia** en mitad de una
sesión autónoma. Candidatos:
- borrados masivos, o cualquier borrado fuera de la carpeta del proyecto;
- publicar o desplegar;
- escribir o borrar contra el entorno que la persona haya señalado como real.

Este nivel es el que suele faltar, y es el que evita tener que elegir entre «me estorba» y
«me lo cargo sin enterarme».

**Nivel 3 — Instrucción escrita**, para lo que requiere criterio y tiene excepciones
legítimas constantes: no tocar lo que ya funciona, no ampliar el alcance, avisar antes de
gastar dinero. Convertir cualquiera de estas en bloqueo estorba el primer día que haga
falta la excepción.

**El criterio para repartir:** si existe algún caso legítimo en el que se quiera que ocurra,
no es nivel 1. Si además puede hacer daño y es difícil de deshacer, es nivel 2. Si solo
requiere buen juicio, es nivel 3.

### Nada de entornos supuestos

**No des por hecho qué es «producción».** Un proyecto que aún no usa nadie no tiene entorno
real, aunque se llame así. Mientras la persona no diga que algo ya es real, no propongas ese
bloqueo; y cuando lo diga, **que sea ella quien señale cuál es ese entorno**, para apuntar el
bloqueo a un sitio concreto en vez de adivinar por el nombre.

**Propón, no impongas.** Cada bloqueo se acepta o se descarta uno a uno, y conviene decir
que **se puede desactivar a propósito** cuando de verdad haga falta: lo que se evita es que
ocurra por accidente, no impedirlo para siempre.

## El trabajo no es redactar: es repartir

Antes de escribir una línea, cada regla va a uno de cuatro sitios, y meterla en el
equivocado es el error que arruina estos documentos:

| Destino | Cuándo se carga | Qué le corresponde | Coste |
|---|---|---|---|
| **Documento de instrucciones** | Siempre, en cada conversación | Lo que hay que saber siempre y requiere criterio | Alto |
| **Reglas de ámbito limitado** | Solo al tocar ciertos archivos o carpetas | Convenciones de un lenguaje o de una zona | Medio |
| **Skill** | Bajo demanda | Procedimientos de varios pasos, material de consulta | Bajo |
| **Bloqueo automático** | En un evento, siempre y sin criterio | Lo que debe ocurrir o impedirse sin excepción | Ninguno |

Cómo se decide:

- **¿Solo aplica a una parte del proyecto?** → regla de ámbito limitado, para que no se
  cargue cuando no toca.
- **¿Es un procedimiento de varios pasos?** → skill. Un despliegue de treinta líneas metido
  en el documento es peso muerto en cada conversación, incluidas las que no despliegan nada.
- **¿Debe cumplirse siempre y no requiere criterio?** → bloqueo automático.
- **¿Hay que saberlo siempre y hay que pensar al aplicarlo?** → documento de instrucciones.

**Di en voz alta cómo has repartido y por qué.** Quien lo recibe tiene que poder discutirlo,
y el reparto es la mitad del trabajo.

## Qué entra en el documento

La prueba, línea por línea: **¿quitar esto provocaría errores?** Si no, se corta.

| Entra | No entra |
|---|---|
| Comandos que no se pueden adivinar | Lo que se deduce leyendo el código |
| Reglas de estilo **que se apartan de lo estándar** | Convenciones estándar del lenguaje |
| Cómo se prueba y con qué | Documentación de consulta detallada (enlazarla) |
| Etiqueta del repositorio: ramas, commits, publicación | Lo que cambia con frecuencia |
| Decisiones de arquitectura propias | Explicaciones largas y tutoriales |
| Rarezas del entorno que sorprenden | Descripción archivo por archivo |
| Trampas y comportamientos no evidentes | Obviedades tipo «escribe código limpio» |

Y dos prohibiciones que ahorran la mitad del documento:

- **Nunca dupliques lo que ya obliga una herramienta automática.** Si el formateador o el
  analizador estático ya lo imponen, escribirlo gasta atención a cambio de nada.
- **Nunca escribas lo que se puede deducir leyendo el proyecto**: estructura de carpetas,
  lista de dependencias, resumen de arquitectura. Lo que sí se conserva son las trampas, el
  porqué de las cosas y lo que se aparta de lo esperable.

## Lo que hay que aportar porque no se deduce de ningún sitio

Esta es la parte que ninguna herramienta automática puede generar leyendo el código, y por
tanto la más valiosa:

**1. Qué es el proyecto y qué NO es.** El límite, sobre todo.

**2. Normas de conservación.** No tocar lo que ya funciona y nadie ha pedido cambiar; no
ampliar el alcance por cuenta propia; no reorganizar de paso. Van aquí porque tienen que
estar presentes siempre, y una norma permanente no puede depender de que alguien se acuerde
de invocarla.

**3. La lista explícita de cuándo hay que parar y preguntar** en vez de decidir. Es lo que
casi nadie escribe y lo que más se echa en falta. Lo habitual que debería estar:
- gastar dinero o comprometer un coste recurrente;
- cambiar una pieza de fondo ya decidida;
- cualquier cosa destructiva o difícil de deshacer;
- algo que afecte a otras personas o salga hacia fuera;
- ampliar el alcance de lo que se pidió.


**4. Cómo se verifica que algo está terminado**, y la obligación de decir qué no se ha
podido comprobar. Escríbelo como obligación con su momento —«antes de reportar algo como
terminado…»—, y **nombra la skill que lo hace, si hay una instalada**.

Nombrarla no es un descuido: es el reparto que conviene. **El manual guarda el hecho** —qué
hay que hacer y cuándo, que es lo que hay que saber siempre— **y la skill el procedimiento**,
que se carga cuando toca. Un procedimiento de treinta líneas dentro del manual es peso
muerto en todas las conversaciones que no lo necesitan.

Este punto es en realidad **un paso del ciclo**, así que escríbelo ahí y con sus mismas
reglas — nombrar sin copiar el procedimiento, y con salvaguarda. Están en el punto 5.

**5. El ciclo de trabajo, escrito como tal y no como reglas sueltas.** Esta es la pieza que
hace que todo lo demás funcione junto, y la que más se hace mal.

**Qué es.** Un solo texto que dice, en orden, qué pasa en cada momento del trabajo y **qué
skill instalada lo hace**. No cinco avisos sueltos que no se conocen entre sí: un flujo.

Algo de esta forma, con las piezas que haya de verdad:

> En este proyecto se trabaja siguiendo este ciclo. **Cada paso lo hace la skill que lo
> nombra: ábrela, que el procedimiento está dentro de ella y aquí no.**
>
> 1. **Antes de construir cualquier cosa**, abre la skill «…».
> 2. **Nada más cambiar algo visible para alguien**, y antes de darlo por terminado, abre
>    la skill «…».
> 3. **Antes de reportar cualquier trabajo como terminado**, abre la skill «…».
> 4. **Antes de dar por cerrado un trabajo con efecto real**, abre la skill «…».
>
> **Si alguna de estas skills no está instalada, dilo y que lo decida la persona.** No
> improvises un sustituto ni sigas como si el paso no existiera.

Y ahora lo que importa de verdad, que son cinco cosas:

- **Nombra las skills, una por una.** Aquí sí se nombran, y no rompe nada: el manual **no
  es una skill**, es un documento de este proyecto escrito después de comprobar qué hay
  instalado. Lo que no puede hacer una skill —nombrar a otra, y quedarse apuntando al vacío
  si se la llevan suelta— sí puede hacerlo el manual, porque se escribió sabiendo qué hay.
  El cableado vive fuera de las skills, hecho a medida de cada proyecto.

- **No copies su procedimiento. Ni resumido.** Es el error que arruina esta pieza: si el
  ciclo lleva delante una versión corta de cada paso, **las skills no llegan a abrirse**,
  porque ya hay una respuesta delante. El ciclo dice **cuándo**; el **cómo** está dentro de
  cada skill y solo ahí. La línea no se basta sola a propósito: es un puntero, y para
  cumplirla hay que abrir la skill.

- **Con salvaguarda.** La frase del final no es adorno: es lo que sustituye al procedimiento
  copiado. Si una skill se desinstala, el ciclo **lo dice** en vez de improvisar, y así una
  desinstalación se nota. Con el procedimiento copiado no se notaba nunca.

- **A partir de lo instalado de verdad**, no de una lista traída de fuera. Compruébalo antes
  de escribir. Si solo hay dos, el ciclo tiene dos pasos.

- **Solo el ciclo que se repite.** Lo que ocurre una vez —definir el proyecto, escribir este
  mismo manual— **no va aquí**: ya pasó cuando alguien lea esto, y ocupa sitio sin cambiar
  ningún comportamiento.

**En un solo sitio.** Si el proyecto ya tiene un archivo de ciclo en su carpeta de reglas
—puesto al instalar la colección—, **afínalo ahí y no lo copies al manual**. Dos sitios con
el mismo ciclo acaban siendo dos ciclos distintos, y el que miente es siempre el que estás
leyendo. Si no hay carpeta de reglas, el ciclo va en el manual, y entonces el manual es el
único sitio.

**Y si te encuentras reglas sueltas con el procedimiento copiado dentro —una por skill—,
eso es lo que el ciclo sustituye.** Di qué hay, enseña lo que quedaría en su lugar, y
retíralas solo con aprobación. Seis cosas diciendo lo mismo pasan a ser una, y la que queda
es la que sí abre las skills.

Reglas sueltas se leen como obligaciones que cumplir. Encadenadas se leen como un método, y
eso cambia si se siguen o no.


## Cómo se redacta para que se cumpla

- **Concreto hasta poder verificarse.** «Usa dos espacios de indentación», no «formatea
  bien». «Ejecuta tal comando antes de confirmar», no «prueba tus cambios».
- **Estructura, no prosa.** Títulos y listas. Un documento se recorre igual que lo recorre
  una persona: los apartados organizados se siguen; los párrafos densos se saltan.
- **Énfasis solo en lo crítico.** Marcar lo importante mejora que se cumpla; marcarlo todo
  equivale a no marcar nada.
- **Sin contradicciones.** Si dos reglas chocan, se elegirá una al azar. Revisa también los
  documentos heredados de carpetas superiores.
- **Con el porqué de cada restricción.** Una regla sin motivo se salta en cuanto estorba;
  una regla con motivo se respeta incluso en los casos que no previó.
- **Notas para quien mantiene el documento**: si la herramienta las descarta antes de
  cargarlo —los comentarios de HTML en bloque suelen serlo—, úsalas: no cuestan nada.

## El tamaño es una restricción, no un consejo

**Objetivo: por debajo de 200 líneas.** No es estética. Un documento largo no falla en lo
que sobra: hace que se pierdan en el ruido las reglas que importan.

Si no cabe, no se recorta el criterio: **se reparte** entre los otros tres destinos. Y si aun
así crece, es señal de que alguien ha estado añadiendo sin quitar nunca — que es como se
degradan todos estos documentos.

## Antes de cualquier puerta: ¿ya hay un manual?

**Si el proyecto ya tiene documento de instrucciones, para y confírmalo antes de nada.**
Aunque lo hayas escrito tú en una sesión anterior.

Es el documento de más valor del proyecto y el que gobierna todo lo demás. Volver a
ejecutar esto sin querer —porque se pidió otra cosa parecida, o porque nadie recordaba que
ya se había hecho— puede sustituir un manual afinado durante meses por uno recién
generado.

Di qué hay, desde cuándo y cuánto ocupa, y pregunta qué se quiere hacer: **ponerlo al día,
podarlo, o dejarlo como está**. Nada se toca hasta esa respuesta.

## Puerta A — proyecto nuevo

1. **Parte de lo que se decidió al definir el proyecto**: intención, restricciones,
   presupuesto, qué no es. Eso no está en ningún código.
2. **Si la herramienta ofrece generar un borrador** analizando el proyecto, aprovéchalo como
   punto de partida en vez de escribir desde cero, y dedícate a lo que ese análisis no puede
   saber.
3. **Reparte** entre los cuatro destinos y **enséñalo antes de escribir**.
4. **Separa lo compartido de lo personal.** Lo que vale para todo el que trabaje en el
   proyecto va en el documento compartido; las preferencias de una persona concreta —rutas
   de su máquina, sus datos de prueba— van en el sitio personal que quede fuera del control
   de versiones.


## Puerta B — proyecto en marcha

Es la entrada peligrosa: cambiar estas reglas altera cómo se comporta todo a partir de ese
momento.

1. **Lee antes de escribir.** El código, el historial, los documentos que ya existan y las
   instrucciones actuales si las hay. Deduce qué convenciones sigue ya el proyecto y qué
   reglas cumple sin haberlas escrito nunca.

2. **Enseña un diagnóstico antes de proponer nada.** No es lo mismo un proyecto de diez
   años con convenciones asentadas que uno de dos días hecho de una sentada. Di en corto:
   cuánta historia hay, si el código es consistente consigo mismo o cada zona va a su aire,
   si existen instrucciones y en qué estado están (longitud, contradicciones, cuánto es
   derivable del código).

3. **Que elija la persona el nivel de intervención**, a la vista de ese diagnóstico:
   retoque mínimo, poda importante, o rehacerlo de cero. No lo decidas tú: un proyecto malo
   puede ser malo a propósito, y uno bueno puede estar a punto de cambiar de rumbo.

4. **Respeta lo que tenga pruebas de ser una decisión, no lo que simplemente exista.** Con
   este criterio, que no depende de la antigüedad sino de los indicios:
   - **El código hace lo mismo en todas partes** → es una decisión aunque nadie la
     escribiera. Se respeta y se escribe.
   - **Está escrito y el código lo cumple** → se queda.
   - **Está escrito y el código no lo cumple** → uno de los dos miente. Se señala y decide
     la persona; **nunca se elige en silencio**.
   - **Se hizo una vez, hace poco y de forma inconsistente** → no es una convención, es un
     archivo suelto. No se le debe nada.
   - **Ya lo impone una herramienta, o se deduce leyendo el proyecto** → se propone quitar.
   - **Está escrito y no se ve por qué** → se conserva y se pregunta. Una norma rara suele
     ser la cicatriz de un problema real que alguien vivió.

5. **Poda lo que ya no cambia nada.** Entrar aquí no es solo añadir: es también quitar lo
   viejo, lo duplicado y lo que ya está garantizado por una máquina. Un documento que solo
   crece acaba incumpliéndose entero.

6. **Copia de seguridad del documento anterior antes de tocarlo, y di dónde está.** Un
   respaldo que no se menciona no sirve: nadie sabe que puede volver.

7. **Enseña qué va a cambiar** —qué se añade, qué se quita, qué se reescribe— y **aplica solo
   con aprobación explícita**.

## El mini manual para la persona

Además del documento de instrucciones, deja un archivo corto **escrito para quien trabaja,
no para la máquina**:

- **Fuera del documento de instrucciones**: ahí ocuparía atención en cada conversación sin
  cambiar ningún comportamiento.
- **Se genera a partir de lo que hay realmente instalado**, y dice cuándo se generó, para que
  se note si está viejo. Se regenera; no se mantiene a mano.
- **Una línea por cosa, sin reexplicar nunca lo que hace** — reexplicarlo crea una segunda
  verdad que envejece.
- **En tres bloques**: lo que se activa solo; lo que hay que pedir a mano, con su forma de
  invocarlo; y **las obligaciones que se cumplen aunque no haya nada instalado**. Ese tercer
  bloque es el que distingue lo frágil —depende de que siga instalado— de lo duradero, que
  está en el manual del proyecto.

## Cómo saber que el documento está mal

Tres síntomas con su causa probable. Sirven para revisarlo cuando algo va torcido:

1. **Se incumple una regla que está escrita** → el documento es demasiado largo y esa regla
   se pierde en el ruido. Poda.
2. **Se pregunta algo que el documento ya responde** → está redactado de forma ambigua.
   Concreta.
3. **Una instrucción se olvida a mitad de conversación** → o se dio solo de palabra, o vive
   en un sitio que no se recarga. Muévela al documento principal.

Y la regla de fondo: **trátalo como código.** Revísalo cuando algo falle, pódalo con
regularidad, y comprueba si un cambio en él cambia de verdad el comportamiento. Si no lo
cambia, sobra.

## Lo que esta skill no hace

- **No diseña el producto** ni elige la arquitectura. Escribe las reglas de trabajo.
- **No lleva dentro una lista de herramientas conocidas.** Mira qué hay instalado de verdad;
  con una lista fija dejaría de servir fuera de un entorno concreto.
- **No sobrescribe sin enseñar y sin respaldo.**
- **No promete cumplimiento**: escribe instrucciones, y avisa cuando algo necesita un
  bloqueo real en vez de una frase.
