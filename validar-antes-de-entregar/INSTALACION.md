# Instalación — `validar-antes-de-entregar`

**Esta es la skill que menos funciona con solo copiarla**, y conviene entender por qué.

Su momento no es una petición: es **el instante justo antes de decir que algo está
terminado**. Nadie escribe «valida antes de entregar»; simplemente se termina un trabajo y
se reporta. Si no hay nada que obligue a parar ahí, la skill no se activa nunca y todo lo
que contiene da igual.

La línea de abajo es lo que crea esa parada.

## La línea que declara esta skill

```
- **Antes de reportar cualquier trabajo como terminado**, abre la skill
  «validar-antes-de-entregar».
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

## Si el proyecto no tiene comprobaciones definidas

Entonces esto no vale de mucho todavía, y lo honesto es decirlo al instalar: **ayuda al
proyecto a definir las suyas antes**. Está medido que las definiciones de «terminado»
creadas por quien hace el trabajo funcionan y las impuestas desde fuera no; así que unas
comprobaciones prestadas se cumplirían en el papel y se ignorarían en la práctica.

## Al actualizar o reinstalar

**Compara la línea que hay puesta con la de arriba.** Si coincide, se sustituye sin más. Si
no coincide, **está editada a mano**: no la toques, enseña la diferencia y pregunta.

Y si lo que hay puesto es una regla de las antiguas —un archivo propio con el procedimiento
entero dentro—, **eso es lo que se sustituye por la línea**. Enséñalo antes de retirarlo.

## Al desinstalar

Borra la línea que nombra a esta skill. Si era la única, borra el archivo del ciclo entero,
o el bloque entre marcas. Las comprobaciones del proyecto se quedan como estaban: son suyas,
no de la skill.
