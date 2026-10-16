# 02-manual-testing/bug-lifecycle.md

**Título:** Las imágenes de todos los productos son incorrectas en la página de inventario
**Severidad:** Major
**Estado inicial:** New

**Pasos:**

1. Navegar a la página de inicio de sesión de Sauce Demo (https://www.saucedemo.com/).
2. Iniciar sesión ingresando `problem_user` en el campo de usuario y `secret_sauce` en el de contraseña.
3. Hacer clic en el botón "Login".
4. Observar las imágenes de los artículos cargados en la página de inventario (`/inventory.html`).

**Resultado esperado:**
Cada artículo en el inventario debe mostrar su imagen descriptiva correspondiente (por ejemplo, la mochila para el "Sauce Labs Backpack", la camiseta para la "Sauce Labs Bolt T-Shirt", etc.).

**Resultado real:**
Todos los artículos del inventario muestran exactamente la misma imagen incorrecta (la foto de un perro).

**Siguiente estado:** Fixed
En Retest repito los cuatro pasos. Si cada producto tiene su imagen, lo paso a Closed. Si sigue el perro, lo paso a Reopened.