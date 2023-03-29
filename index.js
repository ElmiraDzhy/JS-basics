'use strict';

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


function sumAll(...args){
  let sum = 0;
  for(let  i = 0; i < args.length; i++){

    if(Array.isArray(args[i])){
      for(let j = 0; j < args[i].length; j++){
          sum += args[i][j];
      }
      i++; 
    }

    sum += args[i];
  }

  return sum;
}


const arr = [1,2,3,4,5,6,6,5,2];

console.log(sumAll(arr,6,7));

console.log([1,3,5,7, ...[2,4,6,8]]);