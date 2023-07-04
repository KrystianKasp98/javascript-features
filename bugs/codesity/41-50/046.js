const myObj = {
  toString: () => "orange",
  valueOf: () => "apple",
}

console.log(String(myObj)) // orange
console.log("".concat(myObj)) // orange
console.log("" + myObj) // apple
console.log(`${myObj}`) // orange

// https://codisity.pl/100-bugow-js/3d3e0d19-47d7-4f73-a43f-bc6deaf3cc5d
