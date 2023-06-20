// fetch("https://api.spacexdata.com/v4/404")
//   .then((response) => {
//     console.log('response:', response);
//     if (!response.ok) {
//       throw new Error('Response not ok', {
//         cause: response
//       })
//     }
//     return response.json()
//   })
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((error) => {
//     console.log({error});
//     if (error.cause.status === 404) {
//       return console.error("Page not found")
//     }

//     return console.error(error)
// })

const init = async () => {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/404");
    if (!response.ok) {
      throw new Error('Response not ok', {
        cause: response
      });
    }
  } catch (error) {
    console.log(error)
    if (error.cause.status === 404) {
      return console.error("Page not found")
    }

    return console.error(error)
  }
}

init();

// https://codisity.pl/100-bugow-js/602b9a01-9e69-4966-9cc6-610bebf8466b
