# Montaje — `mirar-la-pantalla`

**Esto solo se hace una vez por proyecto.** Está aparte del archivo principal a propósito:
son instrucciones que no pintan nada las otras novecientas veces que se usa la skill, y
cargarlas cada vez gasta atención a cambio de cero.

Si el proyecto ya tiene el navegador automatizado montado, no hace falta leer esto.


Si ya hay Playwright, sáltate esto y pasa al fichero de capturas.

```bash
npm install -D @playwright/test
```

Si el proyecto no es de Node, Playwright existe igual para Python, Java y .NET: instala el
que corresponda y traduce los ejemplos: la mecánica —esperar a algo observable, disparar la
captura, abrirla— es idéntica en todos.

**Antes de escribir la configuración hay dos cosas que decidir, y ninguna tiene valor por
defecto.** La regla para las dos es la misma: **sácalo del proyecto; si no puedes,
pregunta; no lo inventes en silencio.** Toda la sesión de capturas se hace con esas dos
decisiones, así que equivocarlas no estropea una foto, las invalida todas.

**1. ¿Dónde se va a usar esto?** De ahí salen el motor y el tamaño.

Búscalo primero en el proyecto, que casi siempre lo dice:

- Manifiesto de PWA con `display: standalone` u `orientation: portrait`, etiquetas
  `apple-touch-icon` o `apple-mobile-web-app-capable` → móvil, y iOS en concreto.
- Dependencias tipo Capacitor o Cordova → móvil.
- Un contenedor principal con `max-width` estrecho, o estilos escritos de móvil hacia
  arriba → móvil.
- Paneles de administración, tablas anchas, barras laterales fijas → escritorio.
- Lo que digan el README o los documentos de instrucciones del proyecto.
- Una configuración de Playwright anterior, si la hay.

Con la respuesta:

- **iPhone o iPad** → WebKit, que es el motor de Safari: `{ ...devices['iPhone 13'] }`.
- **Android** → Chromium: `{ ...devices['Pixel 7'] }`.
- **Escritorio** → Chromium: `{ viewport: { width: 1280, height: 800 } }`.
- **Ambos** → dos entradas en `projects`, y mira las capturas de las dos. Una interfaz que
  se lee bien a 1280 px puede ser inservible a 390.

**Si después de mirar sigue sin estar claro, pregunta** enseñando estas opciones. Es una
pregunta de diez segundos que evita tirar una sesión entera.

Instala solo los motores que vayas a usar: `npx playwright install chromium` o
`npx playwright install webkit`. Son descargas grandes.

**2. ¿Cómo se levanta la app?** Mira los scripts del proyecto y adapta `webServer`. Casos
habituales:

| Proyecto | `command` | `port` |
|---|---|---|
| Vite | `npm run build && npm run preview -- --port 4173` | 4173 |
| Next.js | `npm run build && npm run start` | 3000 |
| Create React App / estático ya construido | `npx serve -s build -l 5000` | 5000 |
| Servidor propio (Django, Rails, Express…) | el que use el proyecto | el suyo |

Si ya tienes el servidor de desarrollo corriendo y no quieres que Playwright lo levante,
**quita `webServer` entero** y deja solo `baseURL` apuntando a ese puerto.

Si los scripts del proyecto no dejan claro cómo se sirve, **pregunta también esto** en vez
de probar comandos a ciegas.

`playwright.config.ts`, con las dos respuestas puestas:

```ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  use: { baseURL: 'http://localhost:4173' }, // ← el puerto que corresponda
  projects: [{ name: 'movil', use: { ...devices['iPhone 13'] } }], // ← pregunta 1
  webServer: {
    command: 'npm run build && npm run preview -- --port 4173', // ← pregunta 2
    port: 4173,
    reuseExistingServer: true,
    timeout: 120_000,
  },
})
```

Añade `"capturas": "playwright test capturas"` a los scripts, y **`capturas/` y
`test-results/` a `.gitignore`**: son imágenes que se regeneran solas, no código.

