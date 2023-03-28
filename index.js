'use strict';

// CLASSES


class Monitor{
  constructor(diagonal, matrix, brand, color){
      this.diagonal = diagonal;
      this.matrix = matrix;
      this.brand = brand;
      this.color = color;
  }


  on(){
    return `${this.brand} is on`
  }

  off(){
    return `${this.brand} is off`
  }

  
}

class Animal {
  constructor(name, legs, type){
    this.name = name; //this is setter!
    this.legs = legs;
    this.type = type;
  }

  set name(value){
    if(typeof value !== 'string'){
      throw new TypeError('Name must be a string')
    }
    this._name = value;

  }

  get name(){
    return this._name;
  }

  saySomth(){
    return `${this._name}making noise`;
  }

  eat(){
    return `${this._name} eating`
  }
}

class Dog  extends Animal{
  constructor(name, legs, type, color){
    super(name, legs, type);  
    this.color = color;  
  }

  run(){
    return `${this._name} is running`;
  }
}




