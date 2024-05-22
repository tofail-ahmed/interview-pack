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

3. // Resizing any array
let animals = ["🐕", "🐒", "🦊", "🐅"];

animals.length=2
// console.log(animals)  [ '🐕', '🐒' ]

4. // How to flattern a multi-dimensional array
let smileys = ['🥰', ['😄', '😃'], '😉', ['🥲', '😑']];
// console.log(smileys.flat()) [ '🥰' , '😄', '😃', '😉', '🥲' , '😑' ]

// Multi level array
let smileys2 = ['🥰', ['😄', '😃', ['🥲', '😑']], '😉'];
// console.log(smileys2.flat()) [ '🥰' , '😄', '😃', [ '🥲' , '😑' ], '😉' ]
// console.log(smileys2.flat(Infinity)) [ '🥰' , '😄', '😃', '🥲' , '😑', '😉' ]

5. // Short conditionals
const captain = "Mashrafi";

// Instead of doing this
if(captain === "Mashrafi") {
      // console.log("❤️");
  }

  // We can use &&
captain === "Mashrafi" && 
// console.log("❤️");

// And instead of doing this
if(captain !== "Mashrafi") {
  console.log("😡");
}

  // We can use ||
//   captain === "Mashrafi" || console.log("😡");

  6. // Replace all occurances of a string
  const quote = "React is a JS framework & this framework is the most popular front-end framework right now";

  // Replace all occurances of 'framework' with 'library'
//   console.log(quote.replace(/framework/g, "library")); // React is a JS library & this library is the most popular front-end library right now



7. // Log values with variable names smartly
const library1 = "jQuery";
const library2 = "React";

// Instead of doing this
// console.log(`library1 - ${library1}`); // library1 - jQuery
// console.log(`library2 - ${library2}`); // library2 - React

// We can do this
// console.log({ library1 }); // {library1: 'jQuery'}
// console.log({ library2 }); // {library2: 'React'}

8. // Know performance of a task
// We can wrap our task with performance.now()

const startTime = performance.now();

for(let i = 0; i <= 50; i++) {
    console.log(i);
}

const endTime = performance.now();

// console.log(`loop took ${endTime - startTime} milliseconds to finish`);