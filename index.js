'use strict';

//homework

function Worker (firstName, lastName, rate, days) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.rate = rate;
  this.days = days;
  

  this.getSalary = function(){
    if(this.rate < 0){
      this.rate = 0;
      return new RangeError('RATE CAN NOT BE LESS THAN 0');
    }
    if(this.days < 0){
      this.days = 0;
      return new RangeError('DAYS CAN NOT BE LESS THAN 0');

    }
    return this.rate*this.days;
  }
  
}

function Country (name, area, population) {
  this.name = name;
  this.area = area;
  this.population = population;

  this.populationDensity = function(){

    if(this.population < 0){
      this.population = 0;
      return new RangeError('POPULATION CAN NOT BE LESS THAN 0');
    }
    if(this.area < 0){
      this.area = 0;
      return new RangeError('AREA CAN NOT BE LESS THAN 0');

    }

    return this.population/this.area;
  }
}

const worker = new Worker('Name', 'Surname', 50, 12);
console.log(worker.getSalary());

const country = new Country('USA', 5000000, 10000);
console.log(country.populationDensity());
