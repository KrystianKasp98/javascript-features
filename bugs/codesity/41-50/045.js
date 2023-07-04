const numbers = [10, 20, NaN, 30, null, null]

console.log(numbers.includes(NaN)) // true
console.log(numbers.includes(30)) // true
console.log(numbers.includes(null)) // true

// indexOf() searches by comparing ===, NaN === NaN is false
// console.log(numbers.indexOf(NaN)) // -1
console.log(numbers
  .findIndex((number) => Number.isNaN(number))); // 2
console.log(numbers.indexOf(30)) // 3
console.log(numbers.indexOf(null)) // 4

// https://codisity.pl/100-bugow-js/71c6322b-f4cb-4ab0-9497-0b618c975d01
