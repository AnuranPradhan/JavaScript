
//Arrow function

//normal function
function sum(a,b){
    return a+b;
}

//Arrow function
const sum=(a,b)=>{
 return a+b;
}

console.log(sum(2,3))

//Map
const arr=[1,2,3,4,5]

const newArr=arr.map(function double(val){
 return val*2;
});

//in arrow function

const newArr1=arr.map((value)=>value*2);

console.log(newArr1)

//filter

console.log(arr.filter((value)=>{
            if(value%2==0)return true
            else return false
          }));

//or

console.log(arr.filter((value)=>value%2==0));
