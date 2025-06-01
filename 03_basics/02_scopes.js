// Scopes  ==> Global And Local 

// {} // =>scope function ke sath{} ata hai toh scope object me object delclaration
let a = 300
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ",a)
}
console.log(a);
// console.log(b);
console.log(c); // var is in if delecration but outside loop it is printing with no error
// var ke sath problem h vo kahi se bhi change hojta hai tabhi var ko avoid kiya jata 
//{ke andar hai local scope}
//{}ke bhar global

// for(let i = 0;i<Array.length;i++){
//     const elemnet = Array[i];
// }
//-------------------------------------------------------------
function one(){
    const username = "Rudra"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    two();
    // console.log(website); // scope is inside website 
}

one();

if(true){
    const username = "Rudra"
    if(username === "Rudra"){
        const website = " youtube"
        console.log(username+website)
    }
    // console.log(website) // ni de skta access
}
// console.log(username) // ni de skta access

//+++++++++++++++++++++++++++++++++intersetinng ++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num+1;
}
// console.log(addTwo(5)); // this case is not possible 
//Hosting
const addTwo = function(num){ /* this is expression*/
    return num+2;
}
addTwo(5)