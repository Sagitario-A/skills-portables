# Instalación — `mirar-la-pantalla`

Esta skill funciona a medias con solo copiarla, y conviene saber qué mitad falta.

**Lo que ya funciona:** si alguien dice «mira cómo ha quedado», «esto se ve raro» o «se
sale», la skill se activa sola, porque esas frases se parecen a lo que declara.

**Lo que no:** su otro momento es **después de cualquier cambio visual, antes de darlo por
terminado** — y ese momento no lo anuncia nadie. Se termina de escribir la interfaz y se
reporta. Sin el texto de abajo, ese paso se salta sin dejar síntoma: las pruebas pasan, todo
parece correcto, y nadie ha visto la pantalla.

## Texto a instalar

```
Si la skill «mirar-la-pantalla» está instalada, úsala: lleva el procedimiento completo. Si
no está, haz lo que dice el resto de esta regla, que se basta sola.

Ningún cambio visible para alguien se da por terminado sin haberlo visto: se hace una
captura de la app real, se abre, y se mira. No basta con que las comprobaciones pasen —
una pantalla puede pasarlas todas y ser ilegible, salirse o quedarse en blanco.

Y no se mira de una sola pasada general. Al menos: si se lee, si cabe, cómo queda vacío y
cómo queda con demasiados datos, y cómo queda en el otro tema si la app respeta el del
sistema.

Al terminar, se dice qué se ha mirado y **se pide confirmación de que es lo que se quería**,
en concreto y no en general: mirar una pantalla no dice nada sobre si resuelve lo que se
pidió.
```

## Dónde va

**Si hay una carpeta de reglas, el archivo va ahí.** Puede ser la del proyecto
(`.claude/rules/`) o la tuya de usuario (`~/.claude/rules/`), según cómo esté instalada
la colección — en una de las dos, nunca en las dos a la vez. Crea ahí el archivo
`mirar-la-pantalla.md` con ese texto, precedido de esta línea:

```
> Instalado por la skill «mirar-la-pantalla». Si la desinstalas, borra este archivo.
```

**No la limites a ciertos archivos.** Parece razonable —solo importa al tocar algo que se
ve— pero deja fuera dos casos reales:

- **Lo que se rompe desde fuera.** Si el servidor empieza a devolver textos más largos, la
  tarjeta se rompe sin que se haya tocado ningún archivo de los que pintan.
- **Lo que se ve y no vive en un componente.** Una imagen generada, un gráfico dibujado
  por código, un documento que se produce para descargar.

Lo que hace que esta regla no estorbe donde no aplica **no es el límite, es cómo está
redactada**: «ningún cambio **visible para alguien**…». En un proyecto sin nada visible
esa condición no se cumple nunca, y la regla no llega a activarse aunque esté cargada.

El límite decidiría si el recordatorio está presente; la condición decide si se actúa. Y
un recordatorio de más cuesta unas líneas, mientras que un recordatorio ausente cuesta un
fallo que nadie ve.

**Si no hay ninguna:** pega el texto en el documento de instrucciones que se cargue en cada
conversación, delimitado así:

```
<!-- inicio: instrucciones de la skill «mirar-la-pantalla» — retirar si se desinstala -->
   ...el texto...
<!-- fin: instrucciones de la skill «mirar-la-pantalla» -->
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

Borra el archivo de regla, o el bloque entre marcas. Las capturas y la configuración del
navegador se quedan donde estén: son del proyecto.
