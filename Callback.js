
CallBacks:
//When one function can take another function as input that is call as callback


CallBacks

 function sum(a,b){
   let value = a+b;
   return value;
 }


 function PrintSum(data){
   console.log(data);
 }

//You can Call a function that is sum but you have to print the sum but you can,t call another function you can take input another function

//You can do tha like this

 function sum(a,b){
let value=a+b;
  PrintSum(value);
 }


//But you have to do with out it


 function sum(a,b,funToCall){
   let value =a+b;
   funToCall(value);
 
 }
 function PrintSum(data){
    console.log(data);
  }

 sum(2,3,PrintSum);


//This is CallBacks

//Another Way of Writing


 function sum(a,b){
 
   function funToCall(data){
     return data;
   }
 let value =a+b;
  
   return funToCall(value);
 }
 function funToCall1(data){
   return data;
 }
 console.log(sum(2,3,funToCall1));



//Basically you are doing this by this



function sum(a,b,funToCall){

let value =funToCall(a+b);
  return value;
}
function funToCall1(data){
  return data;
}
console.log(sum(2,3,funToCall1));


//Examples of Callback

// 1)setTimeOut(function,1*1000)
// 2)setTimeInterval(function,1000)