/* We have three kinds of variable declaration
1. var
2. let
3. const
Each of them have their differences and uses*/

var x = 10; //Variables that are declared using the var keyword are always in the global scope

console.log (x); //Outputs 10

if (true) {
    var x = 20;
    console.log(x); //Outputs 20
}

console.log(x); //Outputs 20

let y = 10; //Variables that are declared using the let keyword are reassignable

console.log (y); //Outputs 10

if (true) {
    let y = 20;
    console.log(y); //Outputs 20
}

console.log(y); //Outputs 10

//Taking user input using the window.prompt command

window.prompt("Enter a value:"); //Prompts the user to input a value but doesn't store it inside a variable
let value = window.prompt("Enter a value:"); //Allows the inputted value to be stored inside the variable named "value"

console.log(value);
