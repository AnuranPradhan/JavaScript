//Basic ApIs

//String

//GetLength
let str ="Anuran Pradhan"
console.log(str.length)

//FindIndexOf

let str1="Hello world world"
console.log(str1.indexOf("world"))


//LastIndexOf

let str2="hello world world"
console.log(str2.lastIndexOf("world"))

//SliceOfString

let str3="HelloAnuran"
console.log(str3.slice(0,5))//will the character fron the 0th to 4 th index not the fifth one

//Method of slice
function cutIt(str,firstIndex,LastIndex){
  let newStr=""
 for(i=firstIndex;i<LastIndex;i++){
   newStr=newStr+str[i]
 }
  return newStr;
}
console.log(cutIt("HelloAnuran",0,5))

//Substring
let str4="HelloAnuran"
console.log(str4.substr(2,5))//It will Print lloAn

//Method of substr
function cutIt1(str,firstIndex,SecondIndex){
  let newStr=""
  for(i=firstIndex;i<firstIndex+SecondIndex;i++){
    newStr=newStr+str[i]
  }
  return newStr;
}
console.log(cutIt1("HelloAnuran",2,5))

//Replace
let str5="Hello Anuran"
console.log(str5.replace("Anuran","Javascript"))

//Split
let str6="Hello Anuran"
console.log(str6.split(" "))

//trim
let str7="  Hello Anuran  "
console.log(str7.trim(" "))//it will only trim the first and last spaces

//toUpperCase
let str8="Hello Anuran"
console.log(str8.toUpperCase())

//toLowerCase
let str9="Hello Anuran"
console.log(str9.toLowerCase())

//Number

console.log(parseInt("42.5"))
console.log(parseInt("42"))
console.log(parseInt("42px"))
console.log(parseInt("px42"))//This Will Give NaN anything before any number and middle pf the number will give NaN

console.log(parseFloat("42.5"))
console.log(parseFloat("42"))
console.log(parseFloat("42px"))
console.log(parseFloat("px42"))


//Array

const array=[2,3,4,5,6]
//to do operation in last index
array.push(6)
array.pop()
console.log(array)

//to do operation on first index
array.unshift(6)
array.shift()
console.log(array)

//concat

const array1=[1,2,3,45]
const array2=[6,7,8,9]
const array3=array1.concat(array2)
console.log(array3)//will not change the original array

const ini=[1,2,3,4]
function count(val){
  console.log(val)
}
ini.forEach(count)//for each element of the array the function will be called and the values will be printed

//Class

//Rather than making differnt objects for each of the students we can make a class and use it for all the students


class Animal{
  constructor(name,color,bark){
    this.name=name;
    this.color=color;
    this.bark=bark;
  }

  static voice(){
  console.log("I am an animal") //this is same for all the objects 
  }
speak(){
  console.log("this bark like "+this.bark)
}
  
}

const dog=new Animal("rocky","black","bhaw bhaw")
const cat=new Animal("michi","orange","mew mew")
console.log(dog)
console.log(cat)
dog.speak()
cat.speak()
Animal.voice()

//Date Methods

const currdate=new Date()

console.log(currdate)


console.log(currdate.toString())

//day
console.log(currdate.getDate())
//month
console.log(currdate.getMonth()+1)
//Year
console.log(currdate.getFullYear())
//Hour
console.log(currdate.getHours())
//Minutes
console.log(currdate.getMinutes())
//Seconds
console.log(currdate.getSeconds())
//Milliseconds till 1970
console.log(currdate.getTime())
//to set the time
currdate.setFullYear(2022)
console.log(currdate)
//set new date
const date1=new Date(2022,11,2)
console.log(date1)
console.log(date1.getDate())

//Clock
function clock(){
  console.log(currdate.getHours()+":"+currdate.getMinutes()+":"+currdate.getSeconds())
}
// setInterval(clock,1000)


//Getting the time a loop take to run for a particular input
const before=new Date().getTime()
let a =0;
for(let i=0;i<1000000000;i++){
  a=a+i
}
const after=new Date().getTime()
console.log(after- before)

//converting object to string and string to object

const obj={
  key1:"value",
  key2:"value2",
  key3:"value3"
  
}
console.log(obj)
console.log(obj["key2"])
console.log(JSON.stringify(obj))

const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

console.log(sampleJSONString)
console.log(sampleJSONString.slice(2,5))
console.log(JSON.parse(sampleJSONString))

//Math

let rounded = Math.round(4.6);
console.log("After round():", rounded);

let ceiling = Math.ceil(4.5);
console.log("After ceil():", ceiling);

let flooring = Math.floor(4.5);
console.log("After floor():", flooring);

let randomValue = Math.random();
console.log("After random():", randomValue);

let maxValue = Math.max(5, 10, 15);
console.log("After max():", maxValue);

let minValue = Math.min(5, 10, 15);
console.log("After min():", minValue);

let powerOfTwo = Math.pow(3, 2);
console.log("After pow():", powerOfTwo);

let squareRoot = Math.sqrt(5);
console.log("After sqrt():", squareRoot);

//Objects
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
//Keys
console.log(Object.keys(sampleObject))
//Values
console.log(Object.values(sampleObject))
//Entries
console.log(Object.entries(sampleObject))
//HasOwnProperty
console.log(sampleObject.hasOwnProperty())
//Object.assign
newObj = Object.assign({}, obj, { newProperty: "newValue" });
console.log(newObj)
