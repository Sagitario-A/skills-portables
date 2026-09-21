# Instalación — `recorrer-la-aplicacion`

Esta skill funciona a medias con solo copiarla.

**Lo que ya funciona:** si alguien dice «prueba el flujo», «comprueba que se puede dar de
alta de verdad» o «las pruebas pasan pero no me fío», se activa sola.

**Lo que no:** su otro momento es **justo después de construir o cambiar un camino que una
persona puede andar, y antes de darlo por terminado**. Ese momento no lo anuncia nadie: se
termina de programar el flujo y se reporta. Sin la línea de abajo, ese paso se salta sin
dejar síntoma — las piezas pasan sus comprobaciones y nadie ha andado el camino entero ni
una vez.

## La línea que declara esta skill

```
- **Nada más construir o cambiar un camino que una persona pueda recorrer** por la
  interfaz, y antes de darlo por terminado, abre la skill «recorrer-la-aplicacion».
```

## Aquí no va el procedimiento, y es a propósito

La línea dice **cuándo**, nunca **cómo**. El cómo está dentro de la skill, y ponerlo también
aquí es lo que consigue que la skill no se abra nunca: si el texto que ya está delante
resuelve el momento, no hay motivo para buscar más, y se acaba usando la versión corta
teniendo instalada la larga.

**Está comprobado, no supuesto.** Con el procedimiento copiado en la regla, en las pruebas
reales las skills de cerrar trabajo no se abrieron ni una vez: se hizo la versión corta y se
perdió lo que solo está en la completa.

Por eso la línea no se basta sola a propósito. Es un puntero, y **para cumplirla hay que
abrir la skill**.

## Qué hacer si la skill no está

Que se diga y lo decida la persona. **Nunca improvisar un sustituto ni seguir como si el
paso no existiera**: sin la skill, ese paso no se ha hecho, y decirlo es lo que hace que una
desinstalación se note en vez de perderse en silencio.

## Dónde va

**En el ciclo de trabajo del proyecto: un solo texto, que se lee al principio de cada
conversación y encadena todos los momentos como un método.** Uno, no uno por skill — cinco
avisos sueltos se leen como cinco deberes; encadenados se leen como una forma de trabajar.

**Si hay una carpeta de reglas, el ciclo es un archivo de ahí.** Puede ser la del proyecto
(`.claude/rules/`) o la tuya de usuario (`~/.claude/rules/`), según cómo esté instalada la
colección — en una de las dos, nunca en las dos a la vez.

- **Si ya existe `ciclo-de-trabajo.md`**, añade la línea en su sitio dentro del orden. No
  crees un archivo aparte: dos sitios con el mismo ciclo acaban siendo dos ciclos distintos.
- **Si no existe**, créalo con esta forma:

```
> Instalado por la colección de skills portables. Cada línea nombra la skill que la
> ejecuta; si desinstalas una, borra su línea.

En este proyecto se trabaja siguiendo este ciclo. **Cada paso lo hace la skill que lo
nombra: ábrela, que el procedimiento está dentro de ella y aquí no.**

   ...las líneas, en orden...

**Si alguna de estas skills no está instalada, dilo y que lo decida la persona.** No
improvises un sustituto ni sigas como si el paso no existiera.
```

**Si no hay carpeta de reglas:** el ciclo va dentro del documento de instrucciones que se
cargue en cada conversación, delimitado así:

```
<!-- inicio: ciclo de trabajo de las skills portables — retirar si se desinstalan -->
   ...el ciclo...
<!-- fin: ciclo de trabajo de las skills portables -->
```

## No limites el ciclo a ciertos archivos

Podría parecer que esto solo importa al tocar la interfaz, pero **un flujo se rompe
constantemente sin tocar un solo archivo de interfaz**: una validación que cambia en el
servidor, un permiso de datos, una consulta que devuelve otra cosa. En esos casos la
pantalla está intacta y el camino no funciona — que es justo lo que esta skill existe para
cazar. Un límite por archivos dejaría esos casos fuera.

Lo que la hace inofensiva donde no aplica no es el límite, es la redacción: «**un camino que
una persona pueda recorrer**» no se cumple en un proyecto que no tiene ninguno.

## Se configura siempre, en todos los proyectos

**No hay excepciones.** Aunque el proyecto no tenga hoy nada a lo que esta línea pueda
aplicarse, se instala igual.

El motivo es que **está redactada en condicional**. Si no hay nada que encaje con esa
condición, no llega a activarse: está cargada y dormida, y no cuesta más que la línea que
ocupa. No es una obligación imposible de cumplir — es una condición que no se da.

Y tiene dos ventajas sobre configurar a medias:

- **Se quita la ambigüedad.** No hay que acordarse de qué pasos están puestos en qué
  proyecto ni comprobarlo antes de confiar en nada.
- **El día que el proyecto cambie, ya está.** Si aparece algo a lo que el paso aplica,
  empieza a actuar solo, sin que nadie tenga que volver a configurar nada.

## Al actualizar o reinstalar

**Compara la línea que hay puesta con la de arriba.** Si coincide, se sustituye sin más. Si
no coincide, **está editada a mano**: no la toques, enseña la diferencia y pregunta.

Y si lo que hay puesto es una regla de las antiguas —un archivo propio con el procedimiento
entero dentro—, **eso es lo que se sustituye por la línea**. Enséñalo antes de retirarlo.

## Al desinstalar

Borra la línea que nombra a esta skill. Si era la única, borra el archivo del ciclo entero,
o el bloque entre marcas. Lo que el proyecto tenga montado para abrir un navegador se queda
donde está: es suyo.
