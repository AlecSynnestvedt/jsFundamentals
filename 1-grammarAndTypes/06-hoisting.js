/* 
  - JS is interpretted line by line and read top to bottom
  - When our JS code is read, the code is parsed through two times:
    1. Our code is read top to bottom, and any variables or functions that we've declared will get stored away to memory
    2. the code is executed (once again ran top to bottom), and all values that we've given to the variables are assigned.
*/

console.log(myName);
let myName = 'Alec';

testFunction();
function testFunction () {
  console.log('I have been hoisted');
}