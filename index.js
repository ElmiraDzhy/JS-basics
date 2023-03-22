'use strict';


const array = [1,2,3,4,5,6,7,8,9];

const arrayEven = array.filter( (element) =>{
      return element%2 === 0;
} );

console.log(arrayEven);

