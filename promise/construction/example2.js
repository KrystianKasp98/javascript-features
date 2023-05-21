const promise = new Promise((resolve, reject) => {
  const data = '{"name": "John", "age": 30}';
  resolve(data);
});

promise.
  then((jsonData) => {
    const parsedData = JSON.parse(jsonData);
    return parsedData;
  }).
  then((parsedData) => {
    console.log(parsedData.name);
    return undefined;
  }).
  catch((err) => {
    console.log('rejected', err);
  });

