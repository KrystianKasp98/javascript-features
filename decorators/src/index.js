function readonly(target, propertyKey, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function editable(target, propetyKey, descriptor) {
  console.log({target}, {propetyKey}, {descriptor});
  descriptor.writable = true;
  return descriptor;
}

class Example {
  @editable
  a = 2
  @readonly
  b = 5
}

const e = new Example();
e.a = 1;
// e.b = 2; // it's read only

console.log(e);

