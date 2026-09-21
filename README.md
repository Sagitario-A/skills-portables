# Skills portables

> **Este repositorio se genera y no se edita aquí.** Sale de un repositorio de trabajo
> donde viven además los estudios, las decisiones y las herramientas. Cualquier cambio hecho
> directamente aquí se pierde en la siguiente versión.
>
> ¿Has visto algo que arreglar? Ábrelo como incidencia y se corrige en el origen.

Colección de skills de uso general, cada una destilada de una forma de trabajar que
demostró valer en proyectos reales. Ninguna está atada al proyecto donde nació: se pueden
instalar sueltas, todas juntas, o publicarse.

**Este documento no explica qué hace cada skill.** Eso vive dentro de cada una, en su
descripción de cabecera, que es además el texto por el que se decide cuándo activarla —
una sola fuente de verdad, para que no envejezca por duplicado. Lo que se recoge aquí son
las reglas de la colección y las decisiones de diseño, que no caben dentro de ninguna
skill porque hablan de todas.

**Nada depende de este archivo.** No es una skill, no se carga en ninguna conversación y
ninguna skill lo menciona. Bórralo y todo sigue funcionando exactamente igual. Es
documentación para personas: para quien se encuentre esta carpeta y quiera entender con
qué criterio se cortaron las piezas.

## Índice

| Skill | Para qué |
|---|---|
| `investigar` | Investigación acotada antes de construir algo, cuando equivocarse sale caro: pregunta concreta, búsqueda en contra y documento. |
| `planificar-proyecto` | Convertir una idea contada en lenguaje corriente en un proyecto definido, preguntando y sin correr, antes de escribir código. |
| `constructor-del-manual` | Escribir el manual del proyecto y dejar el terreno preparado: reparte cada regla en el sitio que le toca y monta el ciclo de trabajo. |
| `lluvia-de-ideas` | Sesión de imaginación sobre un proyecto ya definido: propone lo que no se había pensado, con criterio y sin relleno. |
| `apuntar` | Registrar una idea o pendiente sin implementarla, con las convenciones que mantienen legible un documento de ideas a largo plazo. |
| `mirar-la-pantalla` | Ver de verdad la interfaz recién escrita: capturas de la app real en un navegador real, y abrirlas para juzgarlas. |
| `registrar-cambios` | Dejar constancia de cada cambio con su identificador, el porqué de la decisión y la validación realmente ejecutada. |
| `validar-antes-de-entregar` | Ejecutar las comprobaciones del proyecto antes de decir «terminado», y declarar qué quedó sin comprobar. |
| `recorrer-la-aplicacion` | Conducir la app web por su interfaz real, como una persona, para comprobar que un camino completo funciona. |
| `auditar-proyecto` | Recorrer el proyecto zona por zona hasta que no quede ninguna parte sin mirar nunca; organiza y lleva la cuenta, no comprueba. |
| `registrar-comprobacion-humana` | Llevar el historial de lo que una persona ha comprobado a mano, incluido lo que estaba bien y lo aparcado a propósito. |

Una línea por skill, y nada más. Para saber cuándo actúa cada una, abre su archivo.

**Para instalarla, [INSTALAR.md](INSTALAR.md)**: los dos caminos posibles —a nivel de
usuario o a nivel de proyecto, nunca los dos—, los comandos y cómo comprobar que ha
funcionado de verdad.

**El manual de uso completo está en [DOCUMENTACION.md](DOCUMENTACION.md)**: para qué sirve
cada skill, cuándo actúa, qué te da, cómo se instala y qué documentos aparecen. Documenta
el contrato, no el procedimiento interno — ese vive en cada skill y cambia.

## Reglas de la colección

**1. Universales, sin huella de origen.**
Nada del dominio, el stack ni los nombres de archivo del proyecto donde nació la práctica.
Se extrae el método y se tira el envoltorio. Una skill que nombra el documento concreto de
un proyecto es inservible en el siguiente.

**2. Independientes: ninguna referencia cruzada por nombre.**
Cada skill funciona sola el primer día, instalada suelta y sin ninguna compañera presente.
Motivo: si se llaman por su nombre entre ellas, llevarse una sola a otro proyecto —o
publicar solo tres de siete— deja instrucciones que apuntan a algo que no existe.

**Lo que prohíbe es que una skill nombre a otra.** El manual del proyecto y el ciclo de
trabajo **no son skills**: son documentos de ese proyecto, escritos después de comprobar qué
hay instalado de verdad. Ahí sí se nombran las once, y no puede quedar apuntando al vacío
porque se escribió sabiendo qué había. **El cableado vive fuera de las skills**, hecho a
medida de cada sitio — ver «Dónde se coordinan».

**3. Cooperación por descripción, no por cableado.**
Las skills se activan porque lo que describen encaja con lo que se está haciendo. Ese
mecanismo ya las coordina de hecho, sin que ninguna sepa de las demás.

**4. Acoplamiento blando permitido: capacidades, nunca nombres propios.**
Una skill puede apoyarse en algo que el proyecto *quizá* tenga, siempre en genérico y
degradando bien si no está. Por ejemplo, «usa el identificador del registro de cambios si
el proyecto lleva uno; si no, la fecha»: si hay registro, encaja; si no lo hay, la frase
sigue teniendo sentido y la skill funciona igual.

**5. Cada skill hace una cosa y declara lo que no hace.**
La sección de límites no es relleno: es lo que impide que una skill de anotar acabe
implementando, o que una de mirar capturas se venda como suite de pruebas.

**6. Coger los principios, no los rituales.**
Al traer algo de fuera —una práctica publicada, una convención de otro equipo, el resultado
de una investigación— se adopta **por qué funciona**, nunca la forma concreta en que otro lo
hace. Casi toda «buena práctica» es la respuesta de alguien a sus propias restricciones; sin
esas restricciones, trasplantarla mete fricción en vez de ventaja.

Y su corolario, que es la parte innegociable: **lo investigado informa, no manda.** Lo que se
dio por bueno sin saber, la evidencia lo puede tumbar. **Lo que se decidió queriendo, no.**
Deformar una idea propia porque alguien de fuera lo hace distinto es la forma más silenciosa
de perderla.

**7. Si una skill necesita algo del proyecto, lo declara ella misma.**
Algunas skills solo funcionan si el proyecto carga unas líneas en todas sus
conversaciones — las que dependen de reconocer un momento y no de una petición. Esas
skills llevan un archivo `INSTALACION.md` **junto al `SKILL.md`, nunca dentro de él**: el
contenido del `SKILL.md` se carga entero cada vez que la skill se usa, y unas
instrucciones de instalación ahí dentro costarían atención en el único momento en que no
sirven para nada.

Ese archivo declara cuatro cosas: **por qué hace falta**, **la línea exacta** que la skill
aporta al ciclo, **dónde va** y **qué hacer al actualizar y al desinstalar**. Y es
autosuficiente: se sigue sin conocer esta colección y sin tener ninguna otra skill
instalada.

**Lo que se instala es una línea, no un procedimiento.** Dice **cuándo** le toca a esa skill
y **la nombra**; el **cómo** vive dentro de ella y solo ahí. La línea no se basta sola a
propósito: es un puntero, y **para cumplirla hay que abrir la skill**.

**Esto es lo contrario de lo que se hizo al principio, y el cambio lo obligó una prueba.**
Durante un tiempo cada regla llevaba, además del puntero, el procedimiento corto entero,
para que siguiera funcionando sin la skill instalada. Era una decisión tomada queriendo, y
resultó equivocada: **el repuesto compite con lo que debería reemplazar, y gana el
repuesto.** Cuando llega el momento ya hay una respuesta delante, no hay motivo para buscar
más, y la skill no llega a abrirse. Medido: con las cinco reglas puestas, en la prueba real
se abrió **una de tres**. Las otras dos hicieron la versión corta y se perdió lo que solo
está en la completa.

Lo que sustituye al repuesto no es nada: es **una salvaguarda**. Si la skill no está, que se
diga y lo decida la persona, en vez de improvisar. Así una desinstalación **se nota** —con
el procedimiento copiado no se notaba nunca, porque el texto corto seguía funcionando y
nadie se enteraba de haber perdido la versión buena.

Y ahora coincide con lo de fuera de casa: la guía oficial de la herramienta separa las dos
cosas —**el manual y las reglas son para hechos que hay que saber siempre; los procedimientos
van en las skills**, que se cargan cuando toca—. Un procedimiento entero metido en una regla
está en el sitio equivocado, y esta colección lo tuvo así hasta que la prueba lo enseñó.

**Y las líneas no van sueltas: se encadenan en un solo ciclo.** No un archivo por skill, sino
un texto que dice en orden qué pasa en cada momento del trabajo y qué skill lo hace. Líneas
sueltas se leen como obligaciones independientes; encadenadas se leen como un método, y eso
cambia si se siguen o no. Ese ciclo lo deja puesto la instalación, y lo afina
`constructor-del-manual` con lo que ese proyecto tenga de verdad.

La colocación, por orden de preferencia:

- **Un archivo propio en la carpeta de reglas del proyecto**, si la herramienta tiene una
  (`.claude/rules/ciclo-de-trabajo.md`). No toca ningún archivo ajeno, y lleva una primera
  línea visible diciendo de dónde salió. **Desinstalar una skill es borrar su línea**, y si
  era la única, el archivo.
- **Un bloque delimitado por marcas** dentro del documento de instrucciones, solo si no
  existe esa carpeta. Las marcas dicen en texto llano de dónde salió el bloque y que
  puede retirarse — legibles sin conocer nada de esto.

**Y en un solo sitio.** El ciclo no se copia también al manual del proyecto: dos sitios con
el mismo ciclo acaban siendo dos ciclos distintos, y el que miente es siempre el que estás
leyendo.

**Hay tres casos, no dos.** Al decidir qué declara cada skill:

- **No necesita nada.** Las que se activan porque alguien las pide por su nombre o con una
  frase corriente. Su etiqueta ya basta; ponerles una regla no añadiría nada y gastaría
  atención a cambio de cero.
- **Necesita una regla sin límites.** Las que se disparan en un momento —al terminar algo,
  antes de entregar— y ese momento existe en cualquier proyecto.
- **Necesita una regla, y además se puede limitar a ciertos archivos.** Solo cuando el
  momento en que hace falta y el tipo de archivo **van de la mano de verdad**. Entonces
  el límite ahorra atención sin perder nada.

**Lo que hace que una regla sea inofensiva donde no aplica no es el límite por archivos:
es la redacción condicional.** «Ningún cambio *visible*…», «cuando se acabe de construir
*un camino que una persona pueda recorrer*…» — en un proyecto sin interfaz esas
condiciones no se cumplen y la regla no llega a activarse. Por eso **se configura todo en
todos los proyectos**, y no pasa nada.

El límite por archivos es **una optimización encima**, no el mecanismo. Y tiene un
peligro: hace que la regla **no se cargue** cuando se tocan otros archivos. Si aquello de
lo que avisa puede romperse desde fuera de esos archivos, el límite crea un punto ciego.

**Y en la práctica, ninguna de las skills de esta colección lo usa.** Se intentó con las
dos que parecían candidatas claras —una sobre el aspecto y otra sobre recorrer flujos— y
en las dos apareció el punto ciego: el aspecto se rompe desde el servidor y desde
imágenes generadas que no viven en un componente; un flujo se rompe desde una validación,
un permiso o una consulta. En los dos casos el ahorro era de unas líneas y la pérdida era
un fallo sin ver.

**Dónde está el balance de verdad:** no en el límite, sino en **cómo se redacta la
condición**. El límite decide si el recordatorio está presente; la condición decide si se
actúa. Una condición bien escrita —«cambio *visible para alguien*», «*un camino que una
persona pueda recorrer*»— no se dispara donde no toca, esté cargada o no.

**Ante la duda, sin límite.** El coste de unas líneas de más se paga en atención; el coste
de un punto ciego se paga en un fallo que nadie vio.

**Y en cualquier caso, redáctala en condicional** —«ningún cambio *visible*…», «cualquier
trabajo *con efecto real*…»—, para que donde no aplique simplemente no llegue a activarse
en vez de quedar como una orden imposible de cumplir.

**Nunca se sobrescribe lo que alguien haya editado a mano.** Al reinstalar se compara con
lo declarado: si coincide, se sustituye; si no, está tocado, y entonces se enseña la
diferencia y se pregunta.

**8. Autocontenidas.**
Si una skill necesita una plantilla o un archivo de apoyo, va dentro de su propia carpeta.

## Dónde se coordinan, ya que no lo hacen entre ellas

Ninguna skill nombra a otra, así que la pregunta es inevitable: si no se conocen, ¿quién
decide el orden? **El ciclo de trabajo del proyecto**, que se lee al principio de cada
conversación.

Es un solo texto que dice, en orden, qué pasa en cada momento del trabajo y **qué skill lo
hace**: antes de construir algo, se abre la de investigar; nada más cambiar algo visible, la
de mirar la pantalla; antes de reportar terminado, la de validar; al cerrar, la de
registrar. Lo deja puesto la instalación, y lo afina `constructor-del-manual` con lo que ese
proyecto tenga de verdad.

**Tres cosas lo hacen funcionar, y las tres se aprendieron fallando:**

- **Nombra las skills.** Sin el nombre no hay nada que abrir. Puede hacerlo porque no es una
  skill: es un documento de este proyecto, escrito sabiendo qué hay instalado.
- **No lleva su procedimiento, ni resumido.** Dice **cuándo**, nunca **cómo**. Un
  procedimiento delante compite con la skill que debería reemplazar, y gana él — ver la
  regla 7, donde está medido.
- **Y lleva salvaguarda.** Si una de esas skills no está, se dice y lo decide la persona, en
  vez de improvisar. Es lo que hace que una desinstalación se note.

**Esa es la capa de composición, y ya existe.** No hace falta ninguna otra pieza, y las
consecuencias de que sea así son las que sostienen media colección:

- **La coordinación vive donde se carga siempre.** El ciclo está presente en todas las
  conversaciones sin que nadie lo invoque. Cualquier otra cosa tendría que abrirse primero,
  y abrirse es precisamente lo que puede no ocurrir.
- **El orden se cambia de opinión sin tocar ninguna skill.** Está escrito en un documento
  del proyecto, no repartido entre once archivos.
- **Y cada proyecto puede tener el suyo.** El orden no viene impuesto por la colección: lo
  escribe cada sitio, con las piezas que ese sitio tenga puestas.

**Se estudió poner encima una skill que hiciera de conector, y se descartó**, por dos
motivos que no se arreglan:

1. **Tendría que nombrar a las otras diez**, que es exactamente lo que prohíbe la regla 2 —
   y por el motivo de la regla 2: llevarse una sola skill a otro proyecto dejaría referencias
   a cosas que no están.
2. **Y como es una skill, también depende de abrirse.** Añadiría un eslabón que puede fallar
   sin quitar ninguno de los que ya hay. Un intermediario frágil delante de algo que ya
   funciona no es una mejora.
