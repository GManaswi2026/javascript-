//array

const myArr = [0,1,2,3,4,5]  //in js array are resizable and contain mix of datatypes
const heros = ["spiderman","hulk","thor"]
console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);
 
//array method 

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //last value in arr removed

myArr.unshift(9)    //adds one or more elements to the start of an array and returns the new length.
myArr.shift()   //no parameter needed to given    //removes the first element from an array and returns it

console.log(myArr);
console.log(myArr.indexOf(9));  //if value not exist then -1 is op 
console.log(myArr.includes(9)); //0p is in boolean form 
//join -array ko join anad string mei connvert kr dega
// const newArr = myArr.join()
// console.log(typeof newArr);
// console.log(myArr);
// console.log(newArr);

//slice(return copy of section of array)..........returns a new array by extracting elements; does NOT change the original array
console.log("a",myArr);
const arr1 = myArr.slice(0,3) //0,1,2 included 3 not included as op
console.log(arr1);
console.log("b",myArr);

//splice (change the original array / ......adds/removes/replaces elements in an array; DOES change the original array. )
const arr2 = myArr.splice(1,3)
console.log("c",myArr); //removed 1,2,3 from the arr , print0,4,5
console.log(arr2); //removed part 1,2,3





