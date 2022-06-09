/**
 * ass.js
 */
// "use strict"
console.log("hello assignment 8");

// Question 6

// var add = (function (){
//     var counter = 0;
//     return function(){
//         return counter +=1;
//     }
// })();

// console.log(add());

// let count = (function(){
//     let counter = 0;
//     let add = function(){
//         return (counter +=1);
//     }
//     let reset = function(){
//         return (counter = 0);
//     };
//     return{
//         add: add,
//         reset: reset,
//     };

// })();
// console.log(count.add());
// console.log(count.reset());


//Question 8

let make_adder = function(inc){
     let counter = 0;
     let add = function(value){
         return (counter += value);
     };
     let reset = function(){
         return (counter = 0);
     };
     return {
         add : function(){
             return add(inc);
         },
         reset: reset,
     };
};


let add5 = make_adder(5);
console.log(add5.add());
console.log(add5.add());
console.log(add5.add ()); // final counter value is 15


let add7 = make_adder(7);
console.log(add7.add());
console.log(add7.add());
console.log(add7.add()); // final counter value is 21


//Question 10

let employee = (function () {
    let name, age, salary;
 
    let getName = function () {
       return name;
    };
   
    // private
    let setName = function (newName) {
       name = newName;
    };
   
    let getAge = function () {
       return age;
    };
 
    // private
    let setAge = function (newAge) {
       age = newAge;
    };
 
    let getSalary = function () {
       return salary;
    };
 
    // private
    let setSalary = function (newSalary) {
       salary = newSalary;
    };
 
    let incrementAge = function () {
       setAge(getAge() + 1);
       return getAge();
    };
    
    let increaseSalary = function (percentage) {
        let tmpSalary = getSalary();
       setSalary(tmpSalary + tmpSalary * (percentage / 100));
       return getSalary();
    };
 
    let toString = function () {
       return getName() + " " + getAge() + " " + getSalary();
    };
 
    return {
       setName: setName,
       setAge: setAge,
       setSalary: setSalary,
       incrementAge: incrementAge,
       increaseSalary: increaseSalary,
       toString: toString,
    };
 })();
 

 //question 11
 employee.address = " ";
 employee.setAddress = (newAddress) => {
    address = newAddress;
 };
 employee.getAddress = () => {
    return address;
 };
 
 employee.setAddress("Fairfield, IA 52557");
 console.log(employee.getAddress());