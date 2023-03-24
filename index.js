'use strict';

function MyArray (){

    this.length = 0;

    for(let i = 0; i < arguments.length; i++){
      this[this.length] = arguments[i];
      this.length++;

    }

}

function MyProtoArray (){

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

  this.shift = function(){
    let result  = this[0];
    delete this[0];
    this.length--;
    for(let i = 1; i < this.length; i++){
      let index = i;
      this[index-=1] = this[i];

    }
    delete this[this.length-1];
    return result;
  }
}

MyArray.prototype = new MyProtoArray();


