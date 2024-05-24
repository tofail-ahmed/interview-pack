//! 1. print 1 to 100

for (let i = 1; i <= 100; i++) {
  // console.log(i)
}

//! 2. print odd number less than 100

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    // console.log(i)
  }
}

//! 3.  Print the multiplication table with 7

for (let i = 1; i <= 10; i++) {
  // console.log(`${i} * 7 = ${i * 7}`);
}

//! 4. Print all the multiplication tables with numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  // console.log(`Multiplication table for ${i}:`);
  for (let j = 1; j <= 10; j++) {
    //     console.log(`${i} * ${j} = ${i * j}`);
  }
}

//! 5. Calculate the sum of numbers from 1 to 10
// let sum=0
for (let i = 1; i <= 10; i++) {
  // sum=sum+i
}
//   console.log(sum)

//! 6. Calculate 10!
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial = factorial * i;
}
// console.log(factorial)

//! 7.  Calculate the sum of odd numbers greater than 10 and less than 30
// let sum=0;
// for (let i=11; i<30;i++){
//       if(i%2===1){
//             sum=sum+i
//       }
// }
// console.log(sum)

//! 8. Create a function that will convert from Celsius to Fahrenheit

// const CelsiusToFahrenheit = (Celcius)=>{
//       return ((Celcius*9/5)+32)
// }

// console.log(CelsiusToFahrenheit(36))

//! 9. Create a function that will convert from Fahrenheit to Celsius
// const fahrenheitToCelcius=(fahrenheit)=>{
//       return ((5*(fahrenheit-32))/9)
// }
// console.log(fahrenheitToCelcius(96.8))

//! 10. Calculate the sum of numbers in an array of numbers

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for(let i=0; i<numbers.length; i++){
// sum=sum+numbers[i]
// }
// console.log(sum)

//! 11. Calculate the average of the numbers in an array of numbers

// const numbers=[10,20,30,40,50,60,70 ,80,90,100]
// let sum=0;
// for(let i=0; i<numbers.length; i++){
//       sum=sum+numbers[i]
// }
// function avg(){
//       return (sum/(numbers.length))
// }

// console.log(avg())

//! 12. Create a function that receives an array of numbers and returns an array containing only the positive numbers

// const numbers=[-1,-3,3,3,34,5,6,-5,6,-8,-34]
// const positiveNumbers=[]
// for (let i=0; i<numbers.length; i++){
//       if(numbers[i]>0){
//             (positiveNumbers.push(numbers[i]))
//       }
// }
// console.log(positiveNumbers)

// const positiveNumber=(number)=>{
//       return (number>0)
// }
// const positiveNumbers=numbers.filter(positiveNumber)
// console.log(positiveNumbers)
//! 13. Find the maximum number in an array of numbers

// const numbers=[-1,-3,3,3,34,5,6,-5,6,-8,-34,65];
// let maxNumber=numbers[0];
// for (let i=0;i<numbers.length;i++) {
//       if(numbers[i]>maxNumber){
//             maxNumber=numbers[i];
//       }
// }
// console.log(maxNumber)

//! 14. Print the first 10 Fibonacci numbers without recursion

// function Fibonacci(n) {
//       let a = 0, b = 1, next;

//       console.log(a);
//       console.log(b);

//       for (let i = 2; i < n; i++) {
//           next = a + b;
//           console.log(next);
//           a = b;
//           b = next;
//       }
//   }

//   Fibonacci(10);

//! 15.  Create a function that will return a Boolean specifying if a number is prime

// function isPrime(number) {
//       if (number < 2) {
//         return false;
//       }
//       for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     }

// console.log(isPrime(13))

//! 16. Calculate the sum of digits of a positive integer number
// let number = 59;
// let sum=0;
// let string=number.toString();
// for (let i=0; i<string.length; i++){
//       let digit=parseInt(string[i])
//      sum=sum+digit
// }
// console.log(sum)

//! 17. Print the first 100 prime numbers

// let Prime = [];

// for (let i = 2; Prime.length < 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     Prime.push(i);
//   }
// }

// console.log(Prime);

//! 18. Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

// const isPrime = (num) => {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true
// };
// console.log(isPrime(9))

// const primesAfter=(nPrimes,startAt)=>{
//       let primes=[];
//       for(let num=startAt+1;primes.length<nPrimes;num++){
//             if(isPrime(num)){
//                   primes.push(num)
//             }
//       }
//       return primes
// }
// console.log((primesAfter(5,10)))