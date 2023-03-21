'use strict';


function Cat(name, color, age){
  this.name = name;
  this.color = color;
  this.age = age;

  this.sayMeow = function(){
    return 'Meooooooooow';
  }
}


const cat = new Cat('murzik', 5, 'red');
cat.askForFood = function(){
  return `${this.name} wanna eat!!!`;
}

function User(firstName, lastName, age, email){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;


  this.sayHello = function(){
    return `${this.firstName} say hello!`;
  }

  this.checkMail = function(){
    return this.email;
  }

}

const user = new User('John', "Doe", 23, 'john.mail.com');
const user2 = new User('Jane', "Doe", 22, 'jane.mail.com');

function Car (brand, maxSpeed, speed) {
  this.brand = brand;
  this.maxSpeed = maxSpeed;
  this.speed = speed;

  this.accelerate = function(num){
    if(this.speed+num <= this.maxSpeed){
      this.speed+=num ;
    }else{
      this.speed = this.maxSpeed;
    }
      return  this.speed;
  }

  this.deaccelerate = function(num){
    if(this.speed-num >= 0 ){
      this.speed-=num;
    }else{
      this.speed = 0;
    }
      return  this.speed;
  }


  this.stop = function(){
    this.speed = 0;
    return this.speed;
  }
}

const car = new Car('Toyota', 200, 60 );
console.log(`car.speed = ${car.speed}`);
console.log(`car.accelerate(40) = ${car.accelerate(40)}`);
console.log(`car.accelerate(20) = ${car.accelerate(20)}`);
console.log(`car.stop() = ${car.stop()}`);