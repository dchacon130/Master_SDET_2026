# 02-manual-testing/qa-vs-qc.md

## 1. Objetivo
El objetivo es verificar que el usuario `standard_user` en la aplicación Sauce Demo pueda completar exitosamente el flujo de compra de un producto.

## 2. Fases del SDLC (Ciclo de Vida del Desarrollo de Software)

| Fase | Artefacto Concreto del Flujo de Compra |
| :--- | :--- |
| **Requisitos** | Historia de usuario documentada. **Resultado esperado:** Tras llenar los datos y confirmar, el sistema muestra el mensaje "Thank you for your order!". |
| **Diseño** | Mockups y diagramas de flujo de las pantallas del carrito, formulario de envío y resumen de compra. |
| **Desarrollo** | Código fuente (HTML/CSS/JS) y lógica del frontend que maneja el estado del carrito de compras. |
| **Pruebas** | Captura de pantalla del mensaje de éxito y log de red confirmando que no hay errores en la transacción. |
| **Despliegue** | El flujo de compra integrado y funcional está publicado y es accesible para cualquier usuario a través de la URL pública `saucedemo.com`. |
| **Mantenimiento** | Monitoreo de disponibilidad (uptime) asegurando que el sitio demo sigue en línea y el botón de agregar al carrito responde. |

## 3. Actividades: QA vs QC

| Actividad | QA o QC | Artefacto |
| :--- | :--- | :--- |
| Revisar los criterios de aceptación de la historia de usuario antes de programar. | QA | Documento de Requisitos / Ticket de Jira |
| Definir el plan y los estándares de pruebas para el módulo de compras. | QA | Plan de Pruebas |
| Ejecutar el caso de prueba de agregar un producto al carrito en Sauce Demo. | QC | Reporte de Ejecución de Pruebas |
| Registrar un defecto si el botón "Checkout" no responde. | QC | Reporte de Bug / Incidencia |

## 4. Comprobación en Vivo

- **Resultado esperado:** Al hacer clic en el botón "Checkout" dentro del carrito de compras, el sistema debe redirigir a la pantalla "Checkout: Your Information" mostrando los campos para nombre, apellido y código postal.
- **Pasos que ejecutaste:**
  1. Navegar a `saucedemo.com`.
  2. Iniciar sesión con las credenciales `standard_user` y `secret_sauce`.
  3. Hacer clic en el botón "Add to cart" del producto "Sauce Labs Backpack".
  4. Hacer clic en el ícono del carrito en la esquina superior derecha.
  5. Hacer clic en el botón "Checkout".
- **Resultado real:** El sistema redirige correctamente a la página "Checkout: Your Information" y los campos de formulario están visibles y habilitados.
- **Pregunta de QA previa a la ejecución:** ¿Qué comportamiento y mensaje de error debe mostrar el sistema si el usuario intenta hacer clic en "Checkout" teniendo el carrito completamente vacío?