# Instalar la colección

Esta colección son once **skills**: instrucciones que se le dan a Claude Code una vez y se
quedan puestas, para que el trabajo siga unos hábitos sin que nadie tenga que acordarse de
pedirlo. Investigar antes de construir algo delicado, mirar la pantalla de verdad en vez de
suponer, comprobar antes de decir «terminado», dejar escrito por qué se decidió cada cosa.

**No hace falta saber programar para instalarla.** Son carpetas que se copian y archivos de
texto que se crean. Nada se compila y nada se ejecuta.

---

## Son dos piezas, y con una sola no basta

Esto es lo que más se falla al instalar, así que va primero.

**Pieza 1 — las once skills.** Once carpetas que se copian a su sitio. Con esto ya funcionan
**seis** de las once: las que se despiertan porque tú dices algo («apunta esto», «dame
ideas», «vamos a revisar el proyecto»).

**Pieza 2 — el ciclo de trabajo.** Las otras cinco skills no esperan a que las llames:
actúan solas en un momento que nadie anuncia —justo antes de decirte que algo está
terminado, por ejemplo—. No hay ninguna frase que las despierte, así que hace falta un texto
puesto donde se lea al principio de cada conversación.

Ese texto es **un solo archivo con una línea por skill**, que dice en orden qué pasa en cada
momento del trabajo y **cuál de ellas lo hace**. Un flujo, no cinco avisos sueltos.

> **Si te saltas la pieza 2, esas cinco están instaladas y no hacen nada.** Sin aviso y sin
> síntoma: nada falla, simplemente no ocurre. Por eso la instalación tiene dos pasos y no
> uno.

**Y ese texto no lleva el procedimiento de las skills, a propósito.** Dice cuándo, nunca
cómo. Si llevara delante una versión corta de cada paso, las skills no llegarían a abrirse:
ya habría una respuesta delante y no habría motivo para buscar más. Está medido — se probó
al revés y se abrió una de tres. En su lugar lleva una salvaguarda: si una de esas skills no
está, se dice en vez de improvisar, y así una desinstalación se nota.

**Por qué no se puede automatizar:** ningún paquete puede escribir en el archivo de
instrucciones de tu proyecto. No es un descuido nuestro, es que el mecanismo no existe —
está comprobado contra la documentación oficial. Así que el segundo paso lo haces tú, o se
lo pides a Claude enseñándole este documento.

---

## Qué necesita cada skill del entorno

Casi ninguna necesita nada: escriben y leen archivos de texto, y con copiarlas ya trabajan.
Tres son la excepción, y conviene saberlo antes de instalar para no descubrirlo el día que
una se queda parada:

| Skill | Qué necesita | Si no está |
|---|---|---|
| `mirar-la-pantalla` | Un navegador automatizado montado en el proyecto — [el paso extra](#el-paso-extra--montar-el-navegador) | No puede capturar. Lo dice y se para |
| `recorrer-la-aplicacion` | Lo mismo, más un entorno y unas credenciales con las que entrar | No puede recorrer. Lo dice y se para |
| `investigar` | Poder consultar fuentes fuera del proyecto | Lo dice antes de empezar, y no disfraza de investigación lo que es criterio propio |
| `validar-antes-de-entregar` | Que el proyecto tenga comprobaciones definidas | Te propone unas y **se quedan como tuyas** |

Las otras siete —`apuntar`, `auditar-proyecto`, `constructor-del-manual`,
`lluvia-de-ideas`, `planificar-proyecto`, `registrar-cambios`,
`registrar-comprobacion-humana`— **no necesitan nada**.

---

## Elige camino

**Si trabajas por tu cuenta, en tus propios proyectos → [camino A](#camino-a--a-nivel-de-usuario).**
Se instala una vez y vale para todo lo que hagas.

**Si el repositorio es de un equipo, o quieres que se instale con él → [camino B](#camino-b--a-nivel-de-proyecto).**
Se instala dentro del proyecto y viaja con él.

Los dos hacen lo mismo. Cambia dónde vive.

### Se elige uno, nunca los dos

**No instales la colección en los dos sitios.** Ni «por si acaso», ni «total, no molesta».

Si está en los dos sitios quedan **copias duplicadas**, y lo que pasa entonces no es que
falle: es peor, porque funciona a medias y de forma distinta para cada pieza.

- **Las skills no se suman: gana una.** La copia de usuario tiene preferencia sobre la del
  proyecto. Si editas la del proyecto pensando que es la que se usa, no se usa.
- **Las reglas sí se suman: se cargan las dos.** Acabas con el mismo texto dos veces en cada
  conversación, gastando atención por duplicado.

Resultado: cambias algo, no se nota, y no hay forma de saber por qué sin ir a mirar los dos
sitios. **Uno, y solo uno.**

### Comprueba antes si ya hay algo puesto en el otro sitio

Hazlo **antes** de copiar nada. Es un comando y tarda un segundo.

**En Windows** (PowerShell), desde la carpeta de tu proyecto:

```powershell
Get-ChildItem "$HOME\.claude\skills", "$HOME\.claude\rules", ".claude\skills", ".claude\rules" -ErrorAction SilentlyContinue | Select-Object FullName
```

**En macOS o Linux**, desde la carpeta de tu proyecto:

```bash
ls -d ~/.claude/skills/* ~/.claude/rules/* .claude/skills/* .claude/rules/* 2>/dev/null
```

**Cómo se lee el resultado:**

- **No sale nada, o nada con nuestros nombres** → está limpio, sigue con el camino que
  hayas elegido.
- **Salen nuestros nombres en un solo sitio** → ya está instalada por ahí. Si te vale, no
  hagas nada más. Si quieres cambiarla de sitio, ve a [cambiar de camino](#cambiar-de-camino).
- **Salen nuestros nombres en los dos sitios** → está duplicada, que es el caso que hay que
  deshacer. Decide con cuál te quedas y **borra el otro por completo** siguiendo
  [cambiar de camino](#cambiar-de-camino), antes de seguir.

Los nombres a buscar son estos once: `apuntar`, `auditar-proyecto`, `constructor-del-manual`,
`investigar`, `lluvia-de-ideas`, `mirar-la-pantalla`, `planificar-proyecto`,
`recorrer-la-aplicacion`, `registrar-cambios`, `registrar-comprobacion-humana`,
`validar-antes-de-entregar`.

---

## Camino A — a nivel de usuario

Vive en tu carpeta personal y **se aplica a todos tus proyectos**, los de ahora y los que
hagas dentro de dos años.

Esa carpeta personal es `~/.claude/`. En Windows eso es `C:\Users\TU-USUARIO\.claude\`.

### La forma fácil — pegarle esto a Claude

Abre una conversación en cualquier carpeta y pégale este encargo. No hace falta tener nada
descargado: lo hace todo, desde traerse la colección hasta dejar puestas las once
skills y el ciclo de trabajo.

```prompt-usuario
Instala en mi carpeta personal la colección de skills portables, para que valga
en todos mis proyectos.

1. Tráetela. Clona https://github.com/Sagitario-A/skills-portables en una
   carpeta temporal, con el historial completo —un clonado superficial deja
   fuera las etiquetas—, y sitúate en la última versión publicada creando una
   rama local a partir de su etiqueta de versión más alta.

2. Abre el INSTALAR.md que viene dentro y haz el camino de usuario entero. Son
   dos piezas y hacen falta las dos:
   - copia las once carpetas de skills a ~/.claude/skills/;
   - crea UN archivo, ~/.claude/rules/ciclo-de-trabajo.md, con el ciclo
     completo: la cabecera, las cinco líneas que declaran sus INSTALACION.md
     en el orden que indica INSTALAR.md, y la salvaguarda del final.

   Ese texto va literal: no lo resumas, no lo reescribas y no lo mejores. Y no
   le añadas el procedimiento de ninguna skill, ni resumido: el ciclo dice
   cuándo, y el cómo vive dentro de cada skill. Si se lo añades, dejan de
   abrirse.

   Si ya tengo ahí los cinco archivos de reglas de una versión anterior
   —investigar.md, mirar-la-pantalla.md, recorrer-la-aplicacion.md,
   registrar-cambios.md, validar-antes-de-entregar.md—, enséñamelos y dime que
   los sustituye este ciclo. No los borres sin que yo lo diga.

3. Hazlo copiando, no con «npx skills»: esa herramienta reparte la colección
   por medio centenar de carpetas de otros programas que no uso.

NO TE SALGAS DE AHÍ. Lo único que puedes escribir está dentro de ~/.claude/, y
la carpeta temporal del punto 1. Si algo te lleva a escribir en cualquier otro
sitio, párate y dímelo en vez de hacerlo.

Al terminar, en este orden:
- si estás dentro de la carpeta de un proyecto, comprueba que ese proyecto no
  tiene además la colección en su .claude/: tenerla en los dos sitios a la vez
  la rompe, y si la encuentras dímelo en vez de borrar nada;
- borra la carpeta temporal;
- pasa las comprobaciones que indique el INSTALAR.md para este camino;
- y dime qué versión has instalado, qué encontraste y qué ha quedado sin hacer.
```

Nada de ese texto es adorno, y conviene saber por qué está cada parte:

- **«las dos piezas»** impide que se salte la segunda, que es la que la gente se deja;
- **«va literal»** evita que el ciclo se parafrasee o se le añada procedimiento, que es lo
  único que sale mal al hacerlo así — y añadirle procedimiento es justo lo que hace que las
  skills dejen de abrirse;
- **la barra de seguridad** acota por escrito dónde se puede escribir, de modo que un
  descuido se convierte en una pregunta en vez de en archivos sueltos por tu ordenador;
- **la comprobación del otro sitio** caza la instalación duplicada antes de que ocurra;
- y **pedir las comprobaciones** hace que la instalación se verifique sola.

Como escribe fuera del proyecto, **pedirá permiso un par de veces y hay que aceptar**. A
cambio te enseña cada texto antes de escribirlo, así que ves lo que entra.

### Paso 1 — traer las once skills

*A partir de aquí, la forma manual, para quien la prefiera.*

Van a `~/.claude/skills/`, cada una en su propia carpeta y con su `SKILL.md` dentro.

Desde la carpeta donde has descargado la colección:

**Windows** (PowerShell):

```powershell
New-Item -ItemType Directory -Force "$HOME\.claude\skills" | Out-Null
Get-ChildItem -Directory | Where-Object { Test-Path "$($_.FullName)\SKILL.md" } | ForEach-Object {
  Copy-Item $_.FullName "$HOME\.claude\skills\" -Recurse -Force
}
```

**macOS o Linux**:

```bash
mkdir -p ~/.claude/skills
for d in */; do [ -f "$d/SKILL.md" ] && cp -r "$d" ~/.claude/skills/; done
```

Debe quedarte así:

```
~/.claude/skills/
├── apuntar/SKILL.md
├── auditar-proyecto/SKILL.md
├── constructor-del-manual/SKILL.md
└── ... hasta once
```

### Paso 2 — poner el ciclo de trabajo

**Es un solo archivo:** `~/.claude/rules/ciclo-de-trabajo.md`. Créalo con este contenido,
tal cual:

```
> Instalado por la colección de skills portables. Cada línea nombra la skill que la
> ejecuta; si desinstalas una, borra su línea.

En este proyecto se trabaja siguiendo este ciclo. **Cada paso lo hace la skill que lo
nombra: ábrela, que el procedimiento está dentro de ella y aquí no.**

1. **Antes de construir cualquier cosa**, abre la skill «investigar»: decide ella, con cinco
   comprobaciones de una línea, si el caso merece investigarse. Casi siempre dirá que no.
2. **Nada más cambiar algo visible para alguien**, y antes de darlo por terminado, abre la
   skill «mirar-la-pantalla».
3. **Nada más construir o cambiar un camino que una persona pueda recorrer** por la
   interfaz, y antes de darlo por terminado, abre la skill «recorrer-la-aplicacion».
4. **Antes de reportar cualquier trabajo como terminado**, abre la skill
   «validar-antes-de-entregar».
5. **Antes de dar por cerrado un trabajo con efecto real**, abre la skill
   «registrar-cambios». Una tarea no está terminada hasta que su entrada existe.

Los tres primeros pasos solo entran si se cumple su condición. Los dos últimos cierran todo
trabajo, y en ese orden: primero se comprueba, y después se registra lo comprobado.

**Si alguna de estas skills no está instalada, dilo y que lo decida la persona.** No
improvises un sustituto ni sigas como si el paso no existiera: el procedimiento vive en la
skill, y sin ella ese paso no se ha hecho.
```

**De dónde sale cada línea.** Cinco de las once carpetas traen, además del `SKILL.md`, un
archivo **`INSTALACION.md`**: ahí cada skill declara **su** línea, por qué hace falta y qué
hacer al actualizar o desinstalar. El ciclo de arriba es esas cinco líneas puestas en orden,
con su cabecera y su salvaguarda.

> **Van las cinco, siempre.** Aunque tu proyecto no tenga interfaz, aunque no lleve registro
> de cambios. Están escritas en condicional —«algo *visible para alguien*», «*un camino que
> una persona pueda recorrer*»—, así que donde no aplican no llegan a activarse: quedan
> cargadas y dormidas, y ocupan una línea. Dejar fuera las que «hoy no hacen falta» solo
> consigue que el día que hagan falta no estén.

> **Y no le añadas el procedimiento de ninguna skill, ni resumido.** El ciclo dice **cuándo**;
> el **cómo** vive dentro de cada skill. Un procedimiento delante compite con la skill que
> debería reemplazar y gana él: se probó al revés, y de tres skills se abrió una.

**Si prefieres que lo haga Claude:** abre una conversación en la carpeta de la colección y
dile *«sigue INSTALAR.md por el camino A»*. Lee este documento y los cinco `INSTALACION.md`,
y te propone el archivo antes de crearlo.

### Paso 3 — comprobar que ha funcionado de verdad

Copiar los archivos no demuestra que se estén cargando. Estas dos comprobaciones sí.

**1. ¿Están las reglas en contexto?** Abre una conversación **nueva** en cualquier proyecto
y escribe `/context`. Debe aparecer `ciclo-de-trabajo.md` en la lista de archivos de
instrucciones cargados. Si no aparece, no está haciendo nada.

**2. ¿Están las skills disponibles?** En esa misma conversación, pregunta: *«¿tienes
instalada alguna skill para apuntar ideas?»*. Debería reconocerla.

Si la primera comprobación falla, casi siempre es que el archivo está en el sitio
equivocado: repasa que la ruta sea exactamente `~/.claude/rules/` y que acabe en `.md`.

### El precio de este camino

Dicho claro, porque lo tiene:

1. **No viaja con el repositorio.** Nadie de tu equipo recibe nada al clonar el proyecto, y
   si cambias de ordenador hay que volver a instalar.
2. **Hay que reinstalar después de cada cambio.** Si mejoras una skill, la copia de
   `~/.claude/skills/` **no se entera**: es una copia, no un enlace. Vuelve a ejecutar el
   paso 1.
3. **Se aplica a todos tus proyectos**, incluso a los que no querías. Eso es la gracia del
   camino, pero conviene saberlo.

---

## Camino B — a nivel de proyecto

Vive dentro del repositorio y **viaja con él**: quien lo clone recibe la colección.

### La forma fácil — pegarle esto a Claude

Abre una conversación **en la carpeta de tu proyecto** y pégale este encargo. No hace falta
tener nada descargado: lo hace todo, desde traerse la colección hasta dejar puestas
las once skills y el ciclo de trabajo.

```prompt-proyecto
Instala la colección de skills portables en este proyecto.

1. Tráetela. Clona https://github.com/Sagitario-A/skills-portables en una
   carpeta temporal fuera del proyecto, con el historial completo —un clonado
   superficial deja fuera las etiquetas—, y sitúate en la última versión
   publicada creando una rama local a partir de su etiqueta de versión más alta.

2. Abre el INSTALAR.md que viene dentro y haz el camino de proyecto entero. Son
   dos piezas y hacen falta las dos:
   - copia las once carpetas de skills a .claude/skills/ de este proyecto;
   - crea UN archivo, .claude/rules/ciclo-de-trabajo.md, con el ciclo completo:
     la cabecera, las cinco líneas que declaran sus INSTALACION.md en el orden
     que indica INSTALAR.md, y la salvaguarda del final.

   Ese texto va literal: no lo resumas, no lo reescribas y no lo mejores. Y no
   le añadas el procedimiento de ninguna skill, ni resumido: el ciclo dice
   cuándo, y el cómo vive dentro de cada skill. Si se lo añades, dejan de
   abrirse.

   Si este proyecto ya tiene los cinco archivos de reglas de una versión
   anterior —investigar.md, mirar-la-pantalla.md, recorrer-la-aplicacion.md,
   registrar-cambios.md, validar-antes-de-entregar.md—, enséñamelos y dime que
   los sustituye este ciclo. No los borres sin que yo lo diga.

3. Hazlo copiando, nunca con «npx skills»: aquí deja enlaces con rutas de esta
   máquina, y el proyecto se queda sin skills en cuanto alguien lo clona.

NO TE SALGAS DEL PROYECTO. Lo único que puedes escribir está dentro de esta
carpeta, y la descarga temporal del punto 1. Si algo te lleva a escribir en mi
carpeta personal, párate y dímelo en vez de hacerlo.

Al terminar, en este orden:
- comprueba que no queda nada de la colección en ~/.claude/skills/ ni en
  ~/.claude/rules/: tenerla en los dos sitios a la vez la rompe, y si
  encuentras algo dímelo en vez de borrarlo;
- borra la carpeta temporal;
- pasa las comprobaciones que indique el INSTALAR.md para este camino;
- y dime qué versión has instalado, qué encontraste y qué ha quedado sin hacer.
```

Nada de ese texto es adorno, y conviene saber por qué está cada parte:

- **«las dos piezas»** impide que se salte la segunda, que es la que la gente se deja;
- **«va literal»** evita que el ciclo se parafrasee o se le añada procedimiento, que es lo
  único que sale mal al hacerlo así — y añadirle procedimiento es justo lo que hace que las
  skills dejen de abrirse;
- **la barra de seguridad** acota por escrito dónde se puede escribir, de modo que un
  descuido se convierte en una pregunta en vez de en archivos sueltos por tu ordenador;
- **la comprobación del otro sitio** caza la instalación duplicada antes de que ocurra;
- y **pedir las comprobaciones** hace que la instalación se verifique sola.

Todo ocurre dentro de la carpeta del proyecto, así que **casi no pregunta nada**.

### Paso 1 — copiar las once skills

*A partir de aquí, la forma manual, para quien la prefiera.*

Van a `.claude/skills/` dentro del proyecto. **Aquí se copian a mano y ya está.**

> **Por qué no se usa aquí el instalador por comando.** Hay una herramienta abierta,
> `npx skills add`, que instala skills desde un repositorio. **Para esta colección no
> sirve, en ninguno de los dos caminos**, y está comprobado:
>
> - **En un proyecto no deja las skills: deja enlaces con la ruta absoluta de esta
>   máquina.** Al mover el proyecto de sitio, los once enlaces apuntan a la nada; en un
>   clonado en otro ordenador, igual. Eso destruye justo lo que este camino busca —que la
>   colección viaje con el repositorio— y lo destruye **en silencio**: quien clone verá las
>   carpetas en su sitio y ninguna skill funcionando.
> - **A nivel de usuario reparte la colección por 53 carpetas** de otros programas
>   —Tabnine, Qwen, Roo, Trae y cuarenta y tantos más—, y **no se puede acotar**: pedirle que
>   instale solo para Claude no cambia nada. Desinstalar dejaría de ser borrar dos carpetas.
>
> **No lo cambies por comodidad.**

**Windows** (PowerShell), desde la carpeta de la colección, cambiando la ruta de destino por
la de tu proyecto:

```powershell
$destino = "C:\ruta\a\tu-proyecto\.claude\skills"
New-Item -ItemType Directory -Force $destino | Out-Null
Get-ChildItem -Directory | Where-Object { Test-Path "$($_.FullName)\SKILL.md" } | ForEach-Object {
  Copy-Item $_.FullName $destino -Recurse -Force
}
```

**macOS o Linux**, lo mismo:

```bash
destino=/ruta/a/tu-proyecto/.claude/skills
mkdir -p "$destino"
for d in */; do [ -f "$d/SKILL.md" ] && cp -r "$d" "$destino/"; done
```

### Paso 2 — poner el ciclo de trabajo en el proyecto

Igual que en el camino A, pero dentro del proyecto: el archivo va a
`.claude/rules/ciclo-de-trabajo.md`, **con el mismo contenido exacto**, que está escrito
entero en el [paso 2 del camino A](#paso-2--poner-el-ciclo-de-trabajo).

Te quedará así:

```
tu-proyecto/
└── .claude/
    ├── skills/                 ← las once
    └── rules/
        └── ciclo-de-trabajo.md ← las cinco líneas, encadenadas
```

**Si prefieres que lo haga Claude:** abre una conversación en tu proyecto, enséñale la
carpeta de la colección y dile *«sigue INSTALAR.md por el camino B»*.

### Paso 3 — súbelo al repositorio

Es lo que hace que viaje. Sin esto, el camino B no se distingue de tenerlo suelto en tu
ordenador:

```bash
git add .claude/
git commit -m "instalar la colección de skills"
```

### Paso 4 — comprobar que ha funcionado de verdad

Las mismas dos comprobaciones del camino A, pero **con la conversación abierta dentro del
proyecto**:

**1.** Conversación nueva → `/context` → debe salir `ciclo-de-trabajo.md`.
**2.** Pregunta si reconoce alguna de las skills.

Y una tercera que solo aplica aquí: **pídele a alguien del equipo que clone el repositorio y
repita la comprobación 1.** Si a esa persona no le aparecen, el camino B no está cumpliendo
su única ventaja.

### El precio de este camino

1. **Hay que repetirlo en cada proyecto nuevo.** No se hereda: un proyecto nuevo empieza sin
   nada, y hay que volver a copiar las once carpetas y crear el archivo del ciclo.
2. **Engorda el repositorio** con archivos que no son del producto.
3. **Si mejoras una skill, hay que llevar el cambio a cada proyecto** donde la hayas
   instalado, uno por uno. Con dos proyectos es incómodo; con seis es una fuente de
   versiones distintas.

---

## El paso extra — montar el navegador

**Solo si el proyecto tiene una interfaz web.** Si lo que haces no se abre en un navegador,
salta esta sección entera: no te falta nada.

Dos de las once —`mirar-la-pantalla` y `recorrer-la-aplicacion`— no trabajan solo con texto:
una hace capturas de la aplicación de verdad y la otra la conduce pulsando y escribiendo.
Para eso hace falta **un navegador automatizado montado en el proyecto**, y eso no lo trae
la colección.

Tres cosas que conviene tener claras:

1. **Es un paso extra, no un tercer paso obligatorio.** La instalación de la colección
   termina en el paso anterior.
2. **Va por proyecto, siempre** — también si has elegido el camino A. Es configuración del
   proyecto (qué puerto, cómo se levanta la app, con qué credenciales se entra), y eso no
   puede vivir en tu carpeta personal porque cambia con cada proyecto.
3. **No montarlo no rompe nada.** El resto de la colección funciona igual. Simplemente esas
   dos skills no pueden trabajar: cuando les toque, **lo dicen y se paran** en vez de fingir
   que han mirado.

> Eso último tiene una consecuencia que conviene no perder de vista: si el navegador no está
> montado y el trabajo se entrega igual, **se ha entregado sin mirar**. No es un fallo de la
> skill —avisa—, pero el cambio sale sin que nadie haya visto la pantalla.

### Cómo se monta

Cada una de las dos trae su propio archivo **`MONTAJE.md`** dentro de su carpeta, con las
instrucciones completas: qué instalar, qué decidir y la configuración de ejemplo.

- **`mirar-la-pantalla/MONTAJE.md`** — además de la herramienta, hay que decidir **con qué
  aparato y a qué tamaño** se captura, porque de eso depende que las fotos valgan algo.
- **`recorrer-la-aplicacion/MONTAJE.md`** — además de la herramienta, hay que decidir
  **contra qué entorno se recorre y con qué credenciales se entra**, porque conducir crea
  datos de verdad.

Comparten la primera parte —instalar el navegador automatizado— y se separan después. Si
montas uno, el otro te costará solo su mitad propia.

**Se monta cuando haga falta, no ahora.** La primera vez que una de las dos vaya a trabajar,
te dirá que falta y te ofrecerá montarlo. Adelantarlo solo merece la pena si ya sabes que el
proyecto tiene interfaz y quieres dejarlo listo.

### Comprobar que está montado

Desde la carpeta del proyecto:

```bash
npx playwright --version
```

Si responde con un número, la herramienta está. Que además esté **bien configurada** para
este proyecto —el puerto correcto, el aparato correcto— es lo que comprueba el primer uso
real, no este comando.

---

## Cambiar de camino

Es reversible, y no hay ningún dato que perder: son instrucciones, no información tuya. Lo
único que **no** se puede hacer es dejar las dos a la vez, así que el orden importa:
**primero se retira la anterior, después se instala la nueva.**

### De usuario a proyecto

1. **Retira la de usuario.** Borra las once carpetas de `~/.claude/skills/` y el archivo
   del ciclo de `~/.claude/rules/`.

   ```bash
   # macOS o Linux
   rm -rf ~/.claude/skills/{apuntar,auditar-proyecto,constructor-del-manual,investigar,lluvia-de-ideas,mirar-la-pantalla,planificar-proyecto,recorrer-la-aplicacion,registrar-cambios,registrar-comprobacion-humana,validar-antes-de-entregar}
   rm -f ~/.claude/rules/ciclo-de-trabajo.md
   # y, si vienes de una versión anterior a la 0.2.0, también los cinco antiguos:
   rm -f ~/.claude/rules/{investigar,validar-antes-de-entregar,registrar-cambios,mirar-la-pantalla,recorrer-la-aplicacion}.md
   ```

   > **Borra solo esos nombres.** Esas dos carpetas pueden tener cosas tuyas que no vienen
   > de aquí. No borres las carpetas enteras.

2. **Comprueba que se ha ido**: conversación nueva → `/context` → el archivo del ciclo ya no
   debe aparecer.
3. **Instala el [camino B](#camino-b--a-nivel-de-proyecto)** desde el paso 1.

### De proyecto a usuario

1. **Retira la del proyecto.** Borra `.claude/skills/` y el archivo del ciclo de
   `.claude/rules/`. Si lo habías subido, hazlo también en el repositorio:

   ```bash
   git rm -r --cached .claude/skills
   git rm --cached .claude/rules/ciclo-de-trabajo.md
   git commit -m "retirar la colección de skills del proyecto"
   ```

2. **Comprueba que se ha ido**, igual que arriba.
3. **Instala el [camino A](#camino-a--a-nivel-de-usuario)** desde el paso 1.

---

## Actualizar

Cuando la colección cambie, vuelve a hacer los pasos 1 y 2 del camino que tengas. Tres
avisos:

1. **Las copias no se enteran solas.** Copiar de nuevo es lo único que actualiza. Lo más
   cómodo es volver a pegar el prompt: se trae la última versión publicada y repite las dos
   piezas.
2. **El ciclo no lo actualiza nadie**, ni la herramienta ni nada: el paso 2 es siempre a
   mano, y también al actualizar.
3. **Si lo habías editado a mano, no lo sobrescribas sin mirar.** Compara lo que tienes
   puesto con lo que declara hoy este documento. Si coincide, sustitúyelo sin más. **Si no
   coincide, está tocado**: mira la diferencia y decide tú. Tus cambios no deben desaparecer
   en silencio.

### Si vienes de una versión anterior a la 0.2.0, hay que intervenir

Hasta la `0.1.2` el paso 2 eran **cinco archivos de regla**, uno por skill, y cada uno
llevaba dentro el procedimiento corto de su skill. **Desde la `0.2.0` es un solo archivo con
el ciclo, y sin procedimiento.** No es una mejora cosmética: con el procedimiento delante,
las skills no llegaban a abrirse — se probó, y de tres se abrió una.

Así que actualizar aquí no es solo volver a copiar:

1. Crea `ciclo-de-trabajo.md` con el contenido del paso 2.
2. **Borra los cinco antiguos**: `investigar.md`, `mirar-la-pantalla.md`,
   `recorrer-la-aplicacion.md`, `registrar-cambios.md` y `validar-antes-de-entregar.md`, en
   la carpeta de reglas donde los tengas.
3. Si habías editado alguno, **míralo antes de borrarlo**: lo que le hubieras añadido no
   está en ninguna otra parte.

> **Dejar los cinco además del ciclo es el peor resultado posible**, peor que no actualizar:
> tendrías el ciclo diciendo que abras la skill y, justo al lado, el procedimiento que hace
> que no haga falta abrirla. Uno, y solo uno.

## Desinstalar

Borra las once carpetas de skills y el archivo del ciclo, en el sitio donde los tengas — los
comandos son los de [cambiar de camino](#cambiar-de-camino).

**Si en algún momento instalaste con `npx skills`, hay más que borrar.** Esa herramienta
deja los archivos de verdad en **`~/.agents/skills/`** y reparte enlaces por las carpetas de
los demás agentes, así que borrar lo de `~/.claude/` no borra nada. Quítalo con
`npx skills remove --all -g`, y revisa que no queden `~/.agents/skills/` ni, en proyectos,
un `.agents/skills/` con su `skills-lock.json`.

**Fuera de eso no deja rastro en ninguna parte.** Los documentos que se hayan escrito
mientras tanto —el registro de cambios, la lista de pendientes, el manual del proyecto— son
tuyos y se quedan donde están.

---

## Qué leer después

- **[DOCUMENTACION.md](DOCUMENTACION.md)** — el manual de uso: qué hace cada skill, cuándo
  actúa y qué te da.
- **[README.md](README.md)** — las reglas de la colección y por qué está cortada así.
