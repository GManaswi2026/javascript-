//Dates 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());

console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //date is obj in js

//let mycreatedDate = new Date(2023,0,23) //month start form zero of array in js
// let mycreatedDate = new Date(2023,0,23,5,3) 
// let mycreatedDate = new Date("2023-01-14") //in yy/dd/mm the date start from first
let mycreatedDate = new Date("01-14-2023")  //mm/dd/yy

// console.log(mycreatedDate.toDateString());

// console.log(mycreatedDate.toLocaleString());

let myTimeStamp =Date.now()
console.log(myTimeStamp);
console.log(mycreatedDate.getTime()); //.gettime first jan se value dega in ms
console.log(Date.now()/1000);  //   /thousand give decimal value
console.log(Math.floor( Date.now()/1000)); 

let newDate=new Date()
console.log(newDate);
// console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})


