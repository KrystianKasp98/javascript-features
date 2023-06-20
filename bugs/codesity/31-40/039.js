console.log(false || true) // true
console.log(true || false) // true
console.log("false" || "true") // 'false'

console.log('-----------1')

console.log(undefined || null) // null
console.log(null || undefined) // undefined

console.log('-----------2')

console.log(NaN || undefined) // undefined
console.log(undefined || NaN) // NaN

console.log('-----------3')

console.log("" || "not empty") // 'not empty'
console.log(" " || "not empty") // ' '

console.log('-----------4')

console.log(0 || "not zero") // 'not zero'
console.log("0" || "not zero") // '0'

console.log('-----------5')

console.log([] || "not empty array") // []
console.log({} || "not empty object") // {}
console.log(false || " " || alert("!")) // ' '

console.log('-----------6')

// https://codisity.pl/100-bugow-js/fbd04755-cc69-4e14-ba17-5172fba6d6bf
