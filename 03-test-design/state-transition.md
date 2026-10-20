# 03-test-design/state-transition.md

| Estado actual | Evento | Estado siguiente | ¿Transición válida? |
| :--- | :--- | :--- | :--- |
| Inventario | Add to cart de Sauce Labs Backpack | Inventario (el botón cambia a "Remove" y el ícono del carrito suma 1) | Sí |
| Carrito | Checkout | Datos de envío (Checkout: Your Information) | Sí |
| Datos de envío | Continue, con los tres campos llenos | Resumen de compra (Checkout: Overview) | Sí |
| Inventario, sin comprar | Abrir directo https://www.saucedemo.com/checkout-complete.html | Página de éxito (Checkout: Complete) | Sí (el sistema lo permite, revelando un defecto de validación de flujo) |