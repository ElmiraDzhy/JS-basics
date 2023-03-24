'use strict';

//PROTOTYPES

function Cat (name){
  this.name = name;

}

function Dog (name){
  this.name = name;
}

function ProtoArray(type){
  this.type = type;
  this.sayMeow = function(){
    return `${this.name} say meeeeeooow`;
  }
}



Cat.prototype = new ProtoArray('cat');
Dog.prototype = new ProtoArray('dog');

const myCat = new Cat('Murzik');
const myDog = new Dog('Bob');