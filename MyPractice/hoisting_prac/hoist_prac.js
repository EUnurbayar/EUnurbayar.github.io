// "use strict"
/** 
console.log(x); //undefined
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

f(); // error
function f(){
    console.log(x);// 0
}


*/

x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c){
    console.log(x);//undefined => first to printout => 1
    console.log(b); //9 second to print out => 2
    var f = function(a, b, c){
        b = a; // 9 cahnged to 8
       console.log(b);// 8 print out third => 3
        b = c;// 8 is changed to => 10.
        var x = 5;
    }
    f(a,b,c);
    console.log(b);//9 print out => 4
    var x = 10;
}
c(8,9,10);
console.log(b);// 10 print out => 5
console.log(x);// 1 print out => 6



