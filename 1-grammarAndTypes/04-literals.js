/*
LITERAL represents a fixed value 
  Literals include:
    - string literal
    - numeric literal
    - boolean literal
    - object literal 
    - array literal 

*/
//String Literal 
let car = 'Ford'; 

//Numeric Literal 
let december = 12; 

//Boolean Literal 
let tired = true; 

//Object literal. Colon after the key assigns the value, and each key value pair is separated by a comma 
let soup = { // equal sign used to assign the object 
  a: 'chicken noodle',
  b: 'tomato',
  c: 'beef and barley', 

};

console.log(soup.b);

/* 
  - when working with objects, using dot notation allows us to dive into the object and grab a specific piece of data
*/


//Array literal. 
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days[1]);

/* 
  - when working with arrays, using square bracket notation allows us to pull a singular value out of the array by its index number
  - when working with indices, they always start counting from zero.
*/


