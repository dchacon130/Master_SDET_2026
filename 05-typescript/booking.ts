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