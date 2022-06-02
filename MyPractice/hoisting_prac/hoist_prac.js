// "use strict"
/** 
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


*/

x=1;
var a =5;
var b = 10;
var c = function(a,b,c){
    document.write(x);
    document.write(b);
    var f = function(a,b,c){
        b=a;
        document.write(b);
        b=c;
        var x = 5;
    }
    f(a,b,c);
    document.write(b);
    var x = 10;
}
c(8,910);
document.write(b);
document.write(x);
