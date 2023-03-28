'use strict';

// CLASSES


class User {
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
    this.isBanned = false;
  }

}


class Admin extends User{
  constructor(name, surname, position){
   super(name, surname);
   this.isBanned = false;
   this.position = 'admin;'
  }

}



class Moderator extends Admin{
  constructor(name, surname, position){
    super(name, surname);
    this.isBanned = false;
    this.position = 'moderator';
   

  }

  getBan(user){
    user.isBanned = !user.isBanned;
  }

}


const user = new User('User', 'Test');
const admin = new Admin('Admin', 'Test', 'admin');
const modrt = new Moderator('Moderator','Test', 'moderator');


class Squirell {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }


  eat(){
    return `${this.name} eating`

  }

  climb(){
    return `${this.name} is on the tree`;
  }
}


class FlyingSquirell extends Squirell{
  constructor(name, color){
    super(name, color);
    
  }

  fly(){
    return `${this.name} is flying`
  }


}

class FairySquirell extends FlyingSquirell{
  constructor(name, color, songs=[]){
    super(name, color);
    this.songs = songs;
  }

  dance(){
    return `${this.name} dancing`;
      
  }

  singASong(index){
    return `${this.name} sing a ${this.songs[index]}`;

  }

  checkIsSong(name){
    return this.songs.includes(name);
  }
}


const sq = new FairySquirell('test', 'red', ['song1', 'song2', 'song3']);