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

Ese archivo declara cuatro cosas: **por qué hace falta**, **el texto exacto**, **dónde
va** y **qué hacer al actualizar y al desinstalar**. Y es autosuficiente: se sigue sin
conocer esta colección y sin tener ninguna otra skill instalada.

**El texto empieza apuntando a su propia skill, en condicional.** Primero una línea que
dice que si la skill está instalada se use ella, porque lleva el procedimiento completo; y
después el texto corto, que es lo que se hace cuando no está. Cubre los dos casos con una
sola redacción.

Esto no es adorno. **Un texto que se basta solo hace que la skill no llegue a abrirse
nunca**: si la regla ya dice qué hacer, no hay motivo para buscar más, y se acaba usando la
versión corta teniendo la larga instalada. Pasó en la primera prueba con todo puesto, y se
notó en lo que se perdió por el camino.

Y tiene respaldo fuera de casa: la guía oficial de la herramienta separa las dos cosas —**el
manual y las reglas son para hechos que hay que saber siempre; los procedimientos van en las
skills**, que se cargan cuando toca—. Un procedimiento entero metido en una regla está en el
sitio equivocado. Lo que aquí se hace es dejar en la regla el hecho y el puntero, y **quedarse
además con el procedimiento corto** para que siga funcionando sin la skill: eso último es
decisión propia, y va más allá de lo que recomienda la guía a propósito.

La colocación, por orden de preferencia:

- **Un archivo propio en la carpeta de reglas del proyecto**, si la herramienta tiene una
  (`.claude/rules/<nombre-de-la-skill>.md`). No toca ningún archivo ajeno, la atribución
  es el nombre del archivo, y desinstalar es borrarlo. Lleva una primera línea visible
  diciendo qué skill lo puso.
- **Un bloque delimitado por marcas** dentro del documento de instrucciones, solo si no
  existe esa carpeta. Las marcas dicen en texto llano de dónde salió el bloque y que
  puede retirarse — legibles sin conocer nada de esto.

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

## Decisiones tomadas que condicionan al cerebro

Está previsto escribir más adelante una **skill «cerebro»**: una capa de composición que
coordine a las demás. No existe todavía, y estas decisiones se tomaron pensando en ella:

- **La orquestación vive en el cerebro, no en las hojas.** Si las skills vinieran ya
  acopladas entre sí, el cerebro heredaría un cableado que no diseñó y que no podría
  rehacer sin editarlas todas. Manteniéndolas limpias, decide el orden él, y ese orden se
  puede cambiar de opinión sin tocar ni una skill.
- **El cerebro debe poder faltar.** Instalar la colección sin él tiene que seguir
  funcionando. No es un requisito de arranque, es una mejora encima.
- **El cerebro no debe reexplicar lo que hace cada skill**, por lo mismo que no lo hace
  este documento: duplicar descripciones crea una segunda verdad que envejece. Que lea las
  cabeceras.
- **Al añadir una skill nueva a la colección**, lo único que hay que actualizar aquí es
  una línea del índice. Si hiciera falta actualizar más, este documento estaría mal
  planteado.
