//LOOPS


//for loops are best used when you know the EXACT number of iterations you want the program to repeat
for (let i = 0; i<5; i++){
     console.log(i);
}


//while loops are best used when the number of iterations is CHANGING
let i = window.prompt ("Enter a value:");
while (i<5){
    console.log (i)
    i++;
}

//do...while loops make sure that the code runs AT LEAST ONCE before checking the condition
let i = 5;
do {
    i++;
    console.log (i)
} while (i<5);

//looping through objects and arrays

//for...in is used when you need to loop through objects
const obj = {
    firstName: "Mariano Luiz" , //objects are data types that have key pairs
    lastName: "King" ,          //the format of these key pairs is "property/identifier: value"
    age: 18 ,                   //to access the value of each property in an object we can use the "DOT or BRACKET NOTATION"
    favColor: "Pink"
}

for (let prop in obj){
    console.log(obj[prop]);
}

//for...of loops are used for looping through arrays
const array = [1, 2 ,3] //we can think of arrays as sets (yes, the same sets we study in Discrete Structures and MMW)
for (let val of array){
    console.log(val);
}
