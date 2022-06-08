/*
*index.js
Inheritance practice
*/


let personAnna = {
    name: "Anna"
}


let studentAnna = {

    cjpa:  3.3,
    __proto__: personAnna
   
}


let facultyAnna = {
    areaResearch: "Machine Learning",
    __proto__: personAnna
}

let staff = {
    overTime: 1
}



//Using Constructor Function

function Person(name){
    this.name = name;
}

const anna = new Person("Anna");
const bob = new Person("Bob");

console.log(anna);

const person = new Person("null")

function Student(cjpa){
    this.cjpa = cjpa;
}
Student.prototype = person;
const studentJohn = new Student(3.99);
console.log(studentJohn);
studentJohn.name = "John";
console.log(studentJohn.name);
studentJohn.name = "John";