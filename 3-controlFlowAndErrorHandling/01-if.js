/*
CONDITIONALS 
  - a falsy value is a value that is considered false when encountered in a boolean context 
    - there are six falsy values in javascript 
      1. false 
      2. 0
      3."", '', ``
      4. Null
      5. Undefined 
      6. NaN
*/
//if (value) is true, then run what's in the {conditional body}
if (undefined) {
  console.log('will it run?');
}

let isOn = true; 
if (isOn == true) {
  console.log('the light is on!');

}

if (isOn) {
  console.log('the light is on!');
}

let isOn = false;
if (isOn == false) {
  console.log('the light is off!');
}

/*
javascript allow us to reference a variable that's already been declared and assign it a new value (or reinitialize that variable), but we cannot declare two variables with the same name. 

General rule of thumb: 
  - when declaring new variables, tne var name needs to be prefaced by one of our 3 available JS keywords to declare variables (var, let, const)
  - when assigning a new value to a variable that already exists, we simply just need to reference a variable that's already been named
*/

let weather = 65; 

if (weather < 70) {
  console.log('Wear a jacket');
}

for () {
  
}

while () {
  
}