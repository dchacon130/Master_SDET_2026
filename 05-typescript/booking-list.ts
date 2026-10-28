interface Booking {
    firstName: string;
    nights: number;
    depositPaid: boolean;
}

const bookings: Booking[] = [
    {
        firstName: "Diego Chacón",
        nights: 3,
        depositPaid: false,
    }, 
    {
        firstName: "Juan Perez",
        nights: 5,
        depositPaid: true,
    }
];

function countPaidDeposits(bookings: Booking[]): number {
    return bookings.filter(booking => booking.depositPaid).length;
}

console.log(countPaidDeposits(bookings));

/**
 * Respuestas: 
 * 
 * 1. * 1. El error está en el campo nights del objeto. "3" es texto y la interfaz pide number.
 * 2. Cambio la llamada. El parámetro sigue siendo Booking[]. Envío un arreglo con una sola reserva
 * 
 */