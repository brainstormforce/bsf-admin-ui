export class log {
    static success(message: string) {
        console.log(`%c ${message}`, 'color: green');
    }
    static error(message: string) {
        console.log(`%c ${message}`, 'color: red');
    }
    static warning(message: string) {
        console.log(`%c ${message}`, 'color: orange');
    }
}

// Create and export new function which perform addition of two numbers and return the result.
export function add(a: number, b: number): string {
    // return a + b;
    return `addition ${a} + ${b} = ${a + b}`;
}

// Create and export new function which perform subtraction of two numbers and return the result.
export function subtract(a: number, b: number): string {
    return `Result of the t Somethinkjiu ${a} - ${b} = ${a - b}`;
}