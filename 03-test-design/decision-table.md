# 03-test-design/decision-table.md

| Campo | R1 | R2 | R3 |
| :--- | :--- | :--- | :--- |
| **First Name** | sí | sí | no |
| **Last Name** | no | sí | no |
| **Zip** | sí | no | no |
| **Resultado esperado** | Mostrar un error indicando que falta el apellido. | Mostrar un error indicando que falta el código postal. | Mostrar un error indicando que falta el nombre. |
| **Resultado real** | Muestra: "Error: Last Name is required" | Muestra: "Error: Postal Code is required" | Muestra: "Error: First Name is required" |