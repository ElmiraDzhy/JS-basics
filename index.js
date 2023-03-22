'use strict';


const userPhone1 = 380986754322;
const userPhone2 = 380986764531;
const userPhone3 = 380986789002;
const userPhone4 = 380988674932;
const userPhone5 = 380976589002;
const userPhone6 = 380678089002;
const userPhone7 = 380986700002;
const userPhone8 = 380986234002;


const usersPhones = [userPhone1, userPhone2, userPhone3, userPhone4, userPhone5,userPhone6,userPhone7,userPhone8];


for (let index = 0; index < usersPhones.length; index++) {
  console.log(`${index}: ${usersPhones[index]}`);
}


const numbers = new Array(1,4,8,9);

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
  
}
console.log(sum);