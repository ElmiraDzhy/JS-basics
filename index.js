'use strict';

let cat = {
    color: 'grey',
    weight: 3,
    sex: 'mail',
    breed: 'scottish',
    name: 'Dimok',
    insolenceLevel: 4,

    sayMeow: function(){
        console.log('meooooow');
    },
    sleep: function(){
        console.log('Z-z-z-z..... Im sleeping');
    }
}

function sayHello(obj){
    obj.age = 18;
}

let obj = {
    name: 'test',
    hello: function(){
        console.log('test hello');
    },
}


sayHello(obj);

function sum(a, b){
    return a+b;
}


function consoleResult(arg1, arg2, fun){
    console.log( fun(arg1, arg2));
}


console.log(consoleResult(3, 4, sum));