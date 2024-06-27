const colors=['purple','blue','green'];
const moreColor=['black','white'];
const allColor=[...colors,...moreColor]
// console.log(allColor) //* [ 'purple', 'blue', 'green', 'black', 'white' ]

const copiedArray=[...colors]
// console.log(copiedArray) //* [ 'purple', 'blue', 'green' ]


const newArray=[...colors,'black','white']
// console.log(newArray) //* [ 'purple', 'blue', 'green', 'black', 'white' ]

const originalArray=[10,20,30]
const modifiedArray=[...originalArray]
modifiedArray[1]=25
// console.log(originalArray) //* [ 10, 20, 30 ]
// console.log(modifiedArray) //* [ 10, 25, 30 ]


const originalObject={name:"Sayem",age:27}
const clonedObject={...originalObject}
// console.log(clonedObject) //* { name: 'Sayem', age: 27 }

const personalInfo={name:"Sayem",age:27};
const moreInfo={occupation:'Employee',country:'Bangladesh'}
const mergedObject={...personalInfo,...moreInfo}
// console.log(mergedObject) //* { name: 'Sayem',age: 27,occupation: 'Employee',country: 'Bangladesh' }


const person={name:'Sayem',occupation:'Employee',country:'Bangladesh'}
const updatedObject={...person,email:"asdsd@hshg.com"}
// console.log(updatedObject) //* { name: 'Sayem', occupation: 'Employee', country: 'Bangladesh', email: 'asdsd@hshg.com' }



      
    
      
      
      
      
