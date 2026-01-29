// singleton (constructor se bnega )
//object.create (constructor methods)

// object literals


//to declare symbol
 const mySym = Symbol("key1")

//comma mandatory   ,this is object literal
const jsUser = {
    name:"manaswi",
    age : 16,
    email:"manaswi@google.com",
    location :"andhra",
  //  mySym:"mykey1",  here mysym act as astring, if we want to use it as a symbol then write it in square brackets
   
    [mySym] :"mykey1",   //symbol as key
    isLoggedIn: false,
    lastLoggedinDays:["Monday","Saturday"]   
}

//values accessed by dot notation and bracket notation
console.log(jsUser.location);  // in dot no  need to take access as a string
console.log(jsUser["location"]); //when in brackets strings k trh access lene ki jarurat h 
console.log(jsUser["name"]);
    console.log(jsUser[mySym]);  //accessing symbol key
console.log(typeof jsUser[mySym]);  //also access symbol in square brackets only

//object value accessed by dot notation ,overright values by eqaual to

jsUser.email= "manu@yahoo.com"

//freeze used so no one can change the values of object

// Object.freeze(jsUser)
jsUser.email="manu@chatgpt.com"  // will not reflect as object is freezed above 
console.log(jsUser)

jsUser.greeting = function(){
    console.log(`hello js users,${this.name}`); //refering to the name automatically
    
}
jsUser.greetingtwo = function(){
    console.log("hello js users");
    
}
console.log(jsUser.greeting())
console.log(jsUser.greeting) //[Function (anonymous)]