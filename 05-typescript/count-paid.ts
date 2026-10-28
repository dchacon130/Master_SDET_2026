import { Booking } from "./booking";

const booking1 = new Booking("Diego Chacón", 3, false);
const booking2 = new Booking("Juan Perez", 5, true);

console.log(booking1.isDepositPaid());
console.log(booking2.isDepositPaid());

/**
 * Respuesas: 
 * 
 * 1. Falat importar la clase de Booking. 
 * 2. Crear el objeto con el new.
 */