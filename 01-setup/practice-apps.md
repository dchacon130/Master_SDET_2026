# Practice Apps

Registro de las tres aplicaciones públicas del laboratorio de QA. Cada una indica su URL base, el tipo de evidencia, segun el temario, el límite del entorno y una observación tomada del sitio en vivo.

## Resumen

| Aplicación | URL base | Tipo | Que cubre | Temario |
| :--- | :--- | :---: | :--- | :--- |
| **Sauce Demo** | https://www.saucedemo.com/ | UI | Login, Inventory (Products), Cart, Checkout, Burger Menu | 02, 03, 06 y 07 |
| **ReqRes** | https://reqres.in/ | API | Users, Resources, Register, Login, Delayed Response | 04 |
| **Restful Booker** | https://restful-booker.herokuapp.com/ | API | Auth, Booking, Ping | 04 y 14 |

## Límites del entorno

* **Sauce Demo:** entorno estático de simulación frontend. Los datos no persisten en una base de datos real.
* **ReqRes:** API pública simulada. Las operaciones `POST`, `PUT` y `DELETE` simulan éxito, pero no persisten datos reales.
* **Restful Booker:** API pública compartida. Las reservas registradas pueden reiniciarse de forma periódica.

## Qué vi hoy

### Sauce Demo

La pantalla de login muestra como usuario válido `standard_user`. La contraseña para todos los usuarios es `secret_sauce`.

### ReqRes

La URL base de la API es https://reqres.in/api. La documentación indica "No API key required" y utiliza el encabezado `Content-Type: application/json` para peticiones con payload.

### Restful Booker

La documentación está en https://restful-booker.herokuapp.com/apidoc/index.html. El endpoint observado es `POST /booking` (CreateBooking): crea una reserva nueva en la API.
