console.log("Basics");

console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("TypeCasting");

console.log("2">1); // same data type in string as it converts the data in numeric
console.log("02">1);

console.log("NUll");

console.log(null > 0); //f
console.log(null == 0);//f
console.log(null >= 0); // the reason is that an eqyality check == and comparisons ><>=<= works differently. Comparsions convert null to a number, treating it as 0 that's why(3) null>=0 is true and (1) null >0 is false
console.log(null <= 0);
console.log(null < 0);



console.log("Undefined");

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined <  0);

// ==== strictely checks for the data type also  
console.log("=====")
console.log("'2' === 2", "2"===2);









