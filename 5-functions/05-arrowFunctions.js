/*
Arrow Functions - (or Fat Arrow functions) were introduced in ES6 as an alternative to traditional function expressions. They allow us to write shorter function expressions. They are NOT declarations, so they DO NOT get hoisted. 

*/

hi();
// (1)      (2)
let hi = () => { // notifce if we run this from lines 6-10 we get an error. It cannot be hoisted like traditional function declarations - we must invoke the function after declaring the function in our code. 
  console.log ('hi');
}
hi(); 

//1. Assigning a variable to the fat arrow function
 
//2. We use a fat arrow, denoted by the "=>", to signify that it is a function   

//Arrow functions can have either a "concise body" or a "block body" 

//Consise Body - provides an implicit return value by default. Denoted by the lack of brackets that you normally would see in a function.


// Block Body - 