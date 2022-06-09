/**
 * lab8.js
 * 
 */
console.log("hello lab 8 in class practice");

// lab8 question6
let add =(function(){
    let counter = 0;
    
    return function(){
        return counter += 1;
    }
})();

console.log(add());
console.log(add());

//containing 2 methods, add(), reset()
const count = (function(){
    let counter = 0;
    const add = function(){
        counter +=1;
    }
    const reset = function(){
        counter = 0;
    }
     const getCounter = function(){
         return counter;
     }
    return{
        add: add,
        reset: reset,
        getCounter: getCounter
    }

})();
//Execute the module object's methods
count.add();
count.add();
console.log(`The current value of counter is ${count.getCounter()}`);
count.reset();
console.log(`The current value of Counter is ${count.getCounter()}`);


//Lab8 Question8



