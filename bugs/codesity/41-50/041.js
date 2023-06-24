const str1 = "Hello World"
const str2 = `${"Hello World"}`
const str3 = String("Hello World")
const str4 = new String("Hello World")

console.log(str1 === "Hello World") // true
console.log(str2 === "Hello World") // true
console.log(str3 === "Hello World") // true
console.log(str4 === "Hello World") // false
console.log(str4.toString() === "Hello World") // true

// https://jqtwrpw1.r.eu-central-1.awstrack.me/L0/https:%2F%2Fcodisity.pl%2F100-bugow-js%2F16de4343-9b81-49c5-92ea-e3e6b377132f/1/01070188dff36a7b-01f796f7-86fd-4d42-8d2c-87361436a6c9-000000/gXRoOwylP1AbyGT8sVhxhKv9wmg=108
