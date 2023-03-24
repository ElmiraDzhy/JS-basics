'use strict';

function MyArray (){

    this.length = 0;

    for(let i = 0; i < arguments.length; i++){
      this[this.length] = arguments[i];
      this.length++;

    }


    this.push = function(value){
        this[this.length] = value;
        this.length++;
    }

    this.pop = function(value) {
      let result = this[this.length-1];
      delete this[this.length-1];
      this.length--;
      return result;
    }

    this.forEach = function(callback){
        for(let i = 0; i < this.length; i++){
           callback(this[i]);

        }
    }


    this.filter = function(callback){
      const newarr = new MyArray();
      for(let i = 0; i < this.length; i++){
        callback(this[i]) ? newarr.push(this[i]) : false;

      }
      return newarr;
    }


    this.reverse = function(){
      for (let i = this.length-1; i > 0; i--) {
        let last = this[i];
        let first = this[(this.length-1) - i];
        this[(this.length-1) - i] = last;
        this[i] = first;
      }
      //return this;
    }

}

const myarr = new MyArray(2,3,4,5,6);
myarr.reverse();
console.log(myarr);

function someFunc(){
let biggestNum = arguments[0]
  for (let i =0; i < arguments.length; i++) {
    if(arguments[i] > biggestNum){
      biggestNum = arguments[i];
    }
  }

  return biggestNum;
}

console.log(someFunc(1,2,3,4,5,6,7,8,644,56));