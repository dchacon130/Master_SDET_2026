import { Booking } from "./booking.ts";

const bookings = [
    new Booking("Diego Chacón", 3, false),
    new Booking("Juan Perez", 5, true)
];

function countPaidDeposits(bookings: Booking[]): number {
    return bookings.filter(booking => booking.isDepositPaid()).length;
}

console.log(countPaidDeposits(bookings));

/**
 * Respuesas: 
 * 
 * 1. Falat importar la clase de Booking. 
 * 2. Crear el objeto con el new.
 */