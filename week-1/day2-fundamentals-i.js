// Compare TS to JS

// TODO: Create a function with optional parameters
function optionalParameters1 (name, age) {
  return `Hello ${name} ${age ? `you are ${age} years old.` : ""}`;
}
// console.log(optionalParameters("John", 20));

// TODO: Create a function with default parameters
function defaultParameters1 (name = "John", age = 20) {
  return `Hello ${name} ${age ? `you are ${age} years old.` : ""}`;
}
// console.log(defaultParameters1("Jane"))

// TODO: Create a function with rest parameters
function restParameters1 (name, ...rest) {
  return `Hello ${name} ${rest.join(" ")}`;
}
console.log(restParameters1("Jane", "I", "love", "JavaScript"))