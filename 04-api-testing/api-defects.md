El caso 1 sale un error de JSON: JSONError: Unexpected token 'I' at 1:1
Internal Server Error
Y en el test tambien: 
Couldn't evaluate the test script
JSONError:Unexpected token 'I' at 1:1
Internal Server Error
1. El 500 con body Internal Server Error es un defecto del producto: a un body sin firstname le corresponde un 400.
Respuesta 500

El caso 2 me trae todos los registros por que la variable bookingid esta vacia: 
GET https://restful-booker.herokuapp.com/booking/
El JSONError es otra capa, el script del test intentó leer JSON sobre ese texto
Pero el test no paso 
respuesta 200