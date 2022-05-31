catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/

//=====================================

function catName(name) {
    console.log("My cat's name is " + name);
  }
  
catName("Tiger");
/*
The result of the code above is: "My cat's name is Tiger"
*/
//=============================================

console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
num = 6; // Initialization

//=======================================

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.
//======================================================

a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b

console.log(a + "" + b); // 'Cranberry'
//=============================================================

// SCOPE

if (true) {
    var color = "purple";
  }
  
  console.log(color); // What should we see in the console?


//=====================================================
//CLOSER

function greet() {
    // locally scoped variable
    const name = "Michael Scott";
    // inner function
    function sayHello() {
      // inner function has access to parent's lexical environment
      console.log(`Hello ${name}`);
    }
    sayHello();
  }
  
  greet();

//====================================================

//COMPLEX SCOPE EXAMPLES

teamName = "Giraffes"; // What scope is this? 
var teamCity = "Sioux Falls"; // What scope is this?
const teamColors = "Brown and Yellow"; // What scope is this?

function playBaseball() {
  console.log("From " + teamCity + "..."); // Does this work?
  console.log("Welcome the " + teamName + "!"); // Does this work?

  if (teamCity === "Sioux Falls") {
    const pitcherName = "Meg"; // What scope is this?
  }
  const batterName = "Perry"; // What scope is this?

  console.log("Batter from inside the function", batterName); // Does this work?
//   console.log("Pitcher from inside the function", pitcherName); // Does this work? NOT WORKING
}

playBaseball();

console.log(teamCity); // Does this work?
console.log(teamName); // Does this work?

// console.log(batterName); // Does this work? NOT WORKING
// console.log(pitcherName); // Does this work? NOT WORKING


/*
teamName - global (no var)
teamCity - global (var not in a function)
teamColors - global (const unenclosed in a code block) pitcherName - block (no because const has block scope)
batterName - local to playBaseball function
*/ 