import { LoginPage } from "./login.page";
import { expect } from '@playwright/test';
import { test } from "./login.fixture";

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

test.describe('Haciendo uso de fixture', () => {
    test('Login correcto hasta inventory usando fixture', async ({ loginPage, page }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory\.html/);
    });

    test('Login con locked user', async ({ loginPage, page }) => {
        await loginPage.login('locked_out_user', 'secret_sauce');
        await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
    });
})

/**
 * Respuestas: 
 * 1. login() no afirma el Epic sadface. ¿Por qué la afirmación se queda en el spec?
 * R: login() lo usan las dos pruebas y cada una espera un resultado distinto. Si login() afirmara el Epic sadface, la prueba de standard_user fallaría.
 * 2. Cambias el localizador del botón dentro de LoginPage. ¿Cuántos spec tienes que abrir para que las dos pruebas usen el botón nuevo?
 * R: ninguna, con cambiar el localizador en la clase, se cambia para todos los que usan ese localizador.
 * 
 * Respuestas de fixture: 
 * 1. No carga la pagina por que no se ha llamado open ni se a creado la conexión a la clase LoginPage
 * 2. No comparte las cookies por que se crea un page separado para cada prueba
 * 3. Se genera un error de duplicados.
 */