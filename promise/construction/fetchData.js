function fetchData(url) {
  return new Promise((resolve, reject) => {
    console.log('request has been sent');
    fetch(url).
      then(res => res.json()).
      then(data => resolve(data)).
      catch(error => reject(error));
  });
}

function fetchDataDelay(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('request has been sent');
      fetch(url).
        then(res => res.json()).
        then(data => resolve(data)).
        catch(error => reject(error));
    }, 3000);
  });
}

// val will return arr of 4 successfull requests, if though one request failed then will return err
Promise.all([
  fetchDataDelay('https://jsonplaceholder.typicode.com/users/10'),
  fetchData('https://jsonplaceholder.typicode.com/users/1'),
  fetchData('https://jsonplaceholder.typicode.com/users/2'),
  fetchDataDelay('https://jsonplaceholder.typicode.com/users/3'),
  // fetchDataDelay('https://sjsonplaceholdertypicode.com/users/3') // will fail
]).
  then(val => console.log(val)).
  catch(err => console.log(err))


// signle request
// fetchData('https://jsonplaceholder.typicode.com/users/10').
//   then(data => console.log(data)).
//   catch(err => console.log(err)).
//   finally(() => console.log('finished'));
