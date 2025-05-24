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
//Async

async function getUserData() {
  try {
    const user = await getUser();
    console.log("User:", user);

    const posts = await getPosts(user);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}
