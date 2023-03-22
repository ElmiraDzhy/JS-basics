'use strict';

// Array prototype methods

const arr = [0,1,2,3,4,5,6,7,8];

//concat, fill, filter, flat , includes, join, pop, 
//pysh, reduse, reverse, shift, slice, unshift
//-------------------------------------------------------

//PUSH - add one or more elements 
//at the end of the array, return length

arr.push(9);
console.log(arr);
arr.push(10,11,12);
console.log(arr);


//UNSHIFT - add one or more elements 
//at the start of the array, return length

arr.unshift(-1);
console.log(arr);


//SHIFT - delete first element of the array
//return deleted element value

arr.shift();
console.log(arr);

//POP - delete last element of the array
//retern deleted element value

arr.pop();
console.log(arr);

//CONCAT - return new array that created from arrays from parameters
//dont change old arrays

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concatArr = arr1.concat(arr2);
console.log(concatArr);
const newArr = arr1.concat(1,2,3,4,5);
console.log(newArr);

//FILL -  method changes all elements in an array to a static value

const emptyArr = new Array(10);
console.log(emptyArr);
emptyArr.fill(null);
console.log(emptyArr);


//INCLUDES - check if this value is in the array 
// return true or false

console.log(arr.includes(4));

//JOIN - return string from array 
//can separate

console.log(arr.join(' '));

//REVERSE - revert and change array and return it

console.log(arr.reverse());

//SLICE - return new array that contain copy of part of old array

console.log(arr.slice(4, 10)); //from 4 index till 10

//SPLICE - change the array, adding or deleting elements of the array
//return array with deleted elements

arr.splice(1,0,50) // между 1 и 2 вставить 50
console.log(arr);




