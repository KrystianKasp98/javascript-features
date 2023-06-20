const myDog = new Dog()


function Dog() {
  this.name = "Pluto"
}

// instance of class cannot be initialized before class declaration
class Cat {
  constructor() {
    this.name = "Garfield"
  }
}

const myCat = new Cat()

console.log(myDog.name)
console.log(myCat.name)

// https://jqtwrpw1.r.eu-central-1.awstrack.me/L0/https:%2F%2Fcodisity.pl%2F100-bugow-js%2F1342370d-03e0-4f0b-aa22-69e05fc64d53/1/010701885f346c8f-6f8be004-d65d-4af1-a670-26f90fb347ce-000000/5EVKx96a4mJuryAA6cvh54rs4rQ=104
