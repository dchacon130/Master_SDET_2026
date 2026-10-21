# 03-test-design/exploratory.md

## Sesión de Pruebas Exploratorias

- **Misión:** Investigar el flujo de checkout de Sauce Demo utilizando las credenciales `error_user` / `secret_sauce`.
- **Tiempo máximo:** 15 minutos.
- **Qué probaste:**
  1. Iniciar sesión correctamente con `error_user`.
  2. Agregar un producto (Sauce Labs Backpack) al carrito desde el inventario.
  3. Navegar a la vista del carrito y hacer clic en el botón "Checkout".
  4. Llenar los campos "First Name", "Last Name" y "Zip/Postal Code" en el formulario de envío.
  5. Hacer clic en el botón "Continue".
- **Qué encontraste:** Un comportamiento inesperado (defecto). el campo Last Name no se completa, se envia vacio pero puedo hacer clic en "Continue", el sistema avanza y llega hasta Checkout: Overview pero no continua al dar click en Finish. Esto bloquea completamente al usuario e impide continuar con la compra.
- **Qué quedó sin mirar:** la pantalla final de éxito ("Finish"), ya que el defecto bloqueó el progreso.