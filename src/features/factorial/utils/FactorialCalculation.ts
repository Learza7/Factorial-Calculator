/***
* Iterative function for the Factorial
* (we assume that the factorial of a number < 1 is equal to 1)
* @param number a number
* @returns the factorial of the input number
*/
const FactorialCalculation = (number : number) : number => {
    /* To avoid useless calculation and app slow downs*/
    if (number > 999){
        return Infinity;
    }
    
    let result = 1;
    if (number <= 1){
        return 1;
    }
    else{
        for (let i = number; i > 1; i--){
            result *= i;
        }
        return result;
    }  
}

export default FactorialCalculation;