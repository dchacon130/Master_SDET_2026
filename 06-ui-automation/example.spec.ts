import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

/**
 * Listing tests:
  [chromium] › example.spec.ts:3:1 › has title
  [chromium] › example.spec.ts:10:1 › get started link
  [firefox] › example.spec.ts:3:1 › has title
  [firefox] › example.spec.ts:10:1 › get started link
  [webkit] › example.spec.ts:3:1 › has title
  [webkit] › example.spec.ts:10:1 › get started link
Total: 6 tests in 1 file
Listing tests:
  [chromium] › example.spec.ts:3:1 › has title
  [chromium] › example.spec.ts:10:1 › get started link
Total: 2 tests in 1 file
Listing tests:
  [chromium] › example.spec.ts:3:1 › has title
  [firefox] › example.spec.ts:3:1 › has title
  [webkit] › example.spec.ts:3:1 › has title
Total: 3 tests in 1 file

Respuestas: 
1. por que list muestra dos test por navegador. ahí estan las demas ejecuciones.
2. npx playwright test -g "has title" --project chromium
 */