/*export class MainOperation {
    n: number;
    numPrimos: number[] = [];
    numNaturales: number[] = [];
    currentNumber: number = 0;
    

    constructor(n: number) {
        this.n = n;
    }

evaluation(){
    if(!this.numNaturales || this.numNaturales.length === 0) {
        console.log('No hay numeros naturales');
        return;
    }

    this.numPrimos = [];

    for(let i = 0; i < this.numNaturales.length; i++){
        const num = this.numNaturales[i];
        if(this.esPrimo(num)){
            this.numPrimos.push(num);
        }
    }

    this.currentNumber = this.numNaturales[this.numNaturales.length - 1] + 1;
    
    while(this.numPrimos.length < this.n){
        if(this.esPrimo(this.currentNumber)){
            this.numPrimos.push(this.currentNumber);
        }
        this.currentNumber++;
    }

    return this.numPrimos[this.numPrimos.length - 1];
 }

 esPrimo(num: number){
    if(num < 2) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

esFibonacci(num: number){
    if(Number.isInteger(Math.sqrt(5*(num ** 2) + 4))){
        return true;
    }
    return false;
}

 isTriangular(num: number): number{
        if(num < 2){
            return 0;
        }
        const triangularNumber = (num + 1) * (num + 2) / 2;

        return triangularNumber;
    }
}*/

export class MainOperation {
    n: number;
    
    constructor(n: number) {
        this.n = n;
    }

evaluation(){
    let currentNumber: number = 0;
    let count: number = 0;
    let lastNumber: number = 0;
    
    while(count < this.n){
        const result = this.PrimosOperation(currentNumber);
        if(result){
            count++;
            lastNumber = currentNumber;
        }
        currentNumber++;
    }
    return lastNumber;
 }

PrimosOperation(num: number){
    
    if(num === 2) return true;
    if(num < 2 || num % 2 === 0) return false;

    const newNumLimit = Math.floor(Math.sqrt(num));
    for(let i = 3; i <= newNumLimit; i += 2){
        if(num % i === 0){
            return false;
        }
    }
    return true;

}

FibonacciOperation(num: number){
    let a: number = 1;
    let b: number = 1;
    if(num === 1 || num === 2){
        return 1;
    }

    for(let i = 3; i <= num; i++){
        const c: number = a + b;
        a = b;
        b = c;
    }
    return b;
}

 TriangularOperation(num: number){
    if(num < 1){
        return 0;
    }
    const triangularNumber = (num + 1) * (num + 2) / 2;

    return triangularNumber;
}

}

export default function operationResult(num: number){
    const newOperation = new MainOperation(num);
    const primoNumber = newOperation.evaluation();
    const fibonacciNumber = newOperation.FibonacciOperation(num);
    const triangularNumber = newOperation.TriangularOperation(num);
    const result = -3 * primoNumber - fibonacciNumber + 5 * triangularNumber;
    return {primoNumber, fibonacciNumber, triangularNumber, result};
}



    

