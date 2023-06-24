// Number(true) = 1, Number(false) = 0
console.log(1 < 2 < 3) // 1 < 2 => true, Number(true) < 3 => true
console.log(0 < 1 < 2) // 0 < 1 => true, Number(true) < 2 => true

console.log(3 > 2 > 1) // 3 > 2 => true, Number(true) < 1 => false
console.log(2 > 1 > 0) // 2 > 1 => true, Number(true) < 0 => true

// https://codisity.pl/100-bugow-js/c58e01be-7092-47d4-ba65-cffd25192ba4
