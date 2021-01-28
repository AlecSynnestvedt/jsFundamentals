/*
  - for in loops are great for looping over values in an object
    - properties (or key value pairs) in an object are known as enumerabic (countable) properties
    - for in loops will loop over the enermable properties of an object

*/

let student = {
  stuName: 'Peter',
  awesome: true,
  degree: 'javascript',
  week: 1
},

console.log(student.stuName); // dot notation

console.log(student['stuName ']); // bracket notation

for (let item in student) {
  console.log(item);
  console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray) {
  console.log(cat);
  console.log(catArray[cat]);
} 

/*
CHALLENGE
************
    - write a for in loop that capitalizes the first i of a name, and lowercases the rest of the myName
*/
let myName = 'aLec'; 
let capmyName;

for (let i in myName) {
  if (i == 0) {
    capName = myName[i].toUpperCase();
  } 
else {
    capName += myName[i].toLowerCase();
  }
}

//Gold
let myName = 'aLec'; // statement - we are stating that the variable of myName has a value of aLec
if (myName[0] == myName[0].toUpperCase()) {
  let isUpperCase = myName[0] + myName.slice(1).toLowerCase();   // expression - any valid unit of code that will resolve to a value 
  console.log(isUpperCase);
} else {
  let notUpperCase = myName.toUpperCase() + myName.slice(1).toLowerCase();
 console.log(notUpperCase);
};
