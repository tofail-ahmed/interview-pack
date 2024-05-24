// const emojis = ["😂", "😊", "😁", "😢", "😜"];
// for(let i=0;i<emojis.length;i++){
//       console.log(emojis[i])
// }

// for(let element of emojis){
//       console.log(element)
// }

//! array and strings are iterable but objects are not...

// let months = ["january", "february", ["march", "april", "may"], "june"];

// for (let element of months) {
//   if (Array.isArray(element)) {
//     months = months.flat();
//     for (let element of months) {
//       console.log(element);
//     }
//   }
// }

// let fullName="TofailAhmedSayem"
// for (let element of fullName){
//       console.log(element)
// }

// console.log(.1+.2) //* 0.30000000000000004 //? because of two diff base
// console.log(.1+.5) //*0.6

// let months = ["may", "june", "july", "april", "sept", "okt", "nov"];
// let numbers = [1, 4, 56, 7, 4, 3, 2];
// const sorterAsc = (arg) => {
//       if (typeof arg[0] === "number") {
//         console.log(arg.sort((a, b) => a - b));
//       } else if (typeof arg[0] === "string") {
//         console.log(arg.sort());
//       } else {
//         console.log("Unsupported data type.");
//       }
//     };
    
sorterAsc(numbers); //? [1,  2, 3, 4,4, 56, 7]
// sorterAsc(months); //? [1,  2, 3, 4,4, 56, 7]
