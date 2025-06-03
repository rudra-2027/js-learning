const coding = [ 'js', 'ruby', 'java', 'python', 'cpp' ];
const values= coding.forEach((item)=>{
    // console.log(item);
    return item;
    
})
console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter((num)=> num>4)
console.log(newNums);

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums1 = myNums1.filter((num)=>{
    return num>5;
})
console.log(newNums1);

const newNums3 = []
myNums.forEach((nums)=>{
    if(nums > 4){
        newNums3.push(nums)
    }
})
console.log(newNums3);

const books = [
  {
    "title": "Book One",
    "genre": "Fiction",
    "publish": 2001,
    "edition": 2005
  },
  {
    "title": "Book Two",
    "genre": "Science",
    "publish": 1999,
    "edition": 2003
  },
  {
    "title": "Book Three",
    "genre": "History",
    "publish": 1980,
    "edition": 1990
  },
  {
    "title": "Book Four",
    "genre": "Non-Fiction",
    "publish": 2010,
    "edition": 2015
  },
  {
    "title": "Book Five",
    "genre": "Fantasy",
    "publish": 1995,
    "edition": 2000
  },
  {
    "title": "Book Six",
    "genre": "Biography",
    "publish": 1985,
    "edition": 1992
  },
  {
    "title": "Book Seven",
    "genre": "Technology",
    "publish": 2007,
    "edition": 2012
  },
  {
    "title": "Book Eight",
    "genre": "Philosophy",
    "publish": 1978,
    "edition": 1984
  },
  {
    "title": "Book Nine",
    "genre": "Non-Fiction",
    "publish": 1981,
    "edition": 1989
  },
  {
    "title": "Book Ten",
    "genre": "Thriller",
    "publish": 2018,
    "edition": 2021
  }
]

let userBooks = books.filter((bk)=>bk.genre==='History')


userBooks = books.filter((bk)=>bk.edition>=2000)
userBooks = books.filter((bk)=>bk.publish>=2000)
userBooks = books.filter((bk)=>bk.edition>=2000 && bk.genre==='History')


console.log(userBooks);

