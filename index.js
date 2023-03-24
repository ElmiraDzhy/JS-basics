'use strict';

//PROTOTYPES

function User ( name, surname ){
  this.name = name;
  this.surname = surname;

}

function UserPrototype(){
  this.getFullName = function(){
    return `${this.name} ${this.surname}`;
  }

}

User.prototype = new UserPrototype();

const user = new User('Alan', 'Walker');
const user2 = new User('Ann', 'Smith');
