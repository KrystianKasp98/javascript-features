// 1
if ([]) {
  console.log("[]") // will run
}

if (["0"]) {
  console.log('["0"]') // will run
}

// 2
if ([] == false) {
  console.log("[] == false") // will run
}
if (["0"] == false) {
  console.log('["0"] == false') // will run
}

// 3
if ([] === false) {
  console.log("[] === false")
}
if (["0"] === false) {
  console.log('["0"] === false')
}


// the best way to check if array is empty
if ([].length === 0) {
  console.log("Array is empty")
}

// https://codisity.pl/100-bugow-js/b799ee88-187a-41d3-8a50-7e5b422aa2e2
