'use strict';


const cat2 = {
  name: 'barsik',
  age: 3,
  color: 'grey',
}
const cat3 = {
  name: 'gold',
  age: 2,
  color: 'black',
}
const cat4 = {
  name: 'mukr',
  age: 4,
  color: 'red',
}


function Cat(name, color, age){
  this.name = name;
  this.color = color;
  this.age = age;

  this.sayMeow = function(){
    return 'Meooooooooow';
  }
}

const blackCat = new Cat('Kitty', 3);

const cat = new Cat('mukr', 5, 'red');
