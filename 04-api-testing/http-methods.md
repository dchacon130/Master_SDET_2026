# 04-api-testing/http-methods.md

| Método | URL | Estado | Frase |
| :--- | :--- | :--- | :--- |
| GET | https://reqres.in/api/users/2 | 200 OK | Retorna información del usuario 2 en el Body |
| GET | https://reqres.in/api/users/23 | 404 Not Found | En el body no retorna información |
| POST | https://reqres.in/api/users | 201 Created | Retorna la información del usuario creado recientemente con id 502 |
| DELETE | https://reqres.in/api/users/2 | 204 No Content | Elimina el usuario 2|