// const tinderUser = new Object()       ...singelton object
const tinderUser ={}  //non singelton object

tinderUser.id ="12345"
tinderUser.name ="manaswi"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser ={
    email:"suman@gamil.com",
    fullname:{
        userfullname:{
            firstname:"suman" ,
        lastname:"mehta"
           }
    }
}

console.log(regularUser.fullname);

//objects k andr objects ko dot daalkr acess kr skte h 
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2} 


//The first source object from which to copy properties.


//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}  //spread operator (mostly used nowadays)
// console.log(obj3);

const users = [
    {
        id:1,
        email:"manu@mail.com"
    },
    {
        id:1,
        email:"manu@mail.com"
    },
    {
        id:1,
        email:"manu@mail.com"
    }

]


users[1].email  //first value access of array of objects
console.log(tinderUser);
console.log(Object.keys(tinderUser));  //keys in array form 
console.log(Object.values(tinderUser));  
console.log(Object.entries(tinderUser));  //array k andr array in which first is key and second is value 

//to ask if this obj is present or not 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));