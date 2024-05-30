const numbers=[1,2,3]
// console.log(numbers.length) //* 3
// console.log(numbers.push(4)) //* 4

// numbers.push(4)
// console.log(numbers) //* [ 1, 2, 3, 4 ]

// numbers.unshift(0)
// console.log(numbers) //* [ 0,1, 2, 3, 4 ]

// numbers.pop()
// console.log(numbers) //* [ 1, 2 ]

// numbers.shift()
// console.log(numbers) //* [ 2, 3 ]

// console.log(numbers.at(1)) //* 2

// console.log(numbers.indexOf(3)) //* 2

// console.log(numbers.includes(1)) //* true
// console.log(numbers.includes(4)) //* false

// console.log(numbers.map((number)=>(number*number))) //* [ 1, 4, 9 ]

// console.log([1,2,3,4,5,6,7,8,9].filter((number)=>(number%2===0))) //* [ 2, 4, 6, 8 ]

const numbers2=[1,2,3,4,5,6,7,8,9]

// console.log(numbers2.every((number)=>(number>5))) //* false
// console.log(numbers2.every((number)=>(number>0))) //* true
// console.log(numbers2.every((number)=>(number>2))) //* false


// console.log(numbers2.some((number)=>(number>5))) //*true
// console.log(numbers2.some((number)=>(number<2))) //*true
// console.log(numbers2.some((number)=>(number>10))) //*false
// console.log(numbers2.some((number)=>(number<0))) //*false

// console.log(numbers2.fill(5)) //* [5, 5, 5, 5, 5,5, 5, 5, 5]
// console.log(numbers2.fill(10)) //* [10,10,10,10,10,10,10,10]
// console.log(numbers2.fill(-10)) //* [-10,-10,-10,-10,-10,-10,-10,-10,-10]

// console.log(numbers2.reduce((a,c)=>a+c,0)) //* 45

// console.log(numbers2.concat([11,22])) //*    [1, 2, 3, 4,  5, 6, 7, 8, 9, 11,22]

// console.log(numbers2.reverse()) //* [9, 8, 7, 6, 5, 4, 3, 2, 1]
const numbers3=[2,8,4,9,2,3,11,99,29]
// console.log(numbers3.sort()) //! [11, 2, 2, 29, 3, 4, 8, 9,99] //! not work...
// console.log(numbers3.join('+')) //* 2+8+4+9+2+3+11+99+29

const numbers4=[1,2,3,4,5,[2,3,4,[2,5,6]]]
// console.log(numbers4.flat(Infinity)) //* [ 1, 2, 3, 4, 5, 2, 3, 4,  2, 5, 6  ]

// console.log(numbers4.findIndex((number)=>number===2)) //* 1

// console.log(numbers3.toString()) //* 2,8,4,9,2,3,11,99,29

// console.log(numbers3.slice(3,7)) //* [ 9, 2, 3, 11 ]
// console.log(numbers3) //* [2,8,4,9,2,3,11,99,29]

// console.log(numbers3.splice(3,7)) //*[ 9, 2, 3, 11, 99, 29 ]
// console.log(numbers3) //* [ 2, 8, 4 ]

// console.log(Array.isArray(numbers4[5][3])) //*true
// console.log(numbers4.map((number)=>(typeof number== "number"))) //* [ true, true, true, true, true, false ]


// console.log(Array.from("1234")) //* [ '1', '2', '3', '4' ]
// console.log(Array.from("1234").map((number)=>(parseInt(number)))) //* [ 1, 2, 3, 4 ]
