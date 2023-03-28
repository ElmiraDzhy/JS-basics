'use strict';

const PI = 3.14;

// CLASSES

class Figure {
  constructor(type){
    this.type = type;
  }

  getArea(){
  }

}

class Triangle extends Figure{
  constructor(a, h){
    super('triangle');
    this.a = a;
    this.h = h;
  
  }

  set a(v){
    this._a = v;
  }

  get a(){
    return this._a;
  }

  set h(v){
    this._h = v;
  }

  get h(){
    return this._h;
  }



  //переопределение родительского метода - OVERRIDE
  getArea(){
    return (this.a*this.h)/2;
  }


}

class Square extends Figure{
  constructor(a){
    super('square');
    this.a = a; 
  }

  set a(v){
    this._a = v;
  }

  get a(){
    return this._a;
  }

  getArea(){
    return this.a * this.a;
  }

}

class Circle extends Figure{
  constructor(d){
    super('circle');
    this.d = d;

  }

  set d(v){
    this._d = v;
  }

  get d(){
    return this._d;
  }

  getArea(){
    return PI * this.d;
  }
}

const s = new Square(5);

//
/**

 * 
 * @param {Figure} obj 
 * @returns 
 */

function getFugureArea(obj){
  return obj.getArea();
}

/* 

полиморфизм - способность функции работать с обьектами разных 
типов если они связаны наследованием

Так само как она работает с экземпляром Figure. она может работать 
с любым наслдеником этоко класса

*/