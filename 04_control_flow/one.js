// if
if(true){ // true hoga tabhi chelga 

}
// <, >, <=, >= , == ,!= , === (datatype) ,!==(datatype)
let score = 500;
if(score> 100){
    let power = "fly";
    console.log(`User power is ${power}`)
}
const balance = 1000
if(balance>100) console.log("test"); //implicit scope without{}

/* if(){

}else if(){

}else{

} */

//real life use 
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}
if(loggedInFromEmail || loggedInFromGoogle ){
    console.log("User loggede in")
}