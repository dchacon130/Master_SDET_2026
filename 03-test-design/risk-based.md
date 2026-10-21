# 03-test-design/risk-based.md

| Escenario | Probabilidad | Impacto | Riesgo | Orden |
| :--- | :--- | :--- | :--- | :--- |
| `error_user` no puede terminar la compra | Alta | Alto | Alto | 1 |
| `problem_user` ve la foto del perro en todos los productos | Alta | Medio | Medio | 2 |
| Se abre `checkout-complete.html` sin comprar | Baja | Alto | Medio | 3 |
| Ordenar el inventario de Name (A to Z) | Alta | Bajo | Bajo | 4 |

| Escenario | Probabilidad | Impacto | Riesgo | Orden |
| :--- | :--- | :--- | :--- | :--- |
| `error_user` no puede terminar la compra | 3 | 3 | 9 | 1 |
| `problem_user` ve la foto del perro en todos los productos | 3 | 2 | 6 | 2 |
| Se abre `checkout-complete.html` sin comprar | 1 | 3 | 3 | 3 |
| Ordenar el inventario de Name (A to Z) | 3 | 1 | 3 | 4 |