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


console.log(numbers2.some((number)=>(number>5))) //*true
console.log(numbers2.some((number)=>(number<2))) //*true
console.log(numbers2.some((number)=>(number>10))) //*false
console.log(numbers2.some((number)=>(number<0))) //*false