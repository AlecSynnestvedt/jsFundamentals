// function expressions are stored in a variable

//function expression - the var "hello" represents our anon function 
let hello = function() { //a function without a name is an anonymous function 
  console.log('hey there!');
}
hello(); //function expressions don't get hoisted


/* 
- difference between function declarations and expressions 
  - declarations get hoisted
  - function expressions do not 
*/


