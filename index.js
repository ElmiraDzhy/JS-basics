'use strict';

const car = {
    brand: 'Audi',
    type: 'sedan',
    volume: 1.6,
    capasity: 5,


}

const car2 = {
    brand: 'Audi',
    type: 'sedan',
    volume: 1.6,
    capasity: 5,


}

for (const key in car){
    console.log(`${key}: ${car[key]}`);
}

function isObjectEquals(obj1, obj2){

    for (const key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        } 
    }
    return true;
}

console.log(isObjectEquals(car, car2));

