// promise chain

function lesson(lessonNumber) {
  return new Promise((resolve, reject) => {
    console.log(`I am learning leasson ${lessonNumber}`);
    setTimeout(() => {
      resolve(lessonNumber+1);
    }, 2000);
  });
}

lesson(1).
  then(() => lesson(2)).
  then(() => lesson(3)).
  then(() => lesson(4)).
  then(() => {
    console.log(`I've learned all the lessons`);
    return lesson(5);
  });

// async await

// const init = async () => {
//   const res = await lesson(1);
//   const res2 = await lesson(res);
//   console.log(res);
//   console.log(res2);
// }

// init();
