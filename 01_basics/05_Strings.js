// '' " " => decleration
const name = "Rudra"
const repoCount = 50
// console.log(name+repoCount+ " Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // for morden world

const gameName = new String('hitesh-hc') // object String

console.log(gameName);

console.log(gameName[0])
console.log(gameName.__proto___);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newStr = gameName.substring(0,4)
console.log(newStr)

const anotherString = gameName.slice(-8,4)

console.log(anotherString);

const newString = "  hitesh   "
console.log(newString);
console.log(newString.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'))





