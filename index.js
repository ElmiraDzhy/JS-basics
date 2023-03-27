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
    this.rate = rate;
    this.days = days;
  }

  getSalary(){
    return this.rate*this.days;
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

const userName = ['Kirill', 'Monky', 'Bob', 'Fill'];
const surname = ['Smith', 'Test', 'Foll', 'Grey'];

const users = [];
const workers = [];

for(let i = 0; i < userName.length; i++){   
    users.push(new User(userName[i], surname[i]));
}

for(let i = 0; i < userName.length; i++){   
  workers.push(new Worker(userName[i], 4, 5));
}

console.log(users);
console.log(workers);

const car = new Car('Toyota Country', 260, 80);
console.log(car.accelerate(100));
console.log(car.accelerate(100));
console.log(car.accelerate(100));
console.log(car.deaccelerate(100));
console.log(car.deaccelerate(80));
console.log(car.stop());


