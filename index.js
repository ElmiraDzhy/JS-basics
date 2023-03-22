'use strict';

function getArithmeticMeanOf(array){
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
   sum += array[index];
  }

  return sum/array.length;
}

function sumAllEven(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index+=2) {
      sum+= array[index];
   }
  return sum;
}


const numbers = new Array(1, 60, 4, 8, 9, 70,100);

console.log(getArithmeticMeanOf(numbers));
console.log(sumAllEven(numbers));


