'use strict';

const car = {
    brand: 'Audi',
    type: 'sedan',
    volume: 1.6,
    capasity: 5,


}

const empty = {


}


function isObjectEmpty(obj){

    for (const key in obj){
        return false;
    }

    return true;
}

console.log(isObjectEmpty(empty));
console.log(isObjectEmpty(car));

//

function sumKeys (obj) {
  let result = 0;
  for(const key in obj){
    if(!isNaN(key)){
    result+= Number(key);
    }
  }
  return result;
}

const obj = {
  1: 'test',
  2: 'test',
  val: 'test',
  4: 'test',
}

console.log(sumKeys(obj));