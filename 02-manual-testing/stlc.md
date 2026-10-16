# 02-manual-testing/stlc.md

## Fases del STLC (Ciclo de Vida de las Pruebas de Software)

| Fase | Qué produces en relación a Sauce Demo |
| :--- | :--- |
| **Análisis de requisitos** | Determinamos qué debe hacer el sistema, como que el flujo de checkout muestre un mensaje de éxito o que cada artículo tenga su imagen correspondiente. |
| **Planificación** | Definimos que probaremos el módulo de compras y la carga visual del inventario utilizando los datos de `standard_user` y `problem_user`. |
| **Diseño de casos** | Escribimos los pasos exactos y el resultado esperado para agregar la "Sauce Labs Backpack" al carrito y presionar "Checkout". |
| **Entorno** | Preparamos el ambiente asegurándonos de que la URL pública `saucedemo.com` está accesible para iniciar sesión con `problem_user` / `secret_sauce`. |
| **Ejecución** | Ejecutamos la prueba del inventario, anotamos que el resultado real es la foto de un perro, y registramos un defecto de severidad Major al no coincidir con lo esperado. |
| **Cierre** | Generamos un reporte resumiendo que el checkout fue probado, pero quedaron defectos pendientes como el bug de las imágenes incorrectas en el inventario. |