setTimeout(() => {
  console.log("Infinity")
}, Infinity)

setTimeout(() => {
  console.log("24.8 days")
}, 2147483647)

setTimeout(() => {
    console.log("Immediately")
}, 0)

// timeout - 2 arg of setTimeout is 32 bit number so range for this arg is from -2147483647 to 2147483647, so infinity or numb overrange will be call asap
// all browsers keep in memory delay value up to 32 bit int number

// https://codisity.pl/100-bugow-js/c5fc2e0b-19f9-47c2-8ba3-73ff395a3fd6
