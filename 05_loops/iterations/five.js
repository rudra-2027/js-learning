// for each
const coding = ["js","ruby","java","python","cpp"]


// coding.forEach( function (item) {
//     console.log(item)
// })
// coding.forEach((element) => {
//     console.log(element)
// });

// function pritMe(item){
//     console.log(item);
    
// }
// coding.forEach(pritMe);

coding.forEach((item,index, arr)=>{
    console.log(item,index,arr);
    
})
const myCoding = [
    {
        languageName :"javascript",
        languageFileName : "js"
    }, 
    {
        
        languageName :"python",
        languageFileName : "py"
    },
    {
        
        languageName :"react",
        languageFileName : "rjx"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})
