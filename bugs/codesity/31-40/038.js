const now = new Date()

const months = new Map([
  [0, "January"],
  [1, "February"],
  [2, "March"],
  [3, "April"],
  [4, "May"],
  [5, "June"],
  [6, "July"],
  [7, "August"],
  [8, "September"],
  [9, "October"],
  [10, "November"],
  [11, "December"],
])

const weekdays = new Map([
  [0, "Sunday"],
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
])

console.log(months)

console.log(weekdays)

console.log(now.toISOString())
console.log(now.getDate())
console.log(months.get(now.getMonth()))
console.log(weekdays.get(now.getDay()))

// https://codisity.pl/100-bugow-js/5838b978-3b1c-433d-b118-9801923593e0
