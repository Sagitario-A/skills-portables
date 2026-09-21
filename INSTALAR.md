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

**Pieza 2 — las cinco reglas.** Las otras cinco skills no esperan a que las llames: actúan
solas en un momento que nadie anuncia —justo antes de decirte que algo está terminado, por
ejemplo—. No hay ninguna frase que las despierte, así que necesitan una línea puesta donde
se lea al principio de cada conversación.

> **Si te saltas la pieza 2, esas cinco están instaladas y no hacen nada.** Sin aviso y sin
> síntoma: nada falla, simplemente no ocurre. Por eso la instalación tiene dos pasos y no
> uno.

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

**Si tienes Node**, lo más fiable es preguntárselo a la herramienta, que además distingue lo
que está puesto de lo que está puesto pero sin enlazar:

```bash
npx skills list -g     # lo instalado para todos tus proyectos
npx skills list        # lo instalado en este proyecto
```

**Si no**, mirando las carpetas. **En Windows** (PowerShell), desde la carpeta de tu
proyecto:

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

Abre una conversación en cualquier carpeta y pégale este encargo. Lo hace todo: las once
skills y las cinco reglas.

```prompt-usuario
Instala la colección de skills portables para todos mis proyectos.

La tengo descargada en <carpeta>. Si no la tengo, clónala de
https://github.com/Sagitario-A/skills-portables

Lee su INSTALAR.md y haz el camino de usuario entero, las dos piezas: copia las
once carpetas de skills a ~/.claude/skills/, y crea los cinco archivos de reglas
en ~/.claude/rules/ con el texto exacto que declara cada INSTALACION.md, con su
línea de atribución delante.

No resumas ni reescribas ningún texto: van literales.

Al terminar, pásame las comprobaciones del paso 3 y dime qué ha quedado sin hacer.
```

Tres cosas de ese texto no son adorno: **«las dos piezas»** impide que se salte la segunda,
que es la que la gente se deja; **«van literales»** evita que los textos de regla se
parafraseen, que es lo único que sale mal; y **pedir las comprobaciones** hace que la
instalación se verifique sola.

Como escribe fuera del proyecto, **pedirá permiso un par de veces y hay que aceptar**. A
cambio te enseña cada texto antes de escribirlo, así que ves lo que entra.

### Paso 1 — traer las once skills

*A partir de aquí, la forma manual, para quien la prefiera.*

Van a `~/.claude/skills/`, cada una en su propia carpeta y con su `SKILL.md` dentro.

**La forma corta**, si tienes Node instalado — una línea, sin descargar nada a mano:

```bash
npx skills add Sagitario-A/skills-portables --all -g
```

Es una herramienta abierta de terceros que trae las carpetas enteras y las coloca sola. Deja
los archivos de verdad en `~/.agents/skills/` y pone en `~/.claude/skills/` enlaces que
apuntan ahí. Para este camino da igual, porque esa carpeta no se mueve de sitio nunca.

**La forma a mano**, que no depende de nadie y sirve igual. Desde la carpeta donde has
descargado la colección:

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

### Paso 2 — poner las cinco reglas

Cinco de las once carpetas traen, además del `SKILL.md`, un archivo **`INSTALACION.md`**.
Ese archivo es la declaración de la skill: dice por qué hace falta, **el texto exacto** que
hay que dejar puesto, y qué hacer al actualizar o desinstalar.

Son estas cinco: `investigar`, `validar-antes-de-entregar`, `registrar-cambios`,
`mirar-la-pantalla`, `recorrer-la-aplicacion`.

Para cada una:

1. Abre su `INSTALACION.md` y busca la sección **«Texto a instalar»**.
2. Crea el archivo `~/.claude/rules/<nombre-de-la-skill>.md`.
3. Dentro pon **primero** la línea de atribución que indica ese mismo documento —dice qué
   skill puso el archivo, para poder retirarlo después— y **debajo** el texto.

Te quedará así:

```
~/.claude/rules/
├── investigar.md
├── mirar-la-pantalla.md
├── recorrer-la-aplicacion.md
├── registrar-cambios.md
└── validar-antes-de-entregar.md
```

> **Se ponen las cinco, siempre.** Aunque tu proyecto no tenga interfaz, aunque no lleve
> registro de cambios. Están escritas en condicional —«ningún cambio *visible*…», «*un
> camino que una persona pueda recorrer*»—, así que donde no aplican no llegan a activarse:
> quedan cargadas y dormidas, y ocupan unas pocas líneas. Dejar fuera las que «hoy no hacen
> falta» solo consigue que el día que hagan falta no estén.

**Si prefieres que lo haga Claude:** abre una conversación en la carpeta de la colección y
dile *«sigue INSTALAR.md por el camino A»*. Lee este documento y los cinco `INSTALACION.md`,
y te propone los archivos antes de crearlos.

### Paso 3 — comprobar que ha funcionado de verdad

Copiar los archivos no demuestra que se estén cargando. Estas dos comprobaciones sí.

**1. ¿Están las reglas en contexto?** Abre una conversación **nueva** en cualquier proyecto
y escribe `/context`. Deben aparecer los cinco archivos de regla en la lista de archivos de
instrucciones cargados. Si no aparecen, no están haciendo nada.

**2. ¿Están las skills disponibles?** En esa misma conversación, pregunta: *«¿tienes
instalada alguna skill para apuntar ideas?»*. Debería reconocerla.

Si la primera comprobación falla, casi siempre es que el archivo está en el sitio
equivocado: repasa que la ruta sea exactamente `~/.claude/rules/` y que los archivos acaben
en `.md`.

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

Abre una conversación **en la carpeta de tu proyecto** y pégale este encargo. Lo hace todo:
las once skills y las cinco reglas.

```prompt-proyecto
Instala la colección de skills portables en este proyecto.

La tengo descargada en <carpeta>. Si no la tengo, clónala de
https://github.com/Sagitario-A/skills-portables

Lee su INSTALAR.md y haz el camino de proyecto entero, las dos piezas: copia las
once carpetas de skills a .claude/skills/, y crea los cinco archivos de reglas en
.claude/rules/ con el texto exacto que declara cada INSTALACION.md, con su línea
de atribución delante.

No resumas ni reescribas ningún texto: van literales.

Al terminar, pásame las comprobaciones del paso 4 y dime qué ha quedado sin hacer.
```

Tres cosas de ese texto no son adorno: **«las dos piezas»** impide que se salte la segunda,
que es la que la gente se deja; **«van literales»** evita que los textos de regla se
parafraseen, que es lo único que sale mal; y **pedir las comprobaciones** hace que la
instalación se verifique sola.

Todo ocurre dentro de la carpeta del proyecto, así que **casi no pregunta nada**.

### Paso 1 — copiar las once skills

*A partir de aquí, la forma manual, para quien la prefiera.*

Van a `.claude/skills/` dentro del proyecto. **Aquí se copian a mano y ya está.**

> **Por qué aquí no se usa `npx skills`, aunque en el otro camino sí.** Esa herramienta no
> deja las skills: deja **enlaces con la ruta absoluta de esta máquina**, apuntando a una
> carpeta `.agents/skills/` del propio proyecto. Comprobado: al mover el proyecto de sitio,
> los once enlaces apuntan a la nada. En un clonado en otro ordenador pasa lo mismo.
>
> Eso destruye justo lo que este camino existe para conseguir —que la colección viaje con el
> repositorio—, y lo destruye **en silencio**: quien clone verá las carpetas en su sitio y
> ninguna skill funcionando. **No lo cambies.**

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

### Paso 2 — poner las cinco reglas

Igual que en el camino A, pero dentro del proyecto: los archivos van a
`.claude/rules/<nombre-de-la-skill>.md`.

Mismas cinco skills, mismo procedimiento —abrir su `INSTALACION.md`, copiar el texto,
anteponer la línea de atribución—, y **las cinco siempre**, por el mismo motivo.

Te quedará así:

```
tu-proyecto/
└── .claude/
    ├── skills/          ← las once
    └── rules/
        ├── investigar.md
        ├── mirar-la-pantalla.md
        ├── recorrer-la-aplicacion.md
        ├── registrar-cambios.md
        └── validar-antes-de-entregar.md
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

**1.** Conversación nueva → `/context` → deben salir los cinco archivos de regla.
**2.** Pregunta si reconoce alguna de las skills.

Y una tercera que solo aplica aquí: **pídele a alguien del equipo que clone el repositorio y
repita la comprobación 1.** Si a esa persona no le aparecen, el camino B no está cumpliendo
su única ventaja.

### El precio de este camino

1. **Hay que repetirlo en cada proyecto nuevo.** No se hereda: un proyecto nuevo empieza sin
   nada, y hay que volver a copiar las once carpetas y crear los cinco archivos.
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

1. **Retira la de usuario.** Borra las once carpetas de `~/.claude/skills/` y los cinco
   archivos de `~/.claude/rules/`.

   ```bash
   # macOS o Linux
   rm -rf ~/.claude/skills/{apuntar,auditar-proyecto,constructor-del-manual,investigar,lluvia-de-ideas,mirar-la-pantalla,planificar-proyecto,recorrer-la-aplicacion,registrar-cambios,registrar-comprobacion-humana,validar-antes-de-entregar}
   rm -f ~/.claude/rules/{investigar,validar-antes-de-entregar,registrar-cambios,mirar-la-pantalla,recorrer-la-aplicacion}.md
   ```

   > **Borra solo esos nombres.** Esas dos carpetas pueden tener cosas tuyas que no vienen
   > de aquí. No borres las carpetas enteras.

2. **Comprueba que se ha ido**: conversación nueva → `/context` → los cinco archivos ya no
   deben aparecer.
3. **Instala el [camino B](#camino-b--a-nivel-de-proyecto)** desde el paso 1.

### De proyecto a usuario

1. **Retira la del proyecto.** Borra `.claude/skills/` y los cinco archivos de
   `.claude/rules/`. Si lo habías subido, hazlo también en el repositorio:

   ```bash
   git rm -r --cached .claude/skills
   git rm --cached .claude/rules/{investigar,validar-antes-de-entregar,registrar-cambios,mirar-la-pantalla,recorrer-la-aplicacion}.md
   git commit -m "retirar la colección de skills del proyecto"
   ```

2. **Comprueba que se ha ido**, igual que arriba.
3. **Instala el [camino A](#camino-a--a-nivel-de-usuario)** desde el paso 1.

---

## Actualizar

Cuando la colección cambie, vuelve a hacer los pasos 1 y 2 del camino que tengas. Tres
avisos:

1. **Las copias no se enteran solas.** Copiar de nuevo es lo único que actualiza. Si
   instalaste con `npx skills`, `npx skills update -g` hace el paso 1 por ti.
2. **Las reglas no las actualiza nadie**, ni la herramienta ni nada: el paso 2 es siempre a
   mano, y también al actualizar.
3. **Si habías editado una regla a mano, no la sobrescribas sin mirar.** Compara lo que
   tienes puesto con el texto que declara hoy su `INSTALACION.md`. Si coincide, sustitúyelo
   sin más. **Si no coincide, está tocado**: mira la diferencia y decide tú. Tus cambios no
   deben desaparecer en silencio.

## Desinstalar

Borra las once carpetas de skills y los cinco archivos de regla, en el sitio donde los
tengas — los comandos son los de [cambiar de camino](#cambiar-de-camino).

**Si instalaste con `npx skills`, hay una carpeta más que borrar.** Esa herramienta deja los
archivos de verdad en **`~/.agents/skills/`** y en `~/.claude/skills/` solo enlaces que
apuntan ahí. Borrar los enlaces no borra nada: quita también las once carpetas de
`~/.agents/skills/`, o deja que lo haga ella:

```bash
npx skills remove --all -g
```

Y en un proyecto donde se instalara con la herramienta, quedan además `.agents/skills/` y un
archivo `skills-lock.json` en la raíz.

**Fuera de eso no deja rastro en ninguna parte.** Los documentos que se hayan escrito
mientras tanto —el registro de cambios, la lista de pendientes, el manual del proyecto— son
tuyos y se quedan donde están.

---

## Qué leer después

- **[DOCUMENTACION.md](DOCUMENTACION.md)** — el manual de uso: qué hace cada skill, cuándo
  actúa y qué te da.
- **[README.md](README.md)** — las reglas de la colección y por qué está cortada así.
