import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/inventory\.html/);
});

test('Comprueba si el carrito contiene 1', async ({ page }) => {
    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Add to cart' })
        .click();
    await expect(
        page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Remove' })
    ).toBeVisible();

    await expect(page.locator('[data-test="shopping-cart-link"]')).toContainText('1');
});

test('comprueba que el carrito no tiene agregado ningun producto', async ({ page }) => {
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});

/**
 * Respuestas: 
 * 
 * 1. corre una vez por cada prueba, entonces sin --project serían 6 logins 
 * 2. por que beforeall corre para todos los tests, incluidos los que creamos con nuevos contextos
 * Error: "context" and "page" fixtures are not supported in "beforeAll" 
 * 
 * Respuesta de trace viewer
 * 1. No queda un trace.zip. on-first-retry solo graba si el runner repite la prueba, y en local retries es 0.
 * 2. por que solo va a guardar el trace cuando alguna prueba falla.
 */