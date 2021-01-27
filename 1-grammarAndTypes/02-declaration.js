/*
NOTES:
- Variables are named containers for storing data values and referring to them later.
- We can name them whatever we want to, with some rules:
  - must begin with a letter, underscore, or dollar sign 
  - numbers may follow the above chars, but cannot come first
  - Javascript is case sensitive. So, "Hi" and "hi" are different Variables
  - no spaces allowed in variable names
  - camelCase is the best practice for variable names

*/

let a = 2;

let     b     =     2     
/* (1)  (2)   (3)   (4)
1. Keyword
2. Variable name 
3. Assignment Operator
4. Vairable value


KEYWORDS
Var, Let, Const:
- var: "old" keyword for variables. In this course, we won't be using this very often.
- let: "new" keyword for variables. 
- const: also "new," declares an unchangeable variable


DECLARATIONS & INITIALIZATIONS
NOTES
- Declarations are on the LEFT SIDE of a variable
  - it is simply: let x
  - declarations are on the left side of the Assignment Operator
- Initializations are on the RIGHT SIDE of a variable
  - it sets the value of a variable
  - it incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/ 

let x;
console.log('Declaration', x);

x = 10; 
consoloel.log('Ininitialization', x);

x = 33;
console.log('Initialization 2', x);

let y = 'Hello';
console.log('Both:' x, y);

let today = "Great!"; 
const elevenFifty = "Wonderful!";
console.log(today, elevenFifty);

today = 'Lovely';
elevenFifty = "Fantastic";

