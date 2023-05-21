const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1 - ok');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise2 - ok');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise3 - ok');
  }, 500);
});

Promise.all([promise1, promise2, promise3]).
  then((body) => {
    console.log('resolved');
    console.log({body});
  }).
  catch((err) => {
    console.log('failed');
    console.log({err});
  }).
  finally((data) => {
    console.log('finally...');
    console.log({data});
  })

// console.log(promise);

// promise.then(() => {
//   console.log(promise);
// });
