const name = "mannu"
const repoCount = 1
//console.log(name+ repoCount + "  value");


//string interpolation 
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//string -key value pair
// new is object and  string as constructor 
const gameName = new String('shajh-sman-nu')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //position find out which char 
console.log(gameName.indexOf('n'));

//storing in new variable newString  and divide it into substring give start number and end number
const newString = gameName.substring(0,4) //no neg value given
console.log(newString);

const anotherString = gameName.slice(-8,4) //i slice can give neg no also
console.log(anotherString);

const newStringone = "   hitesh  "
console.log();
console.log(newStringone);
console.log(newStringone.trim()); //trim the spaces 


const url ="https://mannu.com/manaswi%20chaoudhary"
console.log(url.replace('%20','-'))    //%20 will replace by dash
console.log(url.includes('sunday'))


console.log(gameName.split('-'));    //split(seperator,limit)



//ndn string consept

