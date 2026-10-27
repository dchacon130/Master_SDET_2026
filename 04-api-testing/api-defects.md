El caso 1 sale un error de JSON: JSONError: Unexpected token 'I' at 1:1
Internal Server Error
Y en el test tambien: 
Couldn't evaluate the test script
JSONError:Unexpected token 'I' at 1:1
Internal Server Error
^
Respuesta 500

El caso 2 me trae todos los registros por que la variable bookingid esta vacia: 
GET https://restful-booker.herokuapp.com/booking/

Pero el test no paso 
respuesta 200