'use strict';

//HOMEWORK

/*
1. Створити функцію, що приймає масив з елементами різних типів даних і повертає масив, що складається тільки з числових елментів початкового масива

2. Даний масив з об'єктів користувачів, кожен об'єкт містить поле firstName, при чому в деяких об'єктах воно може бути пустим
const users = [
{firstName: 'John'},
{firstName: "},
{firstName: 'Jane'},
{firstName: undefined}
]

В об'єктах, де firstName пустий рядок або undefined замінити на "Anonym". Використовувати метод forEach

3. Даний масив [2, 3, 4, 5, 6, 7]. Створити новий масив, який складається з елементів даного, помножених на 5.

4. З масиву об'єктів юзерів отримати новий масив, який містить тільки юзерів, вік яких > 18. */

//1
 
const arr = [{
  name: 'test',
  age: 50,
}, 'str1', 25, 34, 56, 12, 'str2'];

const sortedArr = arr.filter( (element) => {
   return typeof element === 'number';
} )

console.log(sortedArr);

//2

const users = [
  {firstName: 'John'},
  {firstName: ''},
  {firstName: 'Jane'},
  {firstName: undefined}
  ]

users.forEach( (user) => {
  return user.firstName === '' || user.firstName === undefined ? user.firstName = 'Anonym' : true;
} );

console.log(users);

//3

const array3 = [2, 3, 4, 5, 6, 7];

const changedArr = array3.map( (num) => num*5 );
console.log(changedArr);


//4

const allUsers = [
  {
    name: 'test',
    age: 11,
  },
  {
    name: 'test',
    age: 31,
  },
  {
    name: 'test',
    age: 14,
  },
  {
    name: 'test',
    age: 21,
  },
  {
    name: 'test',
    age: 18,
  },
  {
    name: 'test',
    age: 17,
  },
]

const adultsUsers = allUsers.filter((user) => {
  return user.age >= 18;
});

console.log(adultsUsers);

