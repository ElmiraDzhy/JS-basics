'use strict';

// ERRORS
//  EXEPTIONS

// try ... catch

function pow(num, exp){
let result = num;

  if(typeof num !== 'number' && typeof exp !== 'number'){

    throw new TypeError('Arguments must be a number');
  }

  if(exp < 0){

    throw new RangeError(`Exponent can't be  lass then 0`);
  }


  if(exp === 1){
    return num;
  }
  
  for(let i = 1; i < exp; i++){
    result *= num;
  }

  return result;
}


try {
  pow(2, -1);
} catch (error) {
  console.log(error);
}