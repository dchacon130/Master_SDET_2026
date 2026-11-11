import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test('standard_user completa la compra', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
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
    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page.locator('[data-test="checkout"]')).toBeVisible();

    await page.locator('[data-test="checkout"]').click();

    await expect(page.getByPlaceholder('First Name')).toBeVisible();
    await expect(page.getByPlaceholder('Last Name')).toBeVisible();
    await expect(page.getByPlaceholder('Zip/Postal Code')).toBeVisible();

    await page.getByPlaceholder('First Name').fill('Diego');
    await page.getByPlaceholder('Last Name').fill('Chacon');
    await page.getByPlaceholder('Zip/Postal Code').fill('1100111');

    await page.locator('[data-test="continue"]').click();

    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    await page.locator('[data-test="finish"]').click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
});

test('locked_out_user no entra', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('locked_out_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});

/**
 * Respuestas: 
 * 1. sin el --project ejecuta hasta 6 veces. 
 * 2. No entraria nunca con locked out user, por que el loguin sería en el beforeEach.
 */