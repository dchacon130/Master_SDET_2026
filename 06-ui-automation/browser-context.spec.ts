import { test, expect } from '@playwright/test';

test('Test with browser no page', async ({ page, browser }) => {
    const buyerContext = await browser.newContext();
    const buyer = await buyerContext.newPage();

    await buyer.goto('https://www.saucedemo.com/');
    await buyer.getByRole('textbox', { name: 'Username' }).fill("standard_user");
    await buyer.getByRole('textbox', { name: 'Password' }).fill("secret_sauce");
    await buyer.getByRole('button', { name: 'Login' }).click();

    await buyer.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Add to cart' })
        .click();
    await expect(
        buyer.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' })
        .getByRole('button', { name: 'Remove' })
    ).toBeVisible();

    await expect(buyer.locator('[data-test="shopping-cart-link"]')).toContainText('1');

    const guestContext = await browser.newContext();
    const guest = await guestContext.newPage();

    await guest.goto('https://www.saucedemo.com/');
    await expect(guest.getByRole('button', { name: 'Login' })).toBeVisible();

    await buyerContext.close();
    await guestContext.close();
});

/**
 * Respuestas: 
 * 
 * 1. Por que se creo un Context aparte para cada test, en uno se hace el login y se agrega el producto al carrito, 
 * en el otro context solo validamos el botón, y viendo la ejecución con UI veo como se abren dos navegadores diferentes.
 * 
 * 2. No ve el badge 1, se abre una nueva pagina pero en blanco y no puede ir a la web
 */