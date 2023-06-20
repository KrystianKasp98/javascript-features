setTimeout(() => {
  console.log("setTimeout") // 4
})

new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise setTimeout") // 5
  })
}).then((response) => {
  console.log(response)
})

new Promise((resolve) => {
  resolve("Promise")
}).then((response) => {
  console.log(response) // 2
})

queueMicrotask(() => {
  console.log("Microtask") // 3
})

console.log("Global context") // 1

// https://codisity.pl/100-bugow-js/b99780c7-a6bb-486a-a223-b9fc7979d8a2