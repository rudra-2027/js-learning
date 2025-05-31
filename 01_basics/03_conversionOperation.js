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

//****************** Operations **********************
let value = 3
let negValue = -value;
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2)
console.log(2/2);
console.log(2%2);

let str1 = "hello"
let str2 = " Rudra"

let str3 = str1+str2
console.log(str3)

//first value is which type according to that we are seeing 
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(3+4*5%3);


console.log(true)
console.log(+true)
// console.log(true+) // error
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1,num2,num3)

let gameCounter = 100
console.log("Before",gameCounter)
++gameCounter;
gameCounter++;
console.log(gameCounter)



