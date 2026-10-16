# 03-test-design/equivalence-partitioning.md

| Partición | Representante | Resultado real |
| :--- | :--- | :--- |
| Datos válidos (Todos los campos obligatorios llenos) | First Name: "John", Last Name: "Doe", Zip/Postal Code: "12345" | El sistema avanza a la pantalla "Checkout: Overview". |
| Datos inválidos (Al menos un campo obligatorio vacío) | First Name: "", Last Name: "Doe", Zip/Postal Code: "12345" | El sistema muestra el mensaje de error en rojo: "Error: First Name is required". |