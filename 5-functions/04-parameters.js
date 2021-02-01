/*
- PARAMETERS are essentially placeholders for information that we will pass into our function 
- parameters are placed inside of the parentheses 
*/

function alec (ticket) {
  console.log(`I exchanged my ticket for a ${ticket}`);
}

alec('cheese pizza'); // 'cheese pizza' is the argument 

//

let resource = "|=======|";
function machine(ironRod) {
  console.log(ironRod);
}

machine(resource); // argument - what we pass into the invocation of our function. In this case, 

/*
CHALLENGE
************
    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/


function myName(fName, lName) {
  let fullName = fName + ' ' + lName; 
  console.log(`Hello, my name is ${fullName}`);
}


myName ("Alec", "Synnestvedt")