const myNumbers=  [1,2,3,4,5,6,8,9,10]
// const newNums = myNumbers.map((nums)=>nums+10);
const newNums = myNumbers
                .map((nums)=> nums*10)
                .map((nums)=>nums+1)
                .filter((num) => num >= 40)
console.log(newNums);

//filter use for filter thee conditons 
//map is use for applying the conditions
//reduce is use to 


// const arr1 = [1,2,3,4];
// const initalValue= 0;
// const sum = arr1.reduce(
//     (acc,current) => 
//         console.log(`acc: ${acc} and currval: ${current}`),
//         acc+current,initalValue
// )
// console.log(sum);


const arr1 = [1,2,3,4];
const initalValue= 0;

const sum = arr1.reduce(
    (acc,current) =>{ 
        console.log(`acc: ${acc} and currval: ${current}`);
        return acc+current},initalValue
)
console.log(sum);



const shopingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shopingCart.reduce((acc,item )=>( acc + item.price),0)
console.log(priceToPay);
