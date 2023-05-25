function lesson(lessonNumber) {
  return new Promise((resolve, reject) => {
    console.log(`I am learning leasson ${lessonNumber}`);
    setTimeout(() => {
      console.log(`I've learnt ${lessonNumber} lesson`);
      resolve(lessonNumber+1);
    }, 2000);
  });
}

async function learnLessons() {
  const firstLesson = await lesson(1);
  const secondLesson = await lesson(firstLesson);
  const thirdLesson = await lesson(secondLesson);
  const fourthLesson = await lesson(thirdLesson);
}

learnLessons();
