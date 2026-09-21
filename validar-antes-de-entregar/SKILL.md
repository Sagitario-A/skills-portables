---
name: validar-antes-de-entregar
description: Ejecutar las comprobaciones que el proyecto tenga definidas y declarar sin adornos qué ha quedado sin comprobar, justo antes de reportar un trabajo como terminado. Úsala siempre antes de decir "ya está", "está listo" o "terminado", y cuando pidan pasar las comprobaciones del proyecto para ver si un cambio ha roto algo.
---

# Validar antes de entregar

«Está terminado» es una afirmación, y las afirmaciones se sostienen o no se hacen. Esta
skill convierte esa frase en algo verificado, o en su defecto en una frase honesta sobre
lo que no se ha podido verificar.

Elimina dos expresiones del vocabulario: **«creo que funciona»** y **«debería estar
bien»**. O se ejecutó y se sabe el resultado, o no se ejecutó y se dice cuál se quedó sin
ejecutar.

## Dos partes, y funcionan distinto

Conviene saberlo porque se leen de forma diferente:

- **Ejecutar las comprobaciones del proyecto** es una receta: se van haciendo mientras se
  leen, una tras otra.
- **Repasar lo que se ha tocado** es una parada: el trabajo ya está hecho de memoria y con
  oficio, y aquí uno **se detiene a confirmar** que no se ha llevado nada por delante.

La segunda es la que más se salta, porque no hay ningún comando que la obligue.

## Cuándo se ejecuta

**Una sola vez, en el momento de reportar el trabajo como terminado.** Ese momento existe
en cualquier proyecto y no depende de que haya ningún documento ni proceso montado.

- **Nunca en pasos intermedios.** A mitad de un trabajo el código está roto a propósito;
  comprobar ahí no informa de nada y hace insoportable trabajar.
- **«Terminado» significa que no queda nada de lo que se pidió sin hacer.** Si algo se
  quedó fuera, no se reporta como terminado: se reporta como parcial, diciendo qué falta.
  Presentar trabajo a medias como completo es el fallo que esta skill existe para impedir,
  y ninguna comprobación en verde lo disculpa.
- **Se puede renunciar a ella, pero solo desde fuera.** Si quien encarga el trabajo dice
  que no hace falta comprobar algo, se respeta sin discutir — y se deja dicho en la
  entrega que se hizo sin comprobar. La excepción la pide una persona; no se concede sola.

## 1. Averigua qué comprobaciones tiene el proyecto

**No traigas una lista de comandos preconcebida**: eso ataría la skill a un stack. Descubre
lo que este proyecto usa, mirando en este orden:

1. **Su configuración de integración continua**, si la hay. Es la fuente más fiable, porque
   es lo que el proyecto exige de verdad antes de aceptar un cambio. **Lo que ahí se
   ejecuta, se ejecuta aquí.**
2. **Los guiones o tareas que el proyecto declara** para ejecutar comprobaciones.
3. **Sus documentos de instrucciones o de contribución**, que a veces exigen pasos que no
   están automatizados.

Si no encuentras nada, **dilo en vez de improvisar**: «este proyecto no declara ninguna
comprobación». Puedes proponer el mínimo razonable para su tecnología, pero como propuesta,
no ejecutando comandos a ciegas que igual ni existen.

### Si el proyecto no tiene comprobaciones definidas

Es el caso más frecuente en proyectos nuevos, y también cuando quien encarga el trabajo no
es técnico y no tiene forma de saber qué debería comprobarse. **Imponer una lista traída de
fuera no sirve**: está medido que las definiciones de «terminado» que funcionan son las que
hace suyas quien trabaja, y las prestadas se cumplen en el papel y se ignoran en la
práctica.

Así que se construyen entre los dos, una sola vez:

1. **Mira qué hay construido** y deduce qué comprobaciones le corresponden a un proyecto
   así.
2. **Propónlas explicando en lenguaje llano qué caza cada una**, no por su nombre técnico.
   Quien decide tiene que entender qué se pierde si esa comprobación no está.
3. **Con su visto bueno, quedan escritas como reglas del proyecto.** A partir de ahí ya no
   se decide nada: se leen de ahí, y son suyas.

**Y luego no se revisa en cada trabajo.** La lista es estable: añadir funcionalidades no
cambia qué se comprueba, cambia qué cubren las pruebas. Solo se vuelve a tocar cuando el
proyecto gana algo estructuralmente nuevo —una base de datos, un despliegue, una interfaz
donde antes no había—, y entonces se propone añadir la comprobación que falta.


Ejecútalas de lo más barato a lo más caro —lo que falla en segundos antes que lo que tarda
minutos—, para que el ciclo de arreglo sea corto.

## 2. Ejecútalas de verdad

- **Todas las que apliquen a lo que se tocó.** Si solo se ha tocado documentación, no hay
  nada que ejecutar y se dice en una línea; si se ha tocado código, van enteras.
- **Proporcional no es «me lo salto porque el cambio es pequeño».** Los cambios pequeños
  son justamente los que rompen cosas lejanas sin que nadie sospeche: para eso existe la
  suite completa.
- **Los resultados se copian, no se recuerdan.** Si algo falla, el fallo real; si algo
  cuenta casos, la cifra real.

## 3. Lo que se ve, hay que verlo

Si el cambio es visible para alguien, **compruébalo viéndolo de verdad**, no solo con
comprobaciones en verde. Una interfaz puede pasar todas las pruebas y ser ilegible,
salirse de la pantalla o quedar en blanco.

Si en ese entorno no hay forma de verlo, no lo des por bueno: pasa al bloque de «no
comprobado» y dilo con esas palabras.

## 4. Repasa lo que has tocado

Las comprobaciones detectan lo que **se rompe**. No detectan lo que **se pierde**: aquello
que nadie prueba se puede borrar entero sin que nada se ponga rojo.

Así que antes de entregar, mira tus cambios **completos** —el conjunto real, no lo que
recuerdas haber hecho; si hay control de versiones, léete el diff entero— y busca lo que
nadie pidió:

- **Comportamiento alterado de refilón**: un valor por defecto distinto, un orden que
  cambia, un mensaje reescrito, un caso que antes se contemplaba y ahora no.
- **Cosas eliminadas de paso**: una opción, una validación, un comentario que explicaba un
  porqué. Los comentarios que justifican una rareza son justo los que más se borran y más
  falta hacen.
- **Archivos tocados fuera del encargo.**
- **Mejoras espontáneas**: reorganizar, renombrar, «de paso lo he limpiado». Aunque sean
  mejores, no se pidieron, y entierran el cambio de verdad dentro del ruido — quien lo
  revise ya no distingue lo importante.

Ante cada hallazgo hay dos salidas y solo dos: **deshacerlo**, o **declararlo en la
entrega** explicando por qué era inevitable. Jamás dejarlo pasar en silencio confiando en
que se note.

**La regla de fondo: lo que funcionaba y nadie pidió cambiar, no se cambia.** Y la duda se
resuelve preguntando, no decidiendo por cuenta propia.

## La prohibición que sostiene todo lo demás

Cuando algo falla, **se arregla la causa**. Está prohibido:

- Relajar la comprobación para que pase: aflojar una regla, marcar una prueba como omitida,
  silenciar un aviso, rebajar la exigencia de la configuración.
- Reescribir una prueba para que acepte el resultado nuevo, **salvo** que el comportamiento
  esperado haya cambiado a propósito — y entonces se dice expresamente que la prueba se
  cambió y por qué.
- Callar un fallo alegando que «ya venía de antes». Compruébalo, y si es cierto, **dilo**:
  que estuviera roto antes no lo convierte en no-roto, solo en no-culpa-tuya.

**Por qué pasa esto:** en cuanto pasar las comprobaciones se convierte en el objetivo, deja
de medir lo que medía. La tentación ya no es que el trabajo esté bien, sino que el
indicador se ponga verde — y hay mil formas de conseguir lo segundo sin lo primero.

**Y por eso hacen falta dos señales que no se puedan falsear a la vez.** Las comprobaciones
miden lo que se rompe; el repaso del paso 4 mide lo que se pierde. Amañar una es
fácil; amañar las dos, no.

Es la trampa más fácil de todas y la que vacía de sentido el sistema entero: una suite que
pasa porque se la ha convencido no informa de nada, y encima da confianza.

## Qué reportar: tres bloques separados

Siempre los tres, aunque alguno quede corto:

**1. Ejecutado.** Qué se pasó y con qué resultado real.

**2. Sin comprobar.** Qué no se ha podido verificar y por qué —entorno sin dependencias,
sin credenciales, sin forma de ver la interfaz, comprobación inexistente en el proyecto—.
Nunca se omite este bloque por estar vacío de excusas: si hay hueco, se enseña.

**3. Lo que le toca a quien encarga.** Lista concreta de qué probar, no un «échale un
ojo». Cada punto, algo que se pueda hacer y responder con sí o no.

**Entre cinco y nueve puntos**, no porque el número sea sagrado, sino porque una lista más
larga de lo que cabe en la cabeza **no se salta por partes: se salta entera**, y entonces se
pierden también los puntos que importaban.

**Si salen más, no se recortan en silencio.** Se entregan los más importantes —**lo más
peligroso de saltarse y lo que más se olvida**— y se dice claramente que quedan otros
tantos, ofreciendo enseñarlos. Quitar información sin avisar es peor que dar una lista
larga.

## Lo que esta validación NO dice

Que todo esté en verde significa **«no está roto de las formas que este proyecto sabe
detectar»**. No significa:

- Que sea lo que se pidió. La intención de quien encarga no está escrita en ninguna
  comprobación: un trabajo puede estar impecable y resolver otra cosa.
- Que esté bien pensado, ni que envejezca bien.
- Que la parte no cubierta por comprobaciones funcione.

**Y di con qué sentido estás usando la palabra «terminado».** No significa lo mismo para
todo el mundo: quien programa suele entender «escrito», quien prueba entiende «verificado»
y quien encarga entiende «utilizable». Una frase basta: «terminado en el sentido de que
hace lo que se pidió y las comprobaciones pasan; sin probar en uso real».

Decirlo forma parte de la entrega. Prometer más de lo que se ha verificado es exactamente
el problema que esta skill viene a corregir, solo que con más pasos.

## Lo que esta skill no hace

- **No arregla de paso** la calidad general del proyecto ni fallos ajenos al trabajo hecho:
  los señala.
- **No añade comprobaciones nuevas** por su cuenta. Puede proponerlas.
- **No decide entregar.** Prepara una entrega honesta; entregar lo decide quien manda.
