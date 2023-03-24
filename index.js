'use strict';

//PROTOTYPES

function Accumulator () {
  this.value = 0;
    for (let index = 0; index < arguments.length; index++) {
      this.value += arguments[index];
      
    }

}
function AccumulatorProto(){
  this.add = function(){
    for(let i = 0; i < arguments.length; i++){
      this.value += arguments[i];
    }
    return this.value;
  }
}

Accumulator.prototype = new AccumulatorProto();

const accumulator = new Accumulator(2,3,4,5,6);

