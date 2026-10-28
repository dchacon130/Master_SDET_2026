async function fetchFirstName(): Promise<string> {
    const response = await fetch('https://reqres.in/api/users/2');
    const body = await response.json();
    return body.data.first_name;
}

console.log(await fetchFirstName());
// Janet


/**
 * Preguntas: 
 * 
 * 1. Se imprime una Promise (en estado pending). Al quitar el await, la ejecución no espera la respuesta HTTP. (Nota: el script fallaría en la línea siguiente, porque una Promesa no tiene el método .json()).
 * 2. Le falta el await (ej. console.log(await fetchFirstName());) o encadenar un .then(). Como fetchFirstName está declarada como async, siempre retorna una Promesa de forma síncrona; necesitas decirle a JavaScript que espere a que esa Promesa se resuelva para obtener el string.
 */