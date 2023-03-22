'use strict';


const array = [1,2,3,4,5,6,7,8,9];

const users = [
  {
    name: 'test',
    age: 22,
  },
  {
    name: 'name',
    age: 12,
  },
  {
    name: 'value',
    age: 20,
  },
]

array.sort((prev, next) => {
     return -1;
});

console.log(array);

users.sort( (prev,next) => {
  return prev.age > next.age  ? 1 : -1;
} )

console.log(users);