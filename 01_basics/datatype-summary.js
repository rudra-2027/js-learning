//  Primitive (call by value) => gives copy of data 

// const { use } = require("react");

/*
7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt(Scinetific value)

*/
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //=> undefined

//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id, anotherId, "id == anotherId ",id == anotherId )

const bigNumber = 6546546516516516516516165161n;//n for defining  big int

// Refernce(Non primitive)
/*Array, Objects, Functions */

const heros = ["shaktiman","naagraj","doga"]
let myObj={
    name: "Rudra",
    age: 21,
}
const myFunction = function(){
    console.log("Helo world")
}
console.log(typeof bigNumber)
console.log(typeof myFunction) //function object



///+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory
// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "histeshChoudharydotcomt"

let anothername = myYoutubename
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let user = {
    email: "user@google.com",
    upi: "user@bly",

}
let userTwo = user;
userTwo.email="hitesh@google.com"
console.log(user.email)
console.log(userTwo.email)

