// TODO: Demonstrate never type
const arr: never[] = [];
// arr.push(10); // error! you can never add values to an array of never.
console.log(arr);