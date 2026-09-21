/**
 * Plantilla para `e2e/capturas.spec.ts`.
 *
 * No comprueba nada: deja imágenes en `capturas/` para poder abrirlas con la herramienta
 * Read y juzgarlas. Adáptala al proyecto y borra lo que no aplique.
 *
 *   npx playwright test capturas
 */
import { expect, test } from '@playwright/test'

const en = (nombre: string) => ({ path: `capturas/${nombre}.png` })

test('recién instalada, sin nada dentro', async ({ page }) => {
  await page.goto('/')
  // Espera a algo observable, nunca a un temporizador.
  await expect(page.getByRole('button', { name: 'empezar' })).toBeVisible()
  await page.screenshot(en('vacia'))
})

test('con datos, que es como se usa', async ({ page }) => {
  await page.goto('/')
  // Monta el estado usando la app, como una persona: de paso pruebas que el camino va.
  // await ...

  await page.screenshot(en('con-datos'))
})

test('el caso feo: textos largos e importes enormes', async ({ page }) => {
  await page.goto('/')
  // Los fallos de maquetación viven aquí, no en el caso bonito.
  // await ...

  // Ninguna página debería poder desplazarse en horizontal.
  const desborde = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  )
  expect(desborde).toBe(0)

  await page.screenshot(en('caso-extremo'))
})

test.describe('en modo oscuro', () => {
  // Mira el tema que va a usar de verdad quien abra la app.
  test.use({ colorScheme: 'dark' })

  test('las mismas pantallas', async ({ page }) => {
    await page.goto('/')
    await page.screenshot(en('oscuro-vacia'))
  })
})
