// TODO: Demonstrate void type
const hello: void = undefined;

console.log(hello);

// void real world example
const promise = new Promise((resolve, reject) => {
  return resolve;
});

console.log(void promise);