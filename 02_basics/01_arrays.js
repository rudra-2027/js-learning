//array

// const myArr = [0,1,2,3,4,5, true, Boolean]
//array are resizable
const myArr = [0,1,2,3,4,5]
console.log(myArr[0])
const myArr2 = new Array(1,2,3,4,5);


//array copies will make shallow copies which means the reference will change
 
// array  method
myArr.push(60)
myArr.push(4)
console.log(myArr);
myArr.pop(2)
console.log(myArr);
myArr.unshift(9)
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(19));
console.log(myArr.indexOf(3));



const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);


//slice,splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)


console.log("A ",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("B ",myArr)
