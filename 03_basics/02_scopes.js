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
