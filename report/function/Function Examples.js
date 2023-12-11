let show = function() {
    console.log("Anonymous function");
   };

show();


function test() { 
    console.log ("Named function!"); 
}; 

test();


function startProgram(){
  let number = "11";
  let userName = "Bal";

  famousQuotes(number, userName);
}

function famousQuotes(number, userName){
  console.log(userName, "ang pagmamahal ko sayo ay walang hanggan at walang katapusan.");
  console.log("Daniel Camacho, these are", number, "years that brought me joy, adventure, and the feeling of being home.");
}

startProgram();


let play = () => { 
  console.log("Arrow function"); 
}

play();

function add(a, b, callback) {
    const sum = a + b;
    callback(sum);
  }
  
  function displayResult(sum) {
    console.log("The result is", sum)
  }
  
  add(3, 5, displayResult);


function hello(callback) {
    console.log("Hello");
    callback();
  }
  
  function love() {
    console.log("Love");
  }

  function goodbye() {
    console.log("Goodbye");
  }

hello(goodbye);
