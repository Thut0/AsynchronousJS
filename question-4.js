function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User"), 1000);
  });
}
function getPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${user}'s posts`), 1000);
  });
}

//Promise Chain

getUser()
  .then((user) => {
    console.log("User:", user);
    return getPosts(user);
  })
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
