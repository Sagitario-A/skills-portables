# Montaje — `recorrer-la-aplicacion`

**Esto solo se hace una vez por proyecto**, y solo si el proyecto tiene una interfaz que
alguien pueda recorrer. Está aparte del archivo principal a propósito: son instrucciones que
no pintan nada las otras novecientas veces que se usa la skill, y cargarlas cada vez gasta
atención a cambio de cero.

Si el proyecto ya tiene el navegador automatizado montado, mira solo el apartado 3, que es
el que no comparte con nada más.

## 1. La herramienta

```bash
npm install -D @playwright/test
npx playwright install chromium
```

Si el proyecto no es de Node, Playwright existe igual para Python, Java y .NET: instala el
que corresponda y traduce los ejemplos. La mecánica —abrir, pulsar, escribir, esperar a algo
observable— es idéntica en todos.

**Para recorrer basta con un motor.** Aquí no se juzga cómo se ve, así que no hace falta
capturar con el aparato de destino: se comprueba que el camino funciona, y eso no cambia
entre motores. Un solo navegador y a correr.

## 2. Cómo se levanta la aplicación

Mira los scripts del proyecto y adapta `webServer`. Casos habituales:

| Proyecto | `command` | `port` |
|---|---|---|
| Vite | `npm run build && npm run preview -- --port 4173` | 4173 |
| Next.js | `npm run build && npm run start` | 3000 |
| Estático ya construido | `npx serve -s build -l 5000` | 5000 |
| Servidor propio (Django, Rails, Express…) | el que use el proyecto | el suyo |

Si ya tienes el servidor de desarrollo corriendo y no quieres que lo levante Playwright,
**quita `webServer` entero** y deja solo `baseURL` apuntando a ese puerto.

Si los scripts no dejan claro cómo se sirve, **pregunta** en vez de probar comandos a
ciegas.

## 3. Lo que este montaje tiene y el de capturar no: entrar y salir

Mirar una pantalla es inofensivo. **Conducir la aplicación no: crea datos de verdad.** Por
eso aquí hay dos cosas más que decidir, y **ninguna se inventa**: se saca del proyecto, y si
no se puede, se pregunta.

**3.1. Contra qué entorno se recorre.** Mira la configuración que use el proyecto para
distinguir entornos y a qué dirección apunta. Déjalo escrito en la configuración, con el
nombre del entorno a la vista, para que nunca haya que deducirlo a mitad de un recorrido.

**3.2. Con qué credenciales se entra.** Casi ningún camino interesante empieza en la
pantalla de acceso. Hace falta una cuenta con la que recorrer, y **no se inventa**: si el
proyecto no tiene una de pruebas, se pide.

Van en variables de entorno, nunca escritas en la configuración, y el archivo que las
guarda va al `.gitignore`:

```bash
# .env.local  — y esta línea en .gitignore
RECORRIDO_URL=http://localhost:4173
RECORRIDO_USUARIO=...
RECORRIDO_CLAVE=...
```

## 4. La configuración

`playwright.config.ts`, con las respuestas puestas:

```ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './recorridos',
  use: {
    baseURL: process.env.RECORRIDO_URL ?? 'http://localhost:4173',
    trace: 'retain-on-failure',   // deja el rastro del recorrido que se tuerce
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run build && npm run preview -- --port 4173', // ← apartado 2
    port: 4173,
    reuseExistingServer: true,
    timeout: 120_000,
  },
})
```

**El rastro y el vídeo solo cuando algo falla.** Es lo que convierte «el recorrido se
rompió» en «se rompió aquí, con la pantalla en este estado»: sin eso, un recorrido que falla
obliga a repetirlo entero para ver qué pasó.

Añade `"recorrer": "playwright test recorridos"` a los scripts, y **`recorridos/rastros/`,
`test-results/` y el archivo de credenciales a `.gitignore`**.

## 5. Y una advertencia que no es de configuración

Los recorridos **no se guardan como si fueran pruebas del proyecto**. Esta skill deduce el
camino cada vez y tira el guion al terminar: un recorrido guardado envejece, empieza a
fallar por su cuenta y acaba desactivado, que es como mueren estas suites.

La carpeta `recorridos/` es un sitio de paso, no una colección que se mantiene. Si un
camino merece quedarse comprobado para siempre, eso es una prueba del proyecto y se escribe
como tal, con sus reglas.
