// literal construction 
// singleton :- not created in literals

// Object.create/


// object literals
const mySym = Symbol("key1") 
const JsUser = {
    //Keys: Values
    name: "Rudra", //by default "name"
    "full name" : "Rudra Gupta",
    [mySym]:"mykey1",
    age: 21,
    email: "rudra@googl.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
}
console.log(JsUser.name)
console.log(JsUser["name"])
// console.log(JsUser."full name"); //error its gives error we should use JsUser["full name"];
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@micro.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user")
}
console.log(JsUser.greeting);
// JsUser.greeting()
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
    
    
}

console.log(JsUser.greeting2())

