# Instalación — `registrar-cambios`

Esta skill tiene dos disparadores, y **solo uno funciona con copiarla**.

Cuando alguien pide «apunta este cambio» o «¿por qué está esto así?», la skill se activa
sola. Pero su regla más importante —**una tarea no está terminada hasta que su entrada está
escrita**— depende de reconocer un momento, no de una petición. Sin el texto de abajo, ese
momento pasa de largo y el registro se queda a medias sin que nadie lo note.

## Texto a instalar

```
Si la skill «registrar-cambios» está instalada, úsala: lleva el procedimiento completo. Si
no está, haz lo que dice el resto de esta regla, que se basta sola.

Antes de dar por terminado cualquier trabajo con efecto real —una funcionalidad, una
corrección, una decisión técnica o algo hecho de forma rara por un motivo que no se ve en
el código—, escribe su entrada en el registro de cambios del proyecto: qué se decidió, por
qué así, qué alternativa se descartó a cambio, y qué comprobaciones se pasaron realmente.

Una tarea no está terminada hasta que su entrada existe.

No entra lo mecánico: formateo, erratas, renombrados sin intención. Y si el proyecto no
lleva todavía un registro de cambios, dilo y propón crearlo en vez de saltarte el paso.
```

## Dónde va

**Si hay una carpeta de reglas, el archivo va ahí.** Puede ser la del proyecto
(`.claude/rules/`) o la tuya de usuario (`~/.claude/rules/`), según cómo esté instalada
la colección — en una de las dos, nunca en las dos a la vez. Crea ahí el archivo
`registrar-cambios.md` con ese texto, precedido de esta línea:

```
> Instalado por la skill «registrar-cambios». Si la desinstalas, borra este archivo.
```

**Si no hay ninguna:** pega el texto en el documento de instrucciones que se cargue en cada
conversación, delimitado así:

```
<!-- inicio: instrucciones de la skill «registrar-cambios» — retirar si se desinstala -->
   ...el texto...
<!-- fin: instrucciones de la skill «registrar-cambios» -->
```

## Al actualizar o reinstalar

Compara lo que hay puesto con el texto de arriba. Si coincide, se sustituye sin más. Si no
coincide, **está editado a mano**: no lo toques, enseña la diferencia y pregunta.

## Al desinstalar

Borra el archivo de regla, o el bloque entre marcas. El registro de cambios del proyecto se
queda donde está: es del proyecto, no de la skill.
