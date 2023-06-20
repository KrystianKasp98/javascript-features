async function getData() {
  const url =
  "https://api.spacexdata.com/v4/history"
  const response = await fetch(url)
  const json = await response.json()

  return json
}

async function processData() {
  const data = await getData()
  console.log(data)
}

processData()

// https://codisity.pl/100-bugow-js/35bf86c2-709d-4277-ac0d-0c74937a59d0
