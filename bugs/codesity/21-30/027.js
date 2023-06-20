"use strict"

// use strict doesn't allow to declare functions/variables in coditions and calling them outside

if (true) {
    function getFirst() {
    console.log(1)
  }
}

if (false) {
  function getSecond() {
    console.log(2)
  }
}

getFirst()
getSecond()

// https://codisity.pl/100-bugow-js/39272e37-d6ce-4e24-bb1b-b8476234fdcc