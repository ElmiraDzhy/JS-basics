'use strict';


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

const array = [1,2,3,4];

function addTwo(num){
  return num+2;
}


console.log(array.map(addTwo));