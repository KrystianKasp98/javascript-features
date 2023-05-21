// callback Hell

function lesson(lessonNumber, callback) {
  console.log(`I am learning leasson ${lessonNumber}`);
  setTimeout(() => {
    callback();
  }, 2000);
}

lesson(1, () => {
  lesson(2, () => {
    lesson(3, () => {
      lesson(4, () => {
        console.log(`I've learned all the lessons`);
      });
    });
  });
});
