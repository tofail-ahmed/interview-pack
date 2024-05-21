1. //Remove falsy or truthy value from value from array
const miscellaneous=["sayem",{"age":28,"address":"chittagong"},["mashfiq","majed","hossain"],null, NaN, undefined," ",""]

const truthy=miscellaneous.filter(Boolean) // [ 'sayem',{ age: 28, address: 'chittagong' },[ 'mashfiq', 'majed', 'hossain' ],' ']
      
const falsy=miscellaneous.filter((value)=>!Boolean(value)); //[ null, NaN, undefined, '' ]


2. // Convert any value to boolean
// Using !! in front of any value

// console.log(!!"mashrafi"); // true
// console.log(!!1); // true
// console.log(!!0); // false
// console.log(!!undefined); // false
// console.log(!!NaN); //false
// console.log(!!" "); //true
// console.log(!!null); //false
// console.log(Boolean("")); //false

// We can also use Boolean() to achieve same
// console.log(Boolean("mashrafi")); // true

3. 