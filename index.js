'use strict';

//вычисляемые свойства // computed properties

const user = {
    firstName: 'John',
    lastName: 'Smith',
    'favourite Color': 'red',
    2: 'value',
}


let property = 'firstName'; 

console.log(user['favourite Color']);
console.log(user[2]);
console.log(user[property]);
// console.log(user[prompt()]); - bad practice
