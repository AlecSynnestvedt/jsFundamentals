function hello () {
  console.log('hey there');
}

// hello(); // correct
//hello // nothing - no parentheses means the function will not run
//console.log(hello);
console.log(hello());//function invocations are read and run immediately - we get an output of "hey there" and then "undefined" because, since the function already ran, we're console logging nothing 

/*
CHALLENGE
************
    - Create a function that, when invoked, lists out the numbers 1-10
*/

function listThem () {
  for (let i = 1; i <= 10; i++ ) {
    console.log(i);
  } 
}
listThem();

/*
CHALLENGE
************
    - Given the array, create a function that lists out the values individually.
*/
let arr = ['This', 'is', 'really', 'cool'];

