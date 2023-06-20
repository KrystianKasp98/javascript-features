// accumulatior is something like SUM(index_initialValue-index_n-1), when currentValue has index = n
function reducer(accumulator, currentValue) {
  ++currentValue
  return accumulator + currentValue
}

const numbers = [1, 2, 3] // 2+3+4
const sum = numbers.reduce(reducer, 0) //reduce need second argument- index count

console.log(sum)

// https://codisity.pl/100-bugow-js/17c27ac8-01d9-463d-84b4-f81cee835696