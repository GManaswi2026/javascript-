// console.log(2==1);  ctrl+/ comment at once
// console.log(2<=1);
// console.log(2>=1);

// console.log( "2" > 1); change in data type toh problem h
// console.log("02" >= 1);


//avoid these types of conversion 
console.log(null>0);       
console.log(null == 0);
console.log(null >= 0);


//avoid these types of conversion 
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//===
console.log("2" === 2); //strictly equality opeartors


//++++++++++++++++++++++++++

//memories two types stack and heap memory
//stack(primitive),heap(non primitive)
//stack mei variable copy
//heap mei refrence(joh bhi changes original value mei hi hongi) of original value

let myName = "g.manswi"
let anothername = myName
anothername = "shannn"
console.log(myName);
console.log(anothername);


let user = {
    email: "user@google.com"

}

let userTwo = user

userTwo.email = "mannu@gmail.com"

console.log(user.email)
console.log(userTwo.email);
