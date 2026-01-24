//datatypes - how they are stored in memory and accessed (2 types)
//primitive  are of 7 types :string,number,boolean,null,undefined,symbol,BigInt 
//  non primitive (or refrence types)  array,objects,functions

const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); //both are not same 

const bigNumber = 2382479832759735n //when last mei n added it become bigInt

//non primitive
//array,objects,functions

const heros = ["shaktiman","spiderman"]
//variable k sath bhi declare kr skte h 
let myOBj ={  //curly braces k andr jitna bhi value h woh object h of any datatype 
    name:"mannu",
    age:"21",
}
//function stored in variable function(){}
const myFunction = function(){
    console.log("hello world");   
}
console.log(typeof bigNumber);



//type of watch 