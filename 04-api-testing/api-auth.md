1. auth: Estado 200 OK
{
    "token": "token recibido"
}

2. Post Booking: Estado 200 OK
{
    "bookingid": 4312,
    "booking": {
        "firstname": "Diego",
        "lastname": "QA",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2026-11-01",
            "checkout": "2026-11-05"
        },
        "additionalneeds": "Breakfast"
    }
}

3. Delete booking id 4312: estado 403 forbidden por que no se enviaron credenciales y no borra reserva

3.1.  Delete Booking id 4312:  Estado 201 Created
Created

En la pestaña de Authorization use Basic Auth, y ahí el username y el password como una variable de entorno. 

