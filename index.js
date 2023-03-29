'use strict';


const array = [2,3,4,5,6];
const [, , , fourthElem] = array;


//


const cat = {
  name: 'Barsik',
  girlfriend: {
    name: 'Lola',
    childs: [{
        name: 'child1',
    },
  {
    name: 'child2',
    
  },
  {
    name: 'child3',
    
  }]
   
  }
}

const{
girlfriend: {
  childs:[
    {name: firstChild},
    {name: secondChild}
  ]
}
} = cat

console.log(firstChild, secondChild);


const monitor = {
  sizes: {

    height: {
      value: 20,
      scale: 'sm',
    },

    width: {
      value: 20,
      scale: 'sm',
    },

  },

  brightness: '2000lm',

  color: 'black',

  manufacturer: {
    name: 'Sony',

    address: {
      city: 'London',
      street: 'Baker',
      house: 27,
    }
    ,
  },

}



function getDiagonal ( {sizes: {
  height: {value: heightValue },
  width: {value: widthValue}
  },

manufacturer: {
  address: {
    city
  }
}
}){
    return Math.sqrt((heightValue * heightValue) + (widthValue * widthValue));
}


function getUserHello({name}){
  return `Hello ${name}`;
}

const user = {
  name: 'test',
  age: 12,
}

console.log(getUserHello(user));


function getSumOfProperties(obj){
  return obj.prop1 + obj.prop2 + obj.prop3;
}

console.log(getSumOfProperties({
  prop1: 2,
  prop2: 3,
  prop3: 5,
}));



function getSumOfFirstThreeElem([first,second,third, ...restElem]){
  console.log(restElem);
  return first + second + third;
}

const arr = [1,2,3,4,5,6];

console.log(getSumOfFirstThreeElem(arr));


function getArraySum ([firstElem, ...restElems]){
  return firstElem + restElems[restElems.length-1];
}