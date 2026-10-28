let firstName: string;
let nights: number;
let depositPaid: boolean;

function bookingSummary(firstName: string, nights: number, depositPaid: boolean): string {

    if (depositPaid) {
        return `Thank you ${firstName} for your ${nights} night stay. Your deposit has been processed.`;
    } else {
        return `Thank you ${firstName} for your ${nights} night stay. Your deposit has not been processed.`;
    }
    
}

console.log(bookingSummary("Diego Chacón", 3, false));
