import { test, expect } from '@playwright/test';

test('Validate login elements are visible', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });

  /**
   * Respuestas: 
   * 1. El elemento sigue teniendo el mismo nombre visible entonces debe usar getByLabel.
   * 2. Filtro el producto que contiene el texto Sauce Labs Backpack y, dentro de ese bloque, busco el botón Add to cart.
   * */