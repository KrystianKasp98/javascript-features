const apiUrl = 'http://api.nbp.pl/api/cenyzlota/last/20';

// promise chain way
const promise = fetch(apiUrl).
  then((res) => {
    console.log(res); // 3
    console.log('after promise chain clg'); // 4
  }).
  catch((err) => console.log(err)); // optional 3

// async/await way
const doPromise = async () => {
  try {
    const promise = await fetch(apiUrl);
    console.log(promise); // 5
    console.log('after async/await clg'); // 6
  } catch (err) {
    console.log(err) // optional 4
  }
}
doPromise();

console.log('1'); // 1
console.log('2'); // 2
