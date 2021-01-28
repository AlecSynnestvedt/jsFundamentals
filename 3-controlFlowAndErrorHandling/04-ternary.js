// A ternary is a shortcut version to write a conditional 
 let num = 6;

 //if else
 if (num > 0) {
   console.log('The number is positive')
 } else {
   console.log('The number is negative')
 }

 //ternary 
 num > 0 ? console.log('The number is positive') : console.log('The number is negative');


 let luckyNumber = 4; 

 (luckyNumber == 4) ? console.log('The numbers match') 
 : (luckyNumber < 4) ? console.log('The number is less than the lucky number.') 
 : (luckyNumber > 4) ? console.log('the number is greater than the lucky number.') 
 : console.log(luckyNumber);
