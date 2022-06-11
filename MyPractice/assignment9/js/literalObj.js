/**
 * literalObj.js
 */

"Use strict"
// Question1
const person = {
    name: " ",
    dateOfBirth: null,
     getName: function(){
        return this.name;
     },
     setName: function(newName){
        this.name = newName;
     }

};

const john = Object.create(person);// passong the person in create obj proto type
console.log(john.prototype)
console.log(john);
console.log(john.__proto_);//old deprecated
john.setName("John");
john.dateOfBirth = new Date(1998, 11, 10);
console.log(john);
console.log(`The person name is ${john.name}`);
console.log(`John was born on ${new Intl.DateTimeFormat().format(john.dateOfBirth)}`);
// console.log(`John was born on ${john.dateOfBirth.toISOStirng()}`);
console.log(`John was born on ${john.dateOfBirth.getFullYear()}-${john.dateOfBirth.getMonth()}-${john.dateOfBirth.getDay()}`)


//Question 2
const employee = Object.create(person);
employee.salary = 0.0;
employee.hireDate = new Date();
employee.doJob = function(jobTitle){
    console.log(`${this.getName()} is a ${jobTitle} who earns ${this.salary}`);
};

const anna = Object.create(employee);
anna.setName("Anna");
anna.salary = 24999.50;
anna.doJob("Programmer2");

//alternative syntax using Object properties of array of object.

const employee2 = Object.create(person,{
    salary: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 0.0
    },
    hireDate: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: new Date()
    }
});

employee2.doJob = function(jobTitle){
    console.log(`${this.getName()}is a ${jobTitle} who earns ${new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(this.salary)}`)
}

const anna2 = Object.create(employee2);
anna2.setName("Anna2");
anna2.salary = 249995.50;
anna2.doJob("Programmer");



//Question 3 create person object using constructor function

function Person(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}

const peter = new Person("Peter", new Date(1985, 10, 10));
Person.prototype.toString = function(){
    return `{Name: ${this.name}, DateOfBirth: ${new Intl.DateTimeFormat().format(this.dateOfBirth)}}`
}

console.log(peter.toString());
const john2 = new Person("John", new Date(2001, 8, 21));
console.log(john2.toString());

