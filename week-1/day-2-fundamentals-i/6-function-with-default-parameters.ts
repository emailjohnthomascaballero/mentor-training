// TODO: Create a function with default parameters
function defaultParameters(name: string = "John", age: number = 20) {
  return `Hello ${name} ${age ? `you are ${age} years old.` : ""}`;
}

console.log(defaultParameters());
console.log(defaultParameters("Anthony"));