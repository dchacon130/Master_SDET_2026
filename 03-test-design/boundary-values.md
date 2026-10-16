# 03-test-design/boundary-values.md

| Caracteres | Valor | ¿Límite? | Resultado real |
| :--- | :--- | :--- | :--- |
| 0 | vacío | Sí, mínimo inválido | El sistema muestra el mensaje de error: "Error: First Name is required" |
| 1 | "A" | Sí, mínimo válido | El sistema avanza a la pantalla "Checkout: Overview" |
| 10 y 11 | no aplica | No hay máximo publicado | no se ejecuta |