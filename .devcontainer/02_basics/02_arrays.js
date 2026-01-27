const marvel_heros = ["thor","ironman","hulk"]
const dc_heros = ["superman","flash","batman"]

//  marvel_heros.push(dc_heros)        //push results dc_heros poore ko array mei daal diya 
//existing array pr push work krta h 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

 const allhero = marvel_heros.concat(dc_heros) //return a new array without modifying any existing array
//concat return a new array
 console.log(allhero);

 // to spread 
 const newheros = [...marvel_heros,...dc_heros] //concat will concatinate one value spread will concatenate multiple values
// console.log(newheros);

const another_array = [1,2,3,,[4,5,6],7,[6,7,[4,5]]]

const understandable_array = another_array.flat(Infinity)
console.log(understandable_array);
console.log(Array.isArray("manaswi"))  //asking id this array
console.log(Array.from("manaswi"))  //connversion to  array  

//need to specify keys array or values array should be formed as we are not giving info its giving an empty arrays
console.log(Array.from({name:"manu"}))  //interesting case


let score1 =100
let score2= 200
let score3= 300

//return new array from set of elements
console.log(Array.of(score1,score2,score3));

