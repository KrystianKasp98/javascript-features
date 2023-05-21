const sleep = timeInMs => new Promise(resolve => setTimeout(resolve, timeInMs));

const init = async () => {
  console.log('hello, you will wait for 3sec');
  await sleep(3000);
  console.log('what is up?');
}

init();
