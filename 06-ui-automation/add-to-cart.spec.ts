import { test, expect } from '@playwright/test';

test('Add to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name: 'Username' }).fill("standard_user");
    await page.getByRole('textbox', { name: 'Password' }).fill("secret_sauce");
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory\.html/);

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
  
  /**
   * Respuestas: 
   * 1. Ese wait lo hace playwright y la configuración que tiene en playwright.config.ts
   * 2. El botón cambia de nombre a Remove, y también se agrega un producto al icono del carrito. 
   */
  