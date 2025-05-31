const score = 1000
console.log(score)

const balance = new Number(100) // number is specially 100
console.log(balance);
console.log(balance.toString())
console.log(balance.toFixed(2))

const otherNumber = 123.836
console.log(otherNumber.toPrecision(3)); // preciese the value round off it and give its exponential and give the priorit before decimal one 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 gives

// ++++++++++++++++++++++ Maths +++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(-4.6));
console.log(Math.ceil(-4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,4,2,6,8));


console.log(Math.random()) // by defualt give ragne btw 0-1
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);


const min  = 10;
const max = 20;


console.log(Math.floor(Math.random()*(max-min+1))+min)
