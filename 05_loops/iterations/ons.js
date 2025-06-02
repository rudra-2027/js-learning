//for
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
    if(element == 5) console.log(" 5 is the best Number ")
    
}
const array =[1,2,3,4,5,6]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
    
}
console.log(array);

for(let i = 0;i<=10;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j = 0;j<=10;j++){
        // console.log(`Inner loop value ${j} and inner loop `);
        console.log(i+'*'+j+'='+i*j)
        
    }
}

for(let index = 1; index<=20; index++){
    if(index == 5){
        console.log(`Detected 5`)
        break
    }
    console.log(`Value of i is ${index}`);
}
for(let index = 1; index<=20; index++){
    if(index == 5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is ${index}`);
}