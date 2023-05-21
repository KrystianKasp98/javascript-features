const promise = new Promise((resolve, reject) => {
  resolve({isSuccess: true}); // success
  setTimeout(() => {
    console.log('resolved')
  }, 3000);

  console.log('Promise is running');
  // reject('Promise is rejected'); // error
});

promise.
  then((data) => {
  console.log('info: ' + data);
  }).
  catch((error) => {
    console.log('error: ' + error);
  });

console.log('after promise');

// const resolvePromise = async () => {
//   const res = await promise;
//   console.log(res);
// }

// resolvePromise();