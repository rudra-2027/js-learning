const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website `)
        // current context
        console.log(this)
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this)// node environment give {}

function chai(){
    let username = "Rudra"
    console.log(this) // it will give global data
    console.log(this.username); /// this will give undefined bcz the this keyword doesnt work in function
}
chai()

//arrow function

// const chai2 = function(){
//  let username = "Rudra"
//   console.log(this.username);
// }
// chai2()
const chai2 = () =>{
    let username = "Rudra"
    console.log(this);
    
}
chai2();

// () => {} //arrow function
const addTwo =(num1,num2) => {
    return num1+num2
}
// const addTwo1 =(num1,num2) => num1+num2 // implicit return
// const addTwo1 =(num1,num2) => (num1+num2) // parenthesis ke time pe return use nhi hoga
// const addTwo1 =(num1,num2) => { return num1+num2} // curly barecly use ke time pe return 
const addTwo1 =(num1,num2) => {{username:"Rudra"}} // objection decleration
console.log(addTwo(3,4));
console.log(addTwo1(3,4));

const myArray= [2, 5, 3, 7, 8]

myArray.forEach()