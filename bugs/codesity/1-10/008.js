// convert to class
// class Car {
//   constructor(color) {
//     this.color = color;
//     this.mileage = 0;
//   }

//   drive(distance) {
//     this.mileage += distance;
//   }
// }

// const myCar = new Car("red");
// myCar.drive(1000);

// console.log(myCar);

// replace arrow function(that lose relation with object) by function

function Car(color) {
  this.color = color
  this.mileage = 0
}

Car.prototype.drive = function(distance) {
  this.mileage += distance
}

const myCar = new Car("red")
myCar.drive(1000)

console.log(myCar)

// https://jqtwrpw1.r.eu-central-1.awstrack.me/L0/https:%2F%2Fcodisity.pl%2F100-bugow-js%2F111bba83-a18f-4245-ae3d-66e71e46db03/1/010701883601b1a3-50bba13c-34c3-4dae-93ba-25247ad5471b-000000/QEKiJ4wVAgEnq8F0FibV0FWdxjM=103