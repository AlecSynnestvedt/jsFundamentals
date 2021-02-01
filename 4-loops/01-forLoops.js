/*
  - Loops offer us a quick and easy way to do something repeatedly 
  - There are many different kinds of loops, but they all essentially do the same thing: repeat until a specified condition evaluates to false (first 3 are the most prevalent - ES6 came out in 2017 and introduced a lot of new array methods)
    - for loops
    - for in loops
    - for of loops 
    - while loops
    - do while loops
    - labeled loops
    - break loops
    - continue loops 

NOTE: there is a danger of infinite loops

- For loops take in 3 required parameters - which are separated by a semicolon 
  1. Initial expresssion
  2. condition
  3. increment expression 

*/

FOR LOOPS syntax is the same as an if statement 

  1.           2.    3.  
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//CHALLENGE: using a for loop, count to 20 by 2s

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

//CHALLENGE using a for loop, count from 10 to 0, going down by 1
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//CHALLENGE using a for loop, count from 0, going down by 2's to -24

for (let i = 0; i >= -24; i -= 2) {
  console.log(i);
}

//CHALLENGE using a for loop, loop through a name and display each letter individually
let aName ='SpongeBob';

for (let i = 0; i < aName.length; i++) {
  console.log(aName[i]);
}

//CHALLENGE make a for loop that adds all numbers from 1 to 50 (sum should equal 1275)
let theAnswer = 0;
for (let i = 1; i <= 50; i++) {
  theAnswer += i;
}
console.log(theAnswer);



