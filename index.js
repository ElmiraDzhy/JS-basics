'use strict';

const userPlan = {
    Mon: 'dantist',
    Tue: 'go to park',
    Wed: 'hard work',
    Thu: 'go to party',
    Fri: 'read a book',
    Sat: 'stay in bed',
}

let userChoice = prompt('what day of week you interested of?');

alert( userPlan[userChoice] ? userPlan[userChoice] : 'Not');