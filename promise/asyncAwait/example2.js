// async functions always return promise

async function getSum(a, b) {
  return a + b;
}

async function init() {
  const sum = await getSum(1,1);
  console.log(sum, '--- 3'); // 3
  return sum;
}

getSum(1, 1).then(res => console.log(res, '--- 2')); //2, return resolved promise - 2
console.log(getSum(), '--- 1'); //1, return promise
init(); // return resolved promise - 2