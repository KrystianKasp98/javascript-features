console.log(Number("123")) // 123
console.log(parseInt("123")) // 123

console.log('---------------1')

console.log(Number("")) // 0
console.log(parseInt("")) // NaN

console.log('---------------2')

console.log(Number("  0  ")) // 0
console.log(parseInt("  0  ")) // 0

console.log('---------------3')

console.log(Number("  0 bar  ")) // NaN
console.log(parseInt("  0 bar  ")) // 0

console.log('---------------4')

console.log(Number("  foo 0 bar  ")) // NaN
console.log(parseInt("  foo 0 bar  ")) // NaN

console.log('---------------5')

console.log(Number(null)) // 0
console.log(parseInt(null)) // NaN

console.log('---------------6')

console.log(Number(undefined)) // NaN
console.log(parseInt(undefined)) // NaN

console.log('---------------7')

console.log(Number(true)) // 1
console.log(parseInt(true)) //NaN

console.log('---------------8')

console.log(Number(0b0111)) // 7
console.log(parseInt(0b0111)) // 7

console.log('---------------9')

console.log(Number("0b0111")) // 7
console.log(parseInt("0b0111")) // 0

// https://codisity.pl/100-bugow-js/bdf71c4c-20af-48f1-a556-386ecddf1fc4
