console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
console.log("C");

// Output of this code is
// A
// C
// B
