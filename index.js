'use strict';
const array = [1,2,3,4,5];

function doSmthWithArray(array){
  for (let index = 0; index < array.length; index++) {
    array[index] = addTwo(array[index]);
  }

  return array;
}

function addTwo(num){
  return num+2;
}

console.log(doSmthWithArray(array));



const objs = [{
  name: 'test0',
  lastname: 'test00',

}, {
  name: 'test1',
  lastname: 'test11',
  
}, {
  name: 'test2',
  lastname: 'test22',
  
}]

objs.forEach((user) => user.age = 21 );

