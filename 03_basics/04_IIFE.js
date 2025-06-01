//IIFE :- Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log('DB Connected')

})();//()=> definations ()=> execution
//global scope ke pollutions se problem hoti kai baar poltution ko hatne ke liye IIFE USE kiya h
(function aurcode() {
    console.log(`Db connected two`);
    
})();
// chai()
// for mutiple iife we use a ; for jump to another

((name)=>{
    console.log(`DB connected to ${name}`)
})("Rudra");