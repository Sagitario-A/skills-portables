# Instalación — `investigar`

Esta skill **no funciona sola con solo copiarla.** Su parte más importante —decidir si algo
merece investigarse— tiene que pasar **antes de construir cualquier cosa**, y una skill solo
se carga cuando lo que se pide encaja con su descripción. Si te piden «añade un botón»,
nada la invoca y la comprobación no llega a ocurrir.

Por eso el texto de abajo tiene que quedar donde se lea **en todas las conversaciones** del
proyecto.

## Texto a instalar

```
Si la skill «investigar» está instalada, úsala: lleva el procedimiento completo. Si no está,
haz lo que dice el resto de esta regla, que se basta sola.

Antes de construir cualquier cosa, pasa estas cinco comprobaciones. Son de una línea y la
primera corta casi siempre; si ninguna salta, sigue sin más.

1. ¿Cambiaría lo que voy a hacer el resultado de investigarlo? Si no, no investigues.
2. ¿Cuánto cuesta equivocarse? Difícil de deshacer, se va a construir encima, toca datos
   reales o afecta a otras personas.
3. ¿Hay práctica establecida sobre esto, o es cuestión de gusto?
4. ¿Es más barato probarlo que investigarlo?
5. ¿Esto lo sé, o lo estoy deduciendo mientras lo escribo?

Si alguna salta, dilo y propón investigar antes de seguir.
```

## Dónde va

**Si hay una carpeta de reglas, el archivo va ahí.** Puede ser la del proyecto
(`.claude/rules/`) o la tuya de usuario (`~/.claude/rules/`), según cómo esté instalada
la colección — en una de las dos, nunca en las dos a la vez. Crea ahí el archivo
`investigar.md` con ese texto, precedido de esta línea:

```
> Instalado por la skill «investigar». Si la desinstalas, borra este archivo.
```

Es la opción preferente: no toca ningún archivo de nadie, y desinstalar es borrar el
archivo.

**Si no hay ninguna:** pega el texto en el documento de instrucciones que use esa herramienta
—el que se carga en cada conversación—, delimitado así:

```
<!-- inicio: instrucciones de la skill «investigar» — retirar si se desinstala -->
   ...el texto...
<!-- fin: instrucciones de la skill «investigar» -->
```

Las marcas hacen falta porque ahí se está escribiendo dentro de un archivo ajeno: sirven
para encontrar esta parte después, actualizarla sin duplicarla y retirarla sin tocar el
resto.

## Al actualizar o reinstalar

**Compara lo que hay puesto con el texto de arriba.**

- **Si coincide**, se puede sustituir sin más.
- **Si no coincide, está editado a mano.** No lo toques: enseña la diferencia y pregunta.
  Sobrescribir borraría el trabajo de alguien sin avisar.

## Al desinstalar

Borra el archivo de regla, o el bloque entre marcas. Nada más: esta skill no deja rastro en
ningún otro sitio.
