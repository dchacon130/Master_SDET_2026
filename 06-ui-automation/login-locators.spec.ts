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
   * 2. Para seleccionar uno de los cuadros usando el botón de add to cart, usaría la función filter. 
   */