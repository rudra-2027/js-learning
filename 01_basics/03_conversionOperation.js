let score = "33";
// let number = "33aaa"
let number = null;
// req.body
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) // number converted in number 
console.log(typeof(valueInNumber));

let valueInNumber2 = Number(number) 
console.log(typeof(valueInNumber2));
console.log((valueInNumber2)); // this give NaN not a number in store value the is not a number for null it gives 0 and for undefined it give NaN for boolean (True(1)) and False(0)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
let isLoggedIn = 0 // empty string it gives false in other cases if string value is given it gives true and for 1 it gives true and for 0 is gives  false;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log((booleanIsLoggedIn));
 
// 1 => true
// 0 => false
// ""=> false
// "rudra" => true

let someNumber = 33;
let stringToNumber = String(someNumber)
console.log(typeof(stringToNumber));
