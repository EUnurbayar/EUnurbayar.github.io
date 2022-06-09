/**
 * lab8.js
 * 
 */
console.log("hello lab 8 in class practice");


let add =(function(){
    let counter = 0;
    
    return function(){
        return counter += 1;
    }
})();

console.log(add());
console.log(add());


const count = (function(){
    let counter = 0;
    const add = function(){
        counter +=1;
    }
    const reset = function(){
        counter = 0;
    }

});


