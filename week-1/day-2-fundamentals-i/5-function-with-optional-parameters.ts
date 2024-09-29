// TODO: Create a function with optional parameters
function optionalParameters(name: string, age?: number) {
  return `Hello ${name} ${age ? `you are ${age} years old.` : ""}`;
}

console.log(optionalParameters('John'));
console.log(optionalParameters('John', 20));