# Instalación — `recorrer-la-aplicacion`

Esta skill funciona a medias con solo copiarla.

**Lo que ya funciona:** si alguien dice «prueba el flujo», «comprueba que se puede dar de
alta de verdad» o «las pruebas pasan pero no me fío», se activa sola.

**Lo que no:** su otro momento es **justo después de construir o cambiar un camino que una
persona puede andar, y antes de darlo por terminado**. Ese momento no lo anuncia nadie: se
termina de programar el flujo y se reporta. Sin el texto de abajo, ese paso se salta sin
dejar síntoma — las piezas pasan sus comprobaciones y nadie ha andado el camino entero ni
una vez.

## Texto a instalar

```
Si la skill «recorrer-la-aplicacion» está instalada, úsala: lleva el procedimiento completo.
Si no está, haz lo que dice el resto de esta regla, que se basta sola.

Cuando se acabe de construir o cambiar un camino que una persona pueda recorrer por la
interfaz, recórrelo entero antes de darlo por terminado: por la interfaz, sin atajos, y
hasta la confirmación final. Que las comprobaciones automáticas pasen no sustituye a esto:
verifican las piezas, no el trayecto.

Antes de la primera pulsación, comprueba contra qué entorno se está trabajando. Si dentro
hay algo que alguien echaría de menos si se estropea, avisa y que lo decida quien manda.
Para un camino destructivo —borrar, cancelar, dar de baja—, avisa siempre.

Conducir crea datos de verdad: anota lo que vayas creando y deshazlo al terminar, también
si el recorrido falla a la mitad. Borra únicamente lo que registraste; ante la duda, no
borres y dilo.

Y si hizo falta un atajo para avanzar, ese recorrido no cuenta como comprobado: dilo, con
el paso en el que hizo falta.
```

## Dónde va

**Si hay una carpeta de reglas, el archivo va ahí.** Puede ser la del proyecto
(`.claude/rules/`) o la tuya de usuario (`~/.claude/rules/`), según cómo esté instalada
la colección — en una de las dos, nunca en las dos a la vez. Crea ahí el archivo
`recorrer-la-aplicacion.md` con ese texto, precedido de esta línea:

```
> Instalado por la skill «recorrer-la-aplicacion». Si la desinstalas, borra este archivo.
```

**No la limites a ciertos archivos.** Podría parecer que solo importa al tocar la
interfaz, pero **un flujo se rompe constantemente sin tocar un solo archivo de
interfaz**: una validación que cambia en el servidor, un permiso de datos, una consulta
que devuelve otra cosa. En esos casos la pantalla está intacta y el camino no funciona —
que es justo lo que esta skill existe para cazar. Un límite por archivos dejaría esos
casos fuera.

Lo que la hace inofensiva donde no aplica no es el límite, es la redacción: «cuando se
acabe de construir o cambiar **un camino que una persona pueda recorrer**» no se activa en
un proyecto que no tiene ninguno.

**Si no hay ninguna:** pega el texto en el documento de instrucciones que se cargue en cada
conversación, delimitado así:

```
<!-- inicio: instrucciones de la skill «recorrer-la-aplicacion» — retirar si se desinstala -->
   ...el texto...
<!-- fin: instrucciones de la skill «recorrer-la-aplicacion» -->
```

## Se configura siempre, en todos los proyectos

**No hay excepciones.** Aunque el proyecto no tenga hoy nada a lo que esta regla pueda
aplicarse, se instala y se configura igual.

El motivo es que **está redactada en condicional**. Si no hay nada que encaje con esa
condición, la regla no llega a activarse: está cargada y dormida, y no cuesta más que las
pocas líneas que ocupa. No es una obligación imposible de cumplir — es una condición que
no se da.

Y tiene dos ventajas sobre configurar a medias:

- **Se quita la ambigüedad.** No hay que acordarse de qué reglas están puestas en qué
  proyecto ni comprobarlo antes de confiar en nada.
- **El día que el proyecto cambie, ya está.** Si aparece algo a lo que la regla aplica,
  empieza a actuar sola, sin que nadie tenga que volver a configurar nada.

## Al actualizar o reinstalar

Compara lo que hay puesto con el texto de arriba. Si coincide, se sustituye sin más. Si no
coincide, **está editado a mano**: no lo toques, enseña la diferencia y pregunta.

## Al desinstalar

Borra el archivo de regla, o el bloque entre marcas. Lo que el proyecto tenga montado para
abrir un navegador se queda donde está: es suyo.
