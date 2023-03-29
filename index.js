'use strict';

const sumAll = (a,b,c) => a + b + c;

function sumAllArgs (){
  // let sum = 0;
  // for (let index = 0; index < arguments.length; index++) {
  //   sum += arguments[index];
  // }


  const argArr = Array.from(arguments);
  // argArr.map((value) => {
  //   sum+= value;
  // });

  return argArr.reduce((accumulator, currentValue,)=> accumulator + currentValue, 0);
   
}



class MyArray{
  constructor(){
    this.length = 0;

    for(let i = 0; i < arguments.length; i++){
      this[this.length] = arguments[i];
      this.length++;
  
    }
  }
 

  push = function(value){
    this[this.length] = value;
    this.length++;
  }

  pop = function(value) {
    let result = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return result;
  }

  forEach = function(callback){
      for(let i = 0; i < this.length; i++){
        callback(this[i]);

      }
  }

  filter = function(callback){
    const newarr = new MyArray();
    for(let i = 0; i < this.length; i++){
      callback(this[i]) ? newarr.push(this[i]) : false;

    }
    return newarr;
  }

  reverse = function(){
    for (let i = this.length-1; i > 0; i--) {
      let last = this[i];
      let first = this[(this.length-1) - i];
      this[(this.length-1) - i] = last;
      this[i] = first;
    }
  }

  reduce (fn, initialValue){
    let accumulator = initialValue;
    for(let i = 0; i < this.length; i++){
      accumulator = fn(accumulator, this[i], i);
    }

    return accumulator;
  }


}

