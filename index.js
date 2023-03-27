'use strict';

// CLASSES


class User{
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }

  getFullName = () => { 
    return `${this.name} ${this.surname}`;
  }
}

class Worker {
  constructor(name, rate, days){

    this.name = name;
    this.rate = rate; //setter
    this.days = days; //setter
  }



  set rate(value){
    if(typeof value !== 'number'){
          throw new TypeError('Rate must be a number');
    }
    if(value < 0) {
          throw new RangeError('Rate cant be less 0');
    } 
      this._rate = value;
  }

  get rate(){
      return this._rate;
  }


  set days(value){
    if(typeof value !== 'number'){
          throw new TypeError('Days must be a number');
    }
    if(value < 0) {
          throw new RangeError('Days cant be less 0');
    } 
      this._days = value;
  }

  get days(){
    return this._days;
  }

  getSalary(){
    return this.days*this.rate;
  }


}

class Car{
  constructor(brand, maxSpeed, currentSpeed = 0){
    this.brand = brand;
    this.maxSpeed = maxSpeed;
    this.speed = currentSpeed;
  }

  stop = () =>{
    this.speed = 0;
    return `Speed of ${this.brand} is ${this.speed}`;
  }

  accelerate = (v) =>{
    (this.speed + v <= this.maxSpeed) ?  this.speed += v :  this.speed = this.maxSpeed;
  
    return `Speed of ${this.brand} is ${this.speed}`;
  }

  deaccelerate = (v) => {
    (this.speed - v > 0) ?  this.speed -= v :  this.speed = 0;
  
    return `Speed of ${this.brand} is ${this.speed}`;
  }
}


const wrkr = new Worker('Matt', 7, 4);




