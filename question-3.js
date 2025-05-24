function loadData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

// Converted the above callback into a promise
function loadDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("convert a callback into a promise");
    }, 1000);
  });
}
