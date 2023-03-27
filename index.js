'use strict';

//PROTOTYPES

const cat1 = {
  name: 'Murzik',
  age: 4,
}

const cat2 = {
  name: 'Barsik',
  age: 2,
}

const CatProto = {
 sayMeow: function(){
  return `${this.name} say meow`;
 },
}

cat1.__proto__ = CatProto;
cat2.__proto__ = CatProto;

console.log(cat1, cat2);