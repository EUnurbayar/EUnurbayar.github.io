/** lesson8.js */

const address = {
    street: "1000 N 4th Street",
    city: "Fairfield",
    state: "IA",
    zipCode: "52556 - 0001",
    "house number": 1000
};


console.log(`Street is ${address.city}`);
console.log(`House Number is ${address["house number"]}`);

const  anna ={
    firstName : "Anna",
    lastName : "Smith",
    home_address: {
        street: "South Court Street",
        city: "Fairfiled"
    },
    work_address: address,
    printfullName : function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
};


console.log(`Preson is named ${anna.firstName} ${anna.lastName}`);
console.log(`She lives on a street name ${anna.home_address.street}`);
console.log(`${anna.firstName} works at ${anna.work_address.street}`);

anna.printfullName();