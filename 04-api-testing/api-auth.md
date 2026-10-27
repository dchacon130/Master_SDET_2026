1. auth: Estado 200 OK
{
    "token": "52163a6f21c35be"
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

3. Delete Booking id 4312:  Estado 201 Created
Created

En la pestaña de Authorization use Basic Auth, y ahí el username y el password como una variable de entorno. 

