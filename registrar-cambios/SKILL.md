---
name: registrar-cambios
description: 'Dejar constancia de un trabajo ya hecho y de la decisión que hay detrás, en el registro de cambios del proyecto: qué se decidió, por qué así, qué se descartó a cambio y qué se comprobó de verdad. Se usa al terminar cualquier trabajo con efecto real, antes de darlo por cerrado. NO sirve para ideas ni cosas pendientes: aquí solo entra lo ya hecho. También cuando pregunten por qué algo está como está, o pidan actualizar el registro de cambios.'
---

# Registrar un cambio

El código dice **qué** hace el proyecto. El historial de versiones dice **qué archivos**
cambiaron. Ninguno de los dos dice **por qué se decidió así y qué se descartó a cambio** —
y eso es exactamente lo que hace falta el día que alguien quiera cambiarlo.

Este registro es la memoria de las decisiones. Se escribe para alguien que dentro de seis
meses no estuvo en la conversación, y que sin él repetirá un experimento que ya salió mal.

**Una tarea no está terminada hasta que su entrada está escrita.** No es papeleo posterior:
es el último paso del trabajo.

## Cuándo escribir una entrada

Sí, siempre que el cambio sea:

- una funcionalidad nueva,
- una corrección de un comportamiento incorrecto,
- una decisión de arquitectura, de dependencias o de configuración,
- o cualquier cosa hecha de una forma rara por un motivo que no se ve en el código.

No, cuando el cambio es mecánico y no encierra ninguna decisión: formateo, renombrados sin
intención, correcciones de erratas, reordenar sin cambiar comportamiento. Registrarlo todo
convierte el documento en ruido y nadie vuelve a leerlo.

**Y lo que no pasa el filtro no va a ningún otro sitio: se descarta.** Si resulta que era una
idea para más adelante y no un cambio hecho, su sitio es donde el proyecto guarde lo que
está por hacer, nunca aquí. Sin esa frontera, el registro se llena de cosas que no son
decisiones y deja de consultarse.

**La prueba para decidir:** ¿alguien podría preguntar dentro de seis meses «¿por qué está
esto así?» y no encontrar la respuesta en el código? Si la respuesta es sí, hay entrada.

## Qué lleva una entrada

Cinco cosas, ni más ni menos:

**1. Un identificador correlativo, con el formato `CH-001`.** Siempre ese: `CH` de cambio,
tres cifras, correlativo y sin huecos. **No se elige por proyecto** — tenerlo igual en
todos permite reconocer una referencia de un vistazo y que signifique lo mismo en
cualquier sitio. Es el ancla: lo que permite que otros
documentos del proyecto señalen a este cambio concreto sin copiar su contenido.

**2. La fecha.** En formato absoluto, nunca «ayer» ni «la semana pasada».

**3. El área tocada.** El módulo, la pantalla o el subsistema, en el vocabulario del
proyecto. Sirve para leer en diagonal buscando todo lo que pasó en una zona.

**4. La decisión técnica, con su porqué.** El campo importante, y el que casi todo el mundo
rellena mal.

- Mal: «Añadido el botón de exportar». Eso ya lo dice el código.
- Bien: qué se hizo, **por qué así**, y **qué alternativa se descartó y a cambio de qué**.
- Si la decisión la impuso una restricción externa, dilo. Si vino de una petición explícita
  de alguien, dilo también: dentro de un año esa será la diferencia entre respetar la
  decisión y «arreglarla» sin saber que era deliberada. **Se anota para explicar, no para
  señalar a nadie**: este registro existe para que se entienda el porqué, no para repartir
  responsabilidad si algo sale mal.
- Si el cambio contradice o sustituye a una decisión anterior, **nómbrala por su
  identificador** y explica qué la invalidó.

**5. La validación ejecutada.** Qué comprobaciones se pasaron y con qué resultado real:
las que el proyecto tenga definidas, y las manuales si el cambio las pedía.

## La regla que da valor a todo lo demás: no mentir en la validación

Es lo más fácil de corromper y lo que más rápido vacía de sentido el documento.

- **Nunca escribas que algo se validó si no se ejecutó.** Ni «OK» por inercia, ni un
  resultado supuesto.
- **Lo que no se pudo comprobar se escribe, y se dice por qué.** «No probado en navegador»,
  «sin poder ejecutar la suite en este entorno», «pendiente de confirmación manual». Una
  entrada que reconoce un hueco es infinitamente más útil que una que finge cobertura: la
  primera te dice dónde mirar cuando algo falle, la segunda te manda a buscar a otro sitio.
- **Los resultados se copian, no se recuerdan.** Si una comprobación devuelve una cifra o
  un fallo, va tal cual.

Un registro en el que se puede confiar hace innecesario repetir el trabajo. Uno en el que
no se puede confiar es peor que no tener ninguno, porque además engaña.

## El pasado no se reescribe

El documento **solo crece**. Nunca edites ni borres una entrada ya escrita, aunque hoy
sepas que aquella decisión fue un error.

Si algo se revierte o se sustituye, se escribe **una entrada nueva** que nombra a la
anterior y cuenta qué la invalidó. Así queda registrado el camino completo —lo que se
intentó, por qué pareció buena idea y por qué dejó de serlo—, que es justo el conocimiento
que evita repetir el intento dentro de dos años.

**Y la entrada antigua recibe un puntero hacia delante.** Además de que la nueva nombre a
la vieja, en la vieja se añade una línea que dice cuál la sustituye. Sin eso, quien lea
la entrada antigua **no tiene forma de saber que está superada** salvo leyéndose el
registro entero hacia delante. Añadir esa línea no altera lo que pasó: es señalización, no
reescritura.

Corregir una entrada solo es legítimo por un motivo: que describa mal lo que realmente
pasó. Nunca para maquillar lo que pasó.

## Escribir para quien no estaba

- En prosa entendible, no en telegrama.
- Sin dar por sabido el contexto de la conversación en la que nació el cambio.
- Nombrando las cosas como se llaman en el proyecto.
- Sin adjetivos de autobombo: no hace falta que ningún cambio sea «robusto» ni
  «definitivo».

## El tamaño de cada entrada

**Que quepa en una pantalla.** No es estética: **lo que pesa escribir se deja de escribir**.
Una entrada que cuesta un cuarto de hora de redacción se escribe cinco veces y a la sexta
ya no.

Si una decisión necesita más espacio del que cabe ahí, lo que hace falta es un documento
aparte y una entrada corta que apunte a él — no una entrada gigante.

## Por qué mueren estos registros, y por qué este no debería

Este tipo de documento tiene un final típico y bien conocido: se adopta con entusiasmo,
se escribe con cuidado unos meses, y **se abandona en silencio**. O porque pesa, o porque
nadie lo consulta. Acaba siendo un sistema de documentación paralelo que se separa de la
realidad en un año y que nadie abre en dos.

El diagnóstico de fondo es estructural, no de disciplina: **el coste de mantener el
registro lo acaba pagando quien menos contexto tiene** para saber si lo escrito sigue
siendo cierto.

Dos cosas de este diseño lo esquivan, y conviene saberlas porque son las que hay que no
romper:

- **Aquí no se mantiene nada.** Al ser de solo añadir, una entrada antigua no se revisa ni
  se actualiza nunca: es el testimonio de lo que se decidió aquel día, y como tal no puede
  quedarse obsoleta. No hay coste de mantenimiento, así que no hay nada que abandonar.
- **Escribirlo no es un paso aparte**, sino el último paso de un trabajo que ya se estaba
  haciendo. Lo que se abandona son las tareas que hay que acordarse de hacer después.

Y lo que sí puede matarlo: **entradas largas** y **entradas que no eran decisiones**. Por
eso el filtro de qué entra y el límite de tamaño no son manías, son supervivencia.

## Formato

Si el proyecto ya tiene un registro, **manda su formato**: imítalo aunque no coincida con
lo de aquí.

**El formato es una tabla, con una fila por entrada.** Siempre esa: es compacta, se recorre
de un vistazo, y con el límite de tamaño de más arriba las filas no se desbordan. No se
elige por proyecto, por el mismo motivo que el identificador.

### Primera vez en el proyecto

**El archivo se llama `CHANGELOG.md`**, en la raíz del proyecto. Siempre ese nombre. Si el
proyecto ya lleva uno con otro nombre, se respeta el suyo.

```markdown
# Registro de cambios

Memoria de las decisiones del proyecto: qué se cambió, **por qué se decidió así**, qué se
descartó a cambio y qué validación se ejecutó. El historial de versiones ya dice qué
archivos cambiaron; esto dice lo que no se puede deducir leyéndolos.

Las entradas no se editan ni se borran: si una decisión se revierte, se añade una entrada
nueva que nombra a la anterior.

| ID | Fecha | Área | Decisión técnica | Validación |
|---|---|---|---|---|
| CH-001 | AAAA-MM-DD | … | … | … |
```

## Qué puede apoyarse en esto

El identificador existe para que otros documentos apunten aquí sin duplicar contenido: una
lista de ideas pendientes puede cerrar un punto señalando el cambio que lo resolvió, un
historial de pruebas puede referirse a la corrección concreta que verificó. No hace falta
que nada de eso exista para que este registro valga por sí solo; pero si existe, el
identificador es lo que lo cose todo.

## Lo que esta skill no hace

- No sustituye al historial de versiones ni lo repite. Aquí no se listan archivos tocados.
- No es una lista de tareas ni de ideas futuras: aquí solo entra lo ya hecho.
- No decide si el cambio estaba bien hecho. Lo registra, incluida su parte no verificada.
- No escribe la entrada antes de que el trabajo esté hecho y comprobado. Una entrada
  redactada por adelantado describe lo que se pensaba hacer, no lo que pasó.
