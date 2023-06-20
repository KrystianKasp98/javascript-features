let firstName = new String("Brendan")
let lastName = String("Eich")
let user = { id: 1, admin: true }
let numbers = [1, 2, 3]
let nothing
let empty = null
let greet = function () { return "Hi!" }
let greeting = new greet()

console.log({firstName}, "object" === typeof firstName)
console.log({lastName}, "object" === typeof lastName)
console.log({user}, "object" === typeof user)
console.log({numbers}, "object" === typeof numbers)
console.log({empty}, "object" === typeof empty) // its js bug that typeof null = object
console.log({nothing}, "object" === typeof nothing)
console.log({greet}, "object" === typeof greet)
console.log({greeting}, "object" === typeof greeting)

// https://codisity.pl/100-bugow-js/52fbfe20-45e9-4a02-adc1-cb03d30fb6e9
