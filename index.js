'use strict';

function MyArray (){

    this.length = 0;
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



}

const myarr = new MyArray();
