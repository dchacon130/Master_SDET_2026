export class Booking {
    firstName: string;
    nights: number;
    depositPaid: boolean;
    
    constructor(firstName: string, nights: number, depositPaid: boolean) {
        this.firstName = firstName;
        this.nights = nights;
        this.depositPaid = depositPaid;
    }
    isDepositPaid(): boolean {
        return this.depositPaid;
    }
}

/**
 * Linea de error: 05-typescript/booking.ts(12,9): error TS2322: Type 'string' is not assignable to type 'boolean'.
 * 
 * Respuestas: 
 * 1. Estaba en la llamada anterior. 
 * 2. el comando del check.
 */