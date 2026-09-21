# Instalación — `investigar`

Esta skill **no funciona sola con solo copiarla.** Su parte más importante —decidir si algo
merece investigarse— tiene que pasar **antes de construir cualquier cosa**, y una skill solo
se carga cuando lo que se pide encaja con su descripción. Si te piden «añade un botón»,
nada la invoca y la comprobación no llega a ocurrir.

Por eso hace falta dejar una línea donde se lea **en todas las conversaciones** del
proyecto: una línea que diga cuándo le toca y que la nombre.

## La línea que declara esta skill

```
- **Antes de construir cualquier cosa**, abre la skill «investigar»: decide ella, con cinco
  comprobaciones de una línea, si el caso merece investigarse. Casi siempre dirá que no.
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

**Si no hay carpeta de reglas:** el ciclo va dentro del documento de instrucciones que use
esa herramienta —el que se carga en cada conversación—, delimitado así:

```
<!-- inicio: ciclo de trabajo de las skills portables — retirar si se desinstalan -->
   ...el ciclo...
<!-- fin: ciclo de trabajo de las skills portables -->
```

Las marcas hacen falta porque ahí se está escribiendo dentro de un archivo ajeno: sirven
para encontrar esta parte después, actualizarla sin duplicarla y retirarla sin tocar el
resto.

## Al actualizar o reinstalar

**Compara la línea que hay puesta con la de arriba.**

- **Si coincide**, se puede sustituir sin más.
- **Si no coincide, está editada a mano.** No la toques: enseña la diferencia y pregunta.
  Sobrescribir borraría el trabajo de alguien sin avisar.

Y si lo que hay puesto es una regla de las antiguas —un archivo `investigar.md` con el
procedimiento entero dentro—, **eso es lo que se sustituye por la línea**. Enséñalo antes de
retirarlo.

## Al desinstalar

Borra la línea que nombra a esta skill. Si era la única, borra el archivo del ciclo entero,
o el bloque entre marcas. Nada más: esta skill no deja rastro en ningún otro sitio.
