// functions is eaiser jo bhi code likha hai usko ek package me band kardiya h

function sayMyName(){
    console.log("R");
    console.log("U");
    console.log("D");
    console.log("R");
    console.log("A");
}
sayMyName(); //execution
sayMyName // refrence 

function addTwoNumbers(a,b){ //  here a , b are parameter
    
    return a+b;
}
console.log(addTwoNumbers(3,4)); // 3,4 are arguments
console.log(addTwoNumbers("3",4));
console.log(addTwoNumbers(3,"a"));
console.log(addTwoNumbers(3,null));
let res = addTwoNumbers(3,5)
console.log("Result: ",res);

function loginUserMessage(username="Sam"){
    // if(username === undefined){
    //     console.log("Please Enter a username");
    //     return;
    // }
    if(!username){
        console.log("Please Enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Rudra"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())





// when number of argument not defined (rest operator /spread operator)
function calculateCartPrice(val1,val2,...num1){
    return val1,val2,num1
}
console.log(calculateCartPrice(2,200,500))


const user ={
    username :"Rudra",
    price: 199

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray)
{   
    return getArray[1];
}
console.log(returnSecondValue(myNewArray))