//Singleton

// const tinderUser = new Object() //singleton object
// const tinderUser = {} // non-singleton

const tinderUser ={}
tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userFullname:{
            firstname: "Rudra",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname) // full object under fullname
console.log(regularUser.fullname.userFullname.firstname)
console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}


// const obj3 = {obj1,obj2}
// const obj3= Object.assign({},obj1,obj2,obj4) // {} -> target , rest are source likke obj1,obj2,obj3
const obj3 ={...obj1,...obj2} //90% times uses this method name is spread out

console.log(obj3);


const users=[
    {
        id:1,
        email: "h@gmail.com"
    },
    {

    },
    {

    }
]
console.log(users[0].email)

//use in database when data comes to js how to manipulate it 
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //carshes when value is not exists

console.log(tinderUser.hasOwnProperty('isLogged'))

//de-structure => {key: => name}
const course = {
    courseName : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor;
const {courseInstructor:Instructor,courseName} = course 
// console.log(courseInstructor);
console.log(Instructor);


// const navbar = ({company}) => {

// }
// navbar(company = "Rudra")

// apna kaam kisi or pe dal dena API kahata h
//json file => keys always are in string 
// {
//     "name" :"Rudra",
//     "courseName" : "js in hindi",
//     "price": "free",
// }
//ArrayFormat json api fetching
// [
//     {},
//     {},
//     {},
// ]
