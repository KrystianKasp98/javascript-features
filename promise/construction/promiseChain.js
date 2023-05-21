function lesson(lessonNumber) {
  return new Promise((resolve, reject) => {
    console.log(`I am learning leasson ${lessonNumber}`);
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}