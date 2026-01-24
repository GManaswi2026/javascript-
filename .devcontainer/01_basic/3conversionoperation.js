//let score ="33"  //not double quotes op is number 
//let score ="33abcd" 
//let score = null
let score = true
console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=>33
//"33abc"=>NaN
//true =>1 ; false=>0

let isloggedin = "abcd"   //false is op; if anything written then true
//let isloggedin = 0;
 let booleanisloggedin =  Boolean(isloggedin)
 console.log(booleanisloggedin);

//1= true ; 0 = false
//"" =>false
//"manaswi" or "1234"  =>true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// operations************************

let value =3
let negValue = -value
//console.log(negValue);
 
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2); power mei
//console.log(2%2);
//console.log(2/2);


let str1 ="hello"
let str2="manaswi"
let str3 = str1+str2+str1;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+ 2 +2); //string first then sko string k trh treat kiya jayega
console.log(1+ 2 +"2");// string last mei then pehle k conversion ho jayega 

console.log(+true);
console.log(+"")
 
let num1 = num2 = num3 = 2+2

let gameCounter =100
++gameCounter;
console.log(gameCounter);

//study prefix and postfix through mdn