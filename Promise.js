promises


 const fs=require("fs")
 function AnuReadFile(){
   return new Promise(function(resolve){
     fs.readFile("a.txt","utf-8",function(err,data){
       resolve(data)
     });
   })

 }
 function Done(data){
   console.log(data)
 }
 AnuReadFile().then(Done)
 console.log("Hello")

//Understanding the promises more 
 function myOwnAsyncFunc(fn,duration){
   setTimeout(fn,duration)
 }
  myOwnAsyncFunc(function print(){
   console.log("Hello")
 },1000);
//This is wrapping the asynchronus function but it will lead to callback hell

//CallbackHell

setTimeout(function(){
    console.log("Hello")
    setTimeout(function(){
      console.log("Hello")
    },2000)
  },1000);
//   This Nesting callbacks is called the callbackhell to avoid this we can use promises
//   In non promisified function you take function as an input but return nothing
//   In promisified function you don't take function as an input but return the promise
  
  function mySetTimeOut(duration){
    let p=new Promise(function(resolve){
      setTimeout(resolve,duration)
    })
    return p
  }
  const a =mySetTimeOut(1000)
  console.log(a)//it will give promise<pending>
  a.then(function(){
    console.log("Hello world")
  })