## Swagger UI (Contrato)
- **Código de éxito:** 200
- **Tipo del body:** Array (lista de objetos)
- **Campos obligatorios de Pet:** `name` y `photoUrls`

## Postman (Ejecución)
- **URL:** GET `https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available`
- **Status:** 200 OK
- **Body:** Sí, es un array.
- **Primer objeto:** Sí, trae `name` y `photoUrls`.
- **Conclusión:** Coincide con el contrato.

## Respuestas
1. Al enviar el GET sin `?status=`, el servidor responde con un estado `200 OK` (normalmente devolviendo un array vacío o por defecto), ignorando que el parámetro es obligatorio. Por lo tanto, **el defecto es del producto**, ya que la implementación de la API no está respetando la validación del `400 Bad Request` que exige el contrato.
2. Conservas **`firstName`**. El resultado esperado de tu test siempre debe basarse en el contrato del API que estás probando en ese momento. Si este contrato dice `firstName`, ese es tu criterio de verdad, sin importar cómo se llamen los campos en otros sistemas como Booker.

## Respuestas Corregidas

1. Al enviar el GET sin `?status=`, el servidor responde con un estado `400 Bad Request` y el body indica `missing required query parameter status`. Por lo tanto, el status que recibes **cumple el 400 que el archivo ya escribió**. La implementación del producto respeta el contrato y maneja correctamente la validación del campo obligatorio, por lo que no hay defecto.