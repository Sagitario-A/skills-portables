# Instalación — `mirar-la-pantalla`

Esta skill funciona a medias con solo copiarla, y conviene saber qué mitad falta.

**Lo que ya funciona:** si alguien dice «mira cómo ha quedado», «esto se ve raro» o «se
sale», la skill se activa sola, porque esas frases se parecen a lo que declara.

**Lo que no:** su otro momento es **después de cualquier cambio visual, antes de darlo por
terminado** — y ese momento no lo anuncia nadie. Se termina de escribir la interfaz y se
reporta. Sin la línea de abajo, ese paso se salta sin dejar síntoma: las pruebas pasan, todo
parece correcto, y nadie ha visto la pantalla.

## La línea que declara esta skill

```
- **Nada más cambiar algo visible para alguien**, y antes de darlo por terminado, abre la
  skill «mirar-la-pantalla».
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

Parece razonable —esto solo importa al tocar algo que se ve— pero deja fuera dos casos
reales:

- **Lo que se rompe desde fuera.** Si el servidor empieza a devolver textos más largos, la
  tarjeta se rompe sin que se haya tocado ningún archivo de los que pintan.
- **Lo que se ve y no vive en un componente.** Una imagen generada, un gráfico dibujado
  por código, un documento que se produce para descargar.

Lo que hace que esta línea no estorbe donde no aplica **no es el límite, es cómo está
redactada**: «algo **visible para alguien**». En un proyecto sin nada visible esa condición
no se cumple nunca, y el paso no llega a activarse aunque esté cargado.

El límite decidiría si el recordatorio está presente; la condición decide si se actúa. Y
un recordatorio de más cuesta una línea, mientras que un recordatorio ausente cuesta un
fallo que nadie ve.

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
o el bloque entre marcas. Las capturas y la configuración del navegador se quedan donde
estén: son del proyecto.
