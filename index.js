'use strict';

function myPow (number, power) {
    let result = 1;
    for(let  i = 0; i < power; i++){
        result *= number;
    }
    return result;
}

function factorial(number){
    let result = 1;
    if(number === 0 || number === 1){
        return 1;
    }
    if(number < 0){
        return 'Error';
    }
    for(let i = 1; i <= number; i++){
        result *= i;
    }
    return result;

}
