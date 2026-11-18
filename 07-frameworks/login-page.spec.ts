import { LoginPage } from "./login.page";
import { test, expect } from '@playwright/test';

test.describe('Testing POM en login de saucedemo', () => {
    test('Login correcto hasta inventory', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.open();
        await loginpage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory\.html/);
    });

    test('Login con locked user', async ({ page }) => {
        const loginpage = new LoginPage(page);
        await loginpage.open();
        await loginpage.login('locked_out_user', 'secret_sauce');
        await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
    });
});

/**
 * Respuestas: 
 * 1. login() no afirma el Epic sadface. ¿Por qué la afirmación se queda en el spec?
 * R: por que los resultados esperados siempre son en el spec
 * 2. Cambias el localizador del botón dentro de LoginPage. ¿Cuántos spec tienes que abrir para que las dos pruebas usen el botón nuevo?
 * R: ninguna, con cambiar el localizador en la clase, se cambia para todos los que usan ese localizador.
 */