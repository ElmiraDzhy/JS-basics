'use strict'

function mf(){
    console.log(this); //undefined
}

const mf2 = function(){
    console.log(this); //undefined
}

const arrowFun = () => {
    console.log(this); //Window
}