'use strict';


//homework

function multiplyTable (num) {
    let result = 1;
    for(let i = 1; i <= num; i++){
        result = 2 * i;
        console.log(`2 * ${i} = ${result}`)
    }
}


//

const user = {
    name: 'Name',
    lastName: 'LastName',
    age: 28,
}
const user1 = {
    name: 'Name1',
    lastName: 'LastName1',
    age: 23,
}

const user2 = {
    name: 'Name2',
    lastName: 'LastName2',
    age: 13,
}


function getBanned (obj) {
    obj.banned = true;
    return obj.banned;
    
}

console.log(getBanned(user));
console.log(getBanned(user1));
console.log(getBanned(user2));


