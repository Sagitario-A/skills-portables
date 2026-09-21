# Instalación — `validar-antes-de-entregar`

**Esta es la skill que menos funciona con solo copiarla**, y conviene entender por qué.

Su momento no es una petición: es **el instante justo antes de decir que algo está
terminado**. Nadie escribe «valida antes de entregar»; simplemente se termina un trabajo y
se reporta. Si no hay nada que obligue a parar ahí, la skill no se activa nunca y todo lo
que contiene da igual.

El texto de abajo es lo que crea esa parada.

## Texto a instalar

```
Si la skill «validar-antes-de-entregar» está instalada, úsala: lleva el procedimiento
completo. Si no está, haz lo que dice el resto de esta regla, que se basta sola.

Antes de reportar cualquier trabajo como terminado:

1. Ejecuta las comprobaciones que este proyecto tenga definidas —las que exija su
   integración continua, sus guiones declarados o sus documentos de contribución—, y copia
   los resultados reales, no los recordados.
2. Repasa tus cambios completos y comprueba que no has tocado nada que nadie pidiera:
   comportamiento alterado de refilón, cosas borradas de paso, archivos fuera del encargo,
   mejoras espontáneas.
3. Si el cambio se ve, míralo de verdad; no basta con que las comprobaciones estén en
   verde.

Y al entregar, di siempre tres cosas: qué se ejecutó y con qué resultado, **qué ha quedado
sin comprobar y por qué**, y qué le toca comprobar a la otra persona (entre cinco y nueve
puntos concretos, los más peligrosos de saltarse).

Nunca relajes una comprobación para que pase. Si algo falla, se arregla la causa o se dice.

Si algo de lo pedido se quedó fuera, no es «terminado»: es parcial, y se reporta diciendo
qué falta.
```

## Dónde va

**Si hay una carpeta de reglas, el archivo va ahí.** Puede ser la del proyecto
(`.claude/rules/`) o la tuya de usuario (`~/.claude/rules/`), según cómo esté instalada
la colección — en una de las dos, nunca en las dos a la vez. Crea ahí el archivo
`validar-antes-de-entregar.md` con ese texto, precedido de esta línea:

```
> Instalado por la skill «validar-antes-de-entregar». Si la desinstalas, borra este archivo.
```

**Si no hay ninguna:** pega el texto en el documento de instrucciones que se cargue en cada
conversación, delimitado así:

```
<!-- inicio: instrucciones de la skill «validar-antes-de-entregar» — retirar si se desinstala -->
   ...el texto...
<!-- fin: instrucciones de la skill «validar-antes-de-entregar» -->
```

## Si el proyecto no tiene comprobaciones definidas

Entonces esto no vale de mucho todavía, y lo honesto es decirlo al instalar: **ayuda al
proyecto a definir las suyas antes**. Está medido que las definiciones de «terminado»
creadas por quien hace el trabajo funcionan y las impuestas desde fuera no; así que unas
comprobaciones prestadas se cumplirían en el papel y se ignorarían en la práctica.

## Al actualizar o reinstalar

Compara lo que hay puesto con el texto de arriba. Si coincide, se sustituye sin más. Si no
coincide, **está editado a mano**: no lo toques, enseña la diferencia y pregunta.

## Al desinstalar

Borra el archivo de regla, o el bloque entre marcas. Las comprobaciones del proyecto se
quedan como estaban: son suyas, no de la skill.
