let weather = 75; 

if (weather < 70) {
  console.log('wear a jacket');
} else {
  console.log('no jacket necessary');
}

/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name> ?'
*/

let myName = 'Slim Shady';

if (mye == 'Slim Shady'){
    console.log("Hello, my name is", ${myName} + "!");
    }    else { 
        console.log("Hello, is your name ${name}?");

    };

let myName = 'Alec';

//Bronze
if (myName == 'Alec') {
      console.log(myName);
} else {
  console.log('Hello, what is your name?')
};

//Silver
let myName = 'Alec';

if (myName == 'Alec') {
      console.log('Hello, my name is', myName + '!'); // string concatenation 
} else {
  console.log('Hello, what is your name?')
};


//Gold
let myName = 'Alec';

if (myName === 'Alec') {
      console.log('Hello, my name is', myName + '!');
} else {
  console.log(`Hello, is your name ${myName}?`);
};

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that first letter of the string, plus the rest of the string to lowercase
    If the first letter is not uppercase, console.log the first letter of the string to uppercase, plus the rest of the string to lowercase
*/
//GROUP SOLVE
let aName = 'aLec';

//Bronze
if (aName[0] == aName[0].toUpperCase()) {
  console.log(aName);
} else {
  console.log("Hey, this isn't written corrently")
};

//Silver
let aName = 'zAchARy';
console.log(aName.length);

if (aName[0] == aName[0].toUpperCase()) {
  console.log(aName[0]);
} else {
  console.log(aName.substring(1).toLowerCase)
};

//Gold
let aName = 'zAchARy';
console.log(aName.length);

if (aName[0] == aName[0].toUpperCase()) {
  console.log(`${aName[0]}${aName.substring.toLowerCase(1)}`);
} else {
  console.log(`${aName[0].toUpperCase()}${aName.substring(1).toLowerCase()}`);
};

//CLASS SOLVE
let aName = 'zAchARy';

//Bronze
console.log(aName.charAt(0));
console.log(aName[0]);

if (aName[0] == aName[0].toUpperCase()) {
  console.log(aName);
} else {
  console.log("Hey, this isn't written corrently")
};

//Silver
let aName = 'zAchARy';
console.log(aName.length);

if (aName[0] == aName[0].toUpperCase()) {
  console.log(aName[0]);
} else {
  console.log(aName.slice(1).toLowerCase());
};

//Gold
let aName = 'zAchARy'; // statement - we are stating that the variable of aName has a value of zAchARy
if (aName[0] == aName[0].toUpperCase()) {
  let isUpperCase = aName[0] + aName.slice(1).toLowerCase();   // expression - any valid unit of code that will resolve to a value 
  console.log(isUpperCase);
} else {
  let notUpperCase = aName.toUpperCase() + aName.slice(1).toLowerCase();
 console.log(notUpperCase);
};

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/
 
let age = 20; 

if (age <= 17) {
  console.log('sorry, you\'re too young to do anything.');
} else if (age >= 18 && age <= 20) {
  console.log('you can vote.');
} else if (age >= 21 && age <= 24) {
  console.log('you can drink.');
} else if (age >= 25) {
  console.log('you can rent a car.');
} else console.log(age);


