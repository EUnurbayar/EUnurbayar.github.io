"Use Strict";
//1.

// any number of arguments sum
function sumArgs(){
    let sum = 0;

    // for(let i = 0; )
 
    // using for...in
    for(const i in arguments) {
        sum += arguments[i];
    }
    // for...of
   return sum;
}
console.log(sumArgs(1,2,3));
console.log(`The sum of [1,2,3] is ${sumArgs(1,2,3)}`);

//exmp1
function max_1( num1, num2){
    let max;
    if(num1 > num2){
        max = num1;
    } else {
        max = num2;
    }
    return max;
}
console.log(max_1(3,6));

const num1 = 2;
const num2 = 4;
const maxOutPut = max_1(num1, num2);
console.log(`The max of ${num1}and ${num2} is ${maxOutPut}`)

//exmp2 of 1.
function max(x,y){
   if(x > y){
       console.log(x);
   } else{
       console.log(y);
   }
    
}
max(5,9);
max(6,1);

//exmp3 of 1. 

// Using Function expression
const max1 = function(num1, num2){

};


// Using Arrow Function
const max2 = (num1, num2) =>{

};

//Using Ternary Operation
const  max3=0;


//2.
function maxOfThree(x,y,z){
    if(x > y && x >z){
        console.log(x);
    } else if( y > x && y > z){
        console.log(y)
    } else {
        console.log(z);
    }
}

maxOfThree(1,2,3);
maxOfThree(9,6,10);

//3
function isVowel(char){
    if(char.length === 1){
        return/[aeiou]/.test(char);
    }
}
console.log(isVowel('j'));

function vowels(char){
    if(char.length == 1){
        return char === "a" || char === "e" || char === "o" || char === "i" || char === "u" || false;
        
    }
}

console.log(vowels("e"));

//4. Array of sum
function sum(array){
    let total = 0;
    for(const element of array){
        total += element;
    }
    return total;
}
console.log(sum([1,2,3,9]));

//4. Array of multiplies
function multiply(array){
    let total = 1;
    for(let i=0; i < array.length; i++){
        total *= array[i];
    }
    return total;
}
console.log(multiply([1,2,3,4]));

//5 reverse

function reverse(string){
    let str = " ";
    for(let i = string.length-1; i >= 0; i--){
        str += string[i];
    }
    return str;
}

console.log(reverse("hello"));
console.log(reverse("jag testar"));


//6.
function findLongestWord(array){
    let longestWord = " ";
    for(let i = 0; i < array.length; i++){
        if(array[i] > longestWord){
            longestWord = array[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(["hi", "good", "morning"])); 

function sumSqrs(array){
    let sum=0;
    for(const element of array){
        sum += (element * element);
    }
    return sum;
}
console.log(sumSqrs([1,2,4]));

function sumOfSquatre(arr){
     let sumSqr = 0;
     for(let i =0; i < arr.length; i++){
         sumSqr += Math.pow(arr[i],2);
     }
     return sumSqr;
}

console.log(sumOfSquatre([1,2,3]));


//9. Print Odd numbers only.
function oddNums (arr){
    let odd = [];
    for(element of arr){
        if(element % 2 === 1){
            odd.push(element);
        }
    }
    return odd;
}
console.log(oddNums([1,2,3,4,5,6,7]));

//10. compute Sum Of Squares Of Evens Only.
function sumEvenSqr(array){
    let sum = 0;
   for(const element of array){
       if(element % 2 ===0){
            sum += Math.pow(element,2);
       }
   }
    return sum;
}

console.log(sumEvenSqr([1,2,3,4,5]));

let x =[1,2,3]
function printArgs(){
    for(element of arguments){
        console.log(element);
    }
}

printArgs(x);
printArgs(["me","you","he"]);


//11. REDUCE FUNCTION
//sum
let arraysum = [1,2,3,4,5];
let sumRed = arraysum.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sumRed);

//multiply
let arrMult = [1,2,3,4,5];
let multip_Arr_elms = arrMult.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
console.log(multip_Arr_elms);

//string interportation
console.log(`${multip_Arr_elms}`);

const stringLine = 
    ` 
    string 1
    string 2 
    `;

console.log(stringLine);