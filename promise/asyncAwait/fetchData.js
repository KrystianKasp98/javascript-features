async function fetchData() {
  console.log('-------------------------------', 2); // 2
  const respnse = await fetch('https://jsonplaceholder.typicode.com/users/3');
  const user = await respnse.json();
  console.log(user, 'user was fetched', 3); // 3
  console.log('-------------------------------', 4); // 4
}

const asyncFunc = async () => {
  console.log('beofre fetching in async func', 1); // 1
  await fetchData(); // 2-4
  console.log('after fetching in async func', 5); // 5
}

asyncFunc(); // 4

