// TODO: Create a function with rest parameters
function restParameters(name: string, ...rest: string[]) {
  return `Hello ${name} ${rest.join(" ")}`;
}

console.log(restParameters("John", "I", "love", "JavaScript"));


function restParameters2({
  name,
  ...rest
}: {
  name: string;
  age: number;
  gender: string;
}) {
  return `Hello ${name}, your age: ${rest.age} & gender: ${rest.gender}`;
}

console.log(restParameters2({ name: "John", age: 20, gender: "male" }));