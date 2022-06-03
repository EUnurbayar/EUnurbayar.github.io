/*
* "inner.html"

*/ 
"use strict"

// function makeFunc(){
//     const name = "Mozilla";
//     function displayName(){
//         console.log(name)
//     }
//     return displayName
// }


// const myFunc = makeFunc();
// myFunc();

// const x =1;
// function f(){
//     let y =2;
//     const sum = function(){
//         const z = 3;
//         console.log(x + y + z);// x = 1;come from outer inveronment 1+10+3
//     }
//     y = 10;
//     return sum;
// }

// const g = f();
// g();



// var funcs = [];
// for(var i =0; i < 5; i++){
//     funcs[i] = function(){
//         return i;
//     }
// }
// v
// console.log(funcs[0]());


const funcs = [];
for(let i =0; i < 5; i++){
    funcs[i] = function(){
        return i;
    }
}

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());