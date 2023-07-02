const object = {};
// object?.property = "value"; // ?. chaining can't be used to set value only for read
if (object) {
  object.property = "value";
}

console.log(object);
