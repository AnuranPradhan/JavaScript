//AsysncFunction
//Functions which  wait for the execution of the other function

//Synchronus Function
function syncsleep() {
    let a = 1;
    for (let i = 0; i < 10000000; i++) {
      a++;
    }
    console.log(a)
  }
  syncsleep();// the execution will wait for this function to finish
  console.log("Hello");
  
  //Asynchronus function
  
  
  setTimeout(syncsleep, 1000); //the execution will not wait for this function to finish
  console.log("Hello");


 //file system module

  const fs =require("fs")

  fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data)
  })
  console.log("hello")//this will run first and then the read file will run

 //Work of the asynchronus function behind the scene
 //Suppose this is the code
 console.log("First run")
 setTimeout(function print(){
   console.log("Hi  Ther Dear")
 },5000)
 setTimeout(function print(){
   console.log("Hi  Ther Dear")
 },1000)
 let b=1;
 for(let i=0;i<10000000;i++){
   b++;
 }
 console.log(b)


//  Here when the javascript thread will run it will go through the loop where all 
// codes will be push and poped from the call stack when it will reach the setTimeOut
// api it will prosses it's work and after that it will store in the callback queue
// after the loop finishes running it will be removed from the stack then the function with less time willgo stack and will be removed first 


//creating my own asynchronus function 


//It is actually a wrapper on the top of the asynchronus function
 const fs =require("fs")
 function AnuReadFile(cb){
   fs.readFile("a.txt","utf-8",function(err,data){
     cb(data)
   });
 }

 function doNno(data){
   console.log(data)
 }
 AnuReadFile(doNno)
 console.log("Hello")
