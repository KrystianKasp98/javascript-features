function sum(a, b, c) {
  return a + b + c
}

// in js we can't overload the function, but we can overwrite it
function sum(a, b) {
  return a + b
}

console.log(sum(1, 2))

// https://codisity.pl/100-bugow-js/14a8fddb-055c-4504-841b-cb3f1ba5d802
