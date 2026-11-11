describe('Sauce Demo login', () => {
    it('stops the locked out user', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('locked_out_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        await expect($('[data-test="error"]')).toHaveText(
            'Epic sadface: Sorry, this user has been locked out.'
        );
    });
});

/**
 * 1. Se rompe $('#login-button'), porque depende del id. getByRole con el nombre Login sigue encontrando el botón.
 * 2. Lo intenta ejecutar Playwright, porque solo corre archivos .spec.ts. browser y $ no existen en ese runner.
 */