function getNumber() {
  try {
    // Some code that can throw an error
    // return 1 // it wouldnt return
  } catch {
    // return // it wouldnt return
  } finally {
    return 3
  }
}

console.log(getNumber())

// https://codisity.pl/100-bugow-js/64e0f8f8-ce00-4d01-bdf1-df6d85759a3c
