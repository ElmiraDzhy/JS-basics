'use strict';

const user = {
    name: 'Vasya',
    lastName: 'Ivanov',
    age: 20,
    
}

const user1 = {
    name: 'Petya',
    lastName: 'Ivanov',
    age: 15,
}


function fun (obj){
    console.log(`${obj.name} ${obj.lastName} say hello`);
}

fun(user1);
fun(user);


