---
name: registrar-comprobacion-humana
description: 'Llevar el historial de lo que una persona ha comprobado a mano - qué se probó, cuándo y con qué resultado, distinguiendo lo confirmado correcto, el fallo encontrado, lo aparcado a propósito y el hallazgo abierto. Úsala cuando alguien confirme haber probado algo por su cuenta ("ya lo he probado y va bien", "esto lo dejo así, no lo arreglamos"), o cuando pregunten qué se comprobó ya de una zona. No organiza revisiones: solo registra lo que ya se ha comprobado.'
---

# Registrar lo que se ha comprobado a mano

Hay una información que hoy se evapora en todos los proyectos: **«lo miré y estaba bien»**.

Un registro de cambios solo puede hablar de cosas que cambiaron — es su naturaleza. Pero
cuando una persona revisa una zona a conciencia, la mayor parte de lo que comprueba **está
correcto**: no genera cambio, no genera entrada, y no deja rastro en ninguna parte. Cuatro
meses después nadie sabe si aquello se llegó a mirar, y se vuelve a mirar.

Este documento guarda precisamente eso. Su valor es acumulativo: el primer día no sirve de
nada, al tercer mes es lo que evita repetir trabajo y lo que corta en seco el «yo pensaba
que eso ya lo había mirado alguien».

## Qué entra y qué no

Entra **lo que una persona ha verificado con sus propios ojos y manos**: ha usado la
aplicación, ha mirado el resultado, ha comparado con lo que esperaba.

No entra lo que diga una comprobación automática. Eso ya tiene su sitio, y **anotarlo aquí
como si lo hubiera confirmado alguien es la forma más rápida de corromper este documento**:
en cuanto contiene confirmaciones que nadie hizo, deja de poder creerse entero.

## Los cinco estados

Cada línea lleva uno, y **los símbolos son siempre estos**. No se eligen por proyecto: que
signifiquen lo mismo en todas partes es lo que permite leer un historial ajeno sin
aprenderse una leyenda nueva. La leyenda se escribe igualmente en la cabecera del
documento, para quien llegue de fuera.

- **✅ Confirmado correcto** — se probó y funciona. El que más se pierde hoy y el que más
  ahorra mañana.
- **🐛 Fallo encontrado y corregido** — con la referencia al cambio que lo arregló, si el
  proyecto lleva un registro donde mirarlo; si no, la fecha.
- **🎨 Cambio aplicado sin que hubiera fallo** — funcionaba, pero al verlo se decidió
  hacerlo de otra forma.
- **⚠️ Aparcado a propósito** — se vio, se sabe que no está del todo bien, y **se decidió no
  tocarlo ahora**.
- **❌ Hallazgo abierto** — se vio algo mal y sigue mal.

**Y aparcar cosas es lo normal, no un síntoma de dejadez.** Ningún proyecto arregla todo
lo que encuentra; un documento con varios puntos aparcados está sano, no descuidado. Lo
que no es sano es que estén aparcados **sin que nadie lo haya decidido**.

**Los dos últimos son la razón de ser de este documento**, porque no los sabe expresar
ningún otro. Desde fuera, algo aparcado a propósito es indistinguible de un descuido: sin
esta anotación, alguien lo «arregla» dentro de seis meses sin saber que era una decisión.
Y la diferencia entre los dos es la intención: uno es una decisión tomada, el otro una
deuda pendiente. Confundirlos vacía de sentido a los dos.

## Cómo se anota

Agrupado **por zona** —el módulo, la pantalla, el flujo— y dentro de cada zona **por
fecha**. Así se puede preguntar «¿qué sabemos de esta zona?» y responderlo de un vistazo.

Y **concreto**. La utilidad de una línea depende entera de esto:

- Inútil: «probado el listado, correcto».
- Útil: «el listado con la cuenta recién creada y sin datos: el mensaje de vacío sale
  centrado y el botón de crear funciona».

**Pero no todo pide el mismo detalle**, y esto importa más de lo que parece: exigir lo
mismo a cada línea cansa, y lo que cansa se deja de anotar — perdiendo justo lo que este
documento existía para guardar.

- **Lo confirmado de rutina: breve.** Basta con que se entienda qué se probó.
- **Los hallazgos, lo aparcado y las zonas delicadas: con detalle.** Son las líneas que
  alguien va a leer de verdad y sobre las que va a decidir algo.

La prueba: dentro de seis meses, alguien tiene que poder decidir **si lo que él va a tocar
estaba cubierto por esa comprobación o no**. Si la línea no permite decidirlo, está mal
escrita.

Anota también lo que se probó **y falló**, aunque se arreglara acto seguido. Que una zona
haya dado problemas antes es justo lo que quieres saber antes de volver a tocarla.

## Quién dice qué

**La persona prueba y dicta el resultado; esta skill lo escribe.** Nada más, y esto es
estricto:

- **No inventes resultados.** Solo se anota lo que se ha dicho expresamente.
- **No conviertas una decisión en un fallo.** Si alguien dice «esto lo dejo así», es
  aparcado a propósito, no un hallazgo abierto.
- **No des por confirmado lo que nadie confirmó**, ni por parecido con otra comprobación,
  ni porque «se sobreentiende».
- **No juzgues la decisión.** Si te parece que algo aparcado debería arreglarse, dilo en la
  conversación; el documento registra lo que se decidió, no lo que opinas.

Si algo se dicta de forma ambigua, pregunta en qué estado va antes de escribirlo. Un estado
mal puesto envenena el documento entero, porque lo que se lee dentro de meses es el símbolo,
no el matiz que había en la cabeza de quien lo dijo.

## Antes de tocar una zona, léelo

Es donde se cobra todo lo anterior. Antes de meter mano en algo, mirar cuándo se examinó
por última vez y qué salió cambia cómo se aborda el trabajo: no es lo mismo tocar algo
revisado la semana pasada que algo que no ha mirado nadie jamás.

Y si hay un hallazgo abierto o algo aparcado en esa zona, **sale a la luz antes de
empezar**, no después de haberlo pisado.

## Los hallazgos abiertos se cierran, no se borran

Un hallazgo abierto sigue abierto hasta que alguien diga lo contrario. Cuando se resuelva,
**no se borra la línea**: se marca como resuelto en su sitio, con la referencia de lo que
lo arregló. El rastro de que aquello estuvo mal es información sobre esa zona.

### ¿Y si además hay que arreglarlo?

Entonces va a dos sitios, y no es duplicar:

- **Aquí queda el hecho, con su fecha**: «el 3 de marzo se probó el total y sumaba mal».
  Aunque mañana se arregle, eso sigue siendo verdad y sigue contando algo de esa zona.
- **La intención de arreglarlo va donde el proyecto guarde lo que está por hacer**, si
  tiene ese sitio. Ahí sí se cierra cuando se hace.

**Con una excepción: lo aparcado a propósito se queda solo aquí.** No es tarea de nadie,
es una decisión — y meterlo en la cola de trabajo lo convierte en un pendiente eterno que
alguien acabará «resolviendo» sin saber que no había nada que resolver.

## Primera vez en el proyecto

**El archivo se llama `COMPROBACIONES.md`**, en la raíz del proyecto. Siempre ese nombre:
tenerlo igual en todos los proyectos evita tener que buscarlo. Si el proyecto ya lleva uno
con otro nombre, **se respeta el suyo** — no se renombran archivos de nadie.

```markdown
# Comprobaciones

<!-- el archivo se llama COMPROBACIONES.md -->

Historial de lo comprobado **a mano por una persona**: qué se probó, cuándo y con qué
resultado. No recoge resultados de comprobaciones automáticas. Documento vivo: registra
estados, no tareas.

Leyenda: ✅ confirmado correcto · 🐛 fallo encontrado y corregido · 🎨 cambio aplicado sin
que hubiera fallo · ⚠️ aparcado a propósito · ❌ hallazgo abierto sin resolver.

## [Zona]

### AAAA-MM-DD
- ✅ …
```

## Lo que esta skill no hace

- **No comprueba nada.** No prueba, no ejecuta, no verifica: escribe lo que otro verificó.
- **No sustituye al registro de cambios.** Ahí va lo que cambió y por qué; aquí va lo que
  se miró, cambiara algo o no.
- **No decide si una zona está lista.** Enseña lo que se sabe de ella, incluido lo que no
  se ha mirado nunca.
