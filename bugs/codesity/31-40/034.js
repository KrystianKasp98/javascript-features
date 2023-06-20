console.log(NaN == NaN) // false
console.log(NaN === NaN) // false

console.log('-------')

console.log(Number.NaN == Number.NaN) // false
console.log(Number.NaN === Number.NaN) // false

console.log('-------')

console.log(isNaN(NaN)) // true
console.log(Number.isNaN(NaN)) // true

console.log('-------')

console.log(isNaN("123")) // false
console.log(Number.isNaN("123")) // false

console.log('-------')

console.log(isNaN("abc")) // true
console.log(Number.isNaN("abc")) // false

const valueIsNaN = (val) => val !== val

console.log('-------')

console.log(valueIsNaN("123")) // false
console.log(valueIsNaN("abc")) // false

console.log('-------')

console.log(valueIsNaN(NaN)) // true
console.log(valueIsNaN(Number.NaN)) // true

// https://codisity.pl/100-bugow-js/f681cf98-6d5a-4a0c-8245-0eddf7a6a7ea

// NaN is a unique value in js(in above function, because e.g. {}==={} is false, but valueIsNaN({}) is also false). It only returns false if is compared by itself

// NaN !== NaN it's true
