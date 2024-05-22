//! 1. swapping values

// let array=[1,2,3,4,5]
// const temp=array[0]
// console.log({temp})
// array[0]=array[4]
// array[4]=temp
// console.log(array) //* [ 5, 2, 3, 4, 1 ]



let array = [1, 2, 3, 4, 5];
[array[0], array[4]] = [array[4], array[0]];
// console.log(array); //* [ 5, 2, 3, 4, 1 ]
let a=1;
let b=2;
[a,b]=[b,a]
// console.log({a,b}) //* { a: 2, b: 1 }

//! 2. copy to clipboard
function copyToClipBoard(str) {
      const element = document.createElement("textarea");
      element.value = str;
      document.body.appendChild(element);
      element.select();
      document.execCommand("copy");
      document.body.removeChild(element);
    }
    
    function handleClick() {
      let text = document.querySelector("#text");
      copyToClipBoard(text.innerText);
    }


    //! 3. destructuring aliases

    const language={
      name:"Javascript",
      founded:1995,
      founder:"Brendon Eich"
    }
    const {name:Language_name,founder:Language_founder}=language;

//   console.log({Language_name,Language_founder}) //* { Language_name: 'Javascript', Language_founder: 'Brendon Eich' }


//! 4. get value as data type

const element = document.querySelector("#number").valueAsNumber;

console.log( element);