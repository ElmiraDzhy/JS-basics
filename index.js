'use strict';


const numbers = new Array(1,60,4,8,9,70);

let biggestNum = 0;
for (let index = 0; index < numbers.length; index++) {
  if(numbers[index] > biggestNum){
    biggestNum = numbers[index];
  }

}
console.log(biggestNum);