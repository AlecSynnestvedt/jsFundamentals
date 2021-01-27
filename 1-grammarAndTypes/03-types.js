/*
BOOLEANS: only have two possible values: TRUE and FALSE
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL: a container with an empty value. This variable exists but has no values
*/

let empty = null; 
console.log(empty);

/*
UNDEFINED: no value is assigned and does not act as an empty container 
*/

let undef; 
console.log(undef);

/* 
NULL VS UNDEFINED

NULL: 
  - like a container, but with nothing in it. 

UNDEFINED:
  - a Variable has never been initialized, or hasn't been created 


/* 
NUMBERS: numbers are literally just numbers. Don't need to write anything special in Javascript.
*/
let degrees = 90; 
console.log(degrees);

let precise = 999999999999999 // 15 9s 
console.log(precise); // 15 9s

let rounded = 9999999999999999 // 16 9s 
console.log(rounded); // JS will round integers after 15 places

let notQuite = 0.2 + 0.1; 
console.log(notQuite); // JS rounds out, so beware when doing math!

let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard);

/* 
STRINGS: DataType to represent text and are wrapped in a single quote 
('') or ("") 

*/

let stringOne = "Oh hi Mark!";
let stringTwo = 'Oh hi Mark!';

console.log(stringOne, stringTwo); //same output

//NUMBERS vs STRINGS
let first = 1050 + 100 ; //number 
let second = '1050' + '100'; //string
console.log(first, second);


/*
OBJECTS: are used to store many values instead of a singular value
*/

let frodo = {
  race: 'hobbit',
  rings: 1, 
  cloak: true,
}

console.log(frodo);

/*
ARRAYS: containers that hold lists of items
  - denoted by []
  - don't have to be the same DataType 
*/

let list = [ 'item1', undefined, 3 ]

let burritos = [ 'large', 4, true ];
console.log(burritos);

console.log(typeof burritos); 

/* 
  - when JS sees that we're trying to combine two or more numbers, it adds those values together using the built in math functionality. 
  - when JS sees that we're trying to comnbine two or more strings, instead of using the math functionality, JS combines the two strings instead of synthesizing the values.

*/ 

let example = 1050 + '100'; // coersion: JS assumes the user made a mistake is trying to concatenate two strings 
console.log(example);
console.log(typeof example);

/* 
CHALLENGE
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

// SOLVE 1 = as prompted, but added english words 
let firstName = 'Alec';
let lastName = 'Synnestvedt';
let houseNumber = 123;
let street = 'Beville Avenue';
let city = 'Indianapolis';
let state = 'IN'; 
let zipcode = 46201;

console.log(firstName, lastName + ',', houseNumber, street + ',', 'in', city + ',', state, zipcode); //string concatenation 
console.log(`${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipcode}`); //string interpolation

//SOLVE 2 = stored the same key value pairs as an object called 'me' 
let me = {
  firstName: "Alec",
  lastName: "Synnestvedt",
  houseNumber: 123,
  street: "Beville Avenue",
  city: "Indianapolis",
  state: "IN",
  zipcode: 46201,
};
console.log(me); 

/*
STRING PROPERTIES are qualities that are associated with a data type. 
  - 


*/


let myName = 'Alec';
console.log(myName.length);

/*
STRING METHODS are tools that help us manipulate the data
  - .properties / .methods()
      *no parentheses for properties*

*/

let myNameIs = 'Alec'
console.log(myNameIs.toUpperCase()) //method that changes a string to toUpperCase

let hometown = 'my hometown is Detroit';
console.log(hometown.includes('Det')); //method that checks if a string is included in another string 

let sent = 'This sentence will be split into individual parts.'
console.log(sent.split(" ", 8));


