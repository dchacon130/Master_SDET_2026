# 03-test-design/risk-based.md

| Escenario | Probabilidad | Impacto | Riesgo | Orden |
| :--- | :--- | :--- | :--- | :--- |
| `error_user` no puede terminar la compra | Alta | Alto | Alto | 1 |
| Se abre `checkout-complete.html` sin comprar | Baja | Alto | Medio | 2 |
| `problem_user` ve la foto del perro en todos los productos | Alta | Medio | Medio | 3 |
| Ordenar el inventario de Name (A to Z) | Alta | Bajo | Bajo | 4 |