const Car = {
  color: "red",
  drive() {
    console.log(this)
  },
}

Car.drive()

const driveMyCar = Car.drive.bind(Car);

driveMyCar()

// https://codisity.pl/100-bugow-js/fa73295e-34e5-4f5c-9098-291e3770e4b0
