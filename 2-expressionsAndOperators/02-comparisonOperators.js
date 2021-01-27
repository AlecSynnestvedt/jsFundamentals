//equal
console.log(3 == 3); //true 
console.log('3' == 3); //true 

/*
  - coersion is the process of converting a value from one type to another
    JS assumes we've made a mistake and that we want to compare the two values that are the same data type 
*/

// strict equal - this overrides javascript coersion 
console.log(3 === 3); //true 
console.log('3' === 3); //false 

//not equal 
console.log('3' != 3); // false because coersion is happening 

//strict not equal 
console.log('3' !== 3); // true 

//greater than 
3 > 2; // true 

//less than
2 < 3; // true 

//greater than or equal to 
3 >= 2; // true 

//less than or equal to
2 <= 3 // true 

// and 
2 && 3; // allows us to check if multiple values are true or false 

let x = 5;
let y = 6; 

if(x >= 1 && y >= 1);
console.log('true');

// or 
2 || 3; // allows us to check if one of multiple values are true or false. 