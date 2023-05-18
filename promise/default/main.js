const apiUrl = 'http://api.nbp.pl/api/cenyzlota/last/20?fromat=json';
let i = 1;

const log = (obj) => {
  console.log(obj, `----> No# ${i}`);
  i++;
}

// promise chain way
const promise = fetch(apiUrl).
  then((res) => {
    log(res);
    return res.json();
  }).
  then(data => {
    log(data);
    log('after promise chain clg');
  }).
  catch((err) => console.log(err));

// async/await way
const doPromise = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    log(response);
    log(data)
    log('after async/await clg'); // 6
  } catch (err) {
    log(err) // optional 4
  }
}
doPromise();

log('1');
log('2');
