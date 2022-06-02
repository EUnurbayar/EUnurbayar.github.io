"use strict"

console.log(x); //jundefined
var x = 0;
//============

// console.log(y);//error
// let y=0;

//=============
g();//undefined
//console.log(c); //error
function g(){
    var c =2;
}
// console.log(c);//error
//==========

f();
function f(){
    console.log(x);// 0
}