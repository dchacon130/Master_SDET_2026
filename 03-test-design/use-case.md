# 03-test-design/use-case.md

## Flujo principal
- **Actor:** Cliente
- **Precondición:** No hay sesión iniciada
- **Objetivo:** Comprar la mochila (Sauce Labs Backpack) hasta el mensaje de confirmación.
- **Pasos:**
  1. Iniciar sesión con el usuario `standard_user` y contraseña `secret_sauce`.
  2. Hacer clic en "Add to cart" en el producto "Sauce Labs Backpack".
  3. Ingresar al carrito y hacer clic en "Checkout".
  4. Completar el formulario de envío (First Name, Last Name, Zip) y hacer clic en "Continue".
  5. Hacer clic en el botón "Finish" en la página de resumen.
- **Resultado real:** El flujo se completa correctamente y el sistema muestra la pantalla de confirmación con el mensaje "Thank you for your order!".

## Flujo de excepción
- **Actor:** Cliente
- **Precondición:** No hay sesión iniciada
- **Objetivo:** Comprar la mochila (Sauce Labs Backpack) hasta el mensaje de confirmación.
- **Pasos:**
  1. Intentar iniciar sesión con el usuario `locked_out_user` y contraseña `secret_sauce`.
- **Resultado real:** El flujo se detiene en la pantalla de inicio de sesión (paso 1). El sistema bloquea el acceso, los campos se marcan con cruces rojas y aparece el mensaje de error: "Epic sadface: Sorry, this user has been locked out."