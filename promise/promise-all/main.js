const fetchAll = () => {
  const fetchUsers = fetch('data/users.json');
  const fetchColors = fetch('data/users.json');

  Promise.all([fetchUsers, fetchColors]).then(val => {
    console.log(val);
  });
}

fetchAll();
