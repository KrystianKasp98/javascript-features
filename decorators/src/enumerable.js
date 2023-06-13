function enumerable(value) {
  return function (target, propertyKey, descriptor) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  constructor(message) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

const greeter = new Greeter('everyone');

console.log(greeter.greet());