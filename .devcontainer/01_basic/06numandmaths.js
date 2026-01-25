const score =400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  //shift+alt+downward

const otherNumber=123.849389
console.log(otherNumber.toPrecision(3));

const user = 10000000000
console.log(user.toLocaleString('en-IN'));

//+++++ Maths+++++++++++++=

console.log(Math);
console.log(Math.abs(-4)); //minus value convert into positive values
console.log(Math.round(8.7));
console.log(Math.ceil(8.7)); //top value jara sa bhi 8 se jyada it give 9
console.log(Math.floor(5.9)); //low value it gives
console.log(Math.min(5.9,4.8,4.7)); 
console.log(Math.max(5,7,9,40,13)); 


console.log(Math.random()); //value always between 0 and 1 
console.log((Math.random()*10) + 1);  //value shift to left
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

// range bet 10 and 20 max-min multiplies +1to avoid  zero  than +min ki itna toh req hai hi
console.log(Math.floor( Math.random() * (max - min + 1))+ min);






