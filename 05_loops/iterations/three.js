// for of

// ["", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

// for(const variableNam of objectName)
for(const num of arr){
    console.log(num);
}

const greetings = "Hello World!"
for(const i of greetings){
    console.log(`Char variable is ${i}`);
} 


// Maps
const map = new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
console.log(map)

for(const [key,value] of map){
    console.log(key,':-', value)
    
}

const myObject = {
    'game1' :  'NFS',
    'game2' : 'Spiderman'
}

// for(const [key,value] of myObject){
//     console.log(key,':-', value)
    
// } not working in for of loop it have some different function for this 