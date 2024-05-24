//! 1. swapping values

// let array=[1,2,3,4,5]
// const temp=array[0]
// console.log({temp})
// array[0]=array[4]
// array[4]=temp
// console.log(array) //* [ 5, 2, 3, 4, 1 ]



// let array = [1, 2, 3, 4, 5];
// [array[0], array[4]] = [array[4], array[0]];
// console.log(array); //* [ 5, 2, 3, 4, 1 ]
// let a=1;
// let b=2;
// [a,b]=[b,a]
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

// const element = document.querySelector("#number").valueAsNumber;

// console.log( element);

//! 5. remove duplicates from array

const array1 = [1, 2, 2, 2, 3, 5, 6, 5];

// console.log([...new Set(array1)]); //* [1, 2, 3, 5, 6]

//* 6. compare two arrays by value
const hasSameElements = (a, b) => {
  return a.length === b.length && a.every((v, i) => v === b[i]);
};

// console.log(hasSameElements([1, 2], [1, 2]));  //* true
// console.log(hasSameElements([1, 2,2], [1, 2]));  //*false
// console.log(hasSameElements([1, 1], [1, 1,1])); //*false

//! 7. shuffling array

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort(); //? sort alphabetically
// console.log(fruits) //* [ 'Apple', 'Banana', 'Mango', 'Orange' ]

fruits.reverse(); //? The reverse() method reverses the elements in an array:
// console.log(fruits) //* [ 'Orange', 'Mango', 'Banana', 'Apple' ]

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
// console.log(sorted) //* [ 'Apr', 'Feb', 'Jan', 'Mar' ]
//? note: toSorted() keep original array unchanged but sort() not...
const numbers = [1, 2, 3, 4, 5, 6,2,9,8];
// console.log(numbers.sort()) //* [1, 2, 2, 3, 4, 5, 6, 8, 9]

// console.log(numbers.sort(() => Math.random() - 0.5)); 


// 8. comma operator

// let x = 1;
// x = (x++, x);

// console.log(x);

let y = (2, 3);
console.log(y);

let a = [[1, 2, 3, 4], [3, 4, 5], [5, 6], [7]];

for (let i = 0, j = 3; i <= 3; i++, j--) {
  // console.log("a[" + i + "][" + j + "] = " + a[i][j]); //* a[0][3] = 4
                                                          //* a[1][2] = 5
                                                          //* a[2][1] = 6
                                                          //* a[3][0] = 7
}

// const x = 5;
// console.log(x === '5' ? 'Yes sir' : 'Nope');
// const array = ['', 0, 1, [], false, , 'false'];
// console.log(array.filter(elem => !!elem));


