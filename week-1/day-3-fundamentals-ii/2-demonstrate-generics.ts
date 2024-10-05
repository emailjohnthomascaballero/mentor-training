// TODO: Demonstrate generics (important if you are working in complex projects)


// example 1 (basic):
// type GenericDog<TProperties> = {
//   name: string;
//   properties: TProperties;
// }

// const dog4: GenericDog<number> = {
//   name: "Fido",
//   properties: 10
// }

// console.log(dog4.properties);


// example 2 (add types):
// type GenericDog<TProperties> = {
//   name: string;
//   properties: TProperties;
// }

// type DogProperties = {
//   name: string;
//   age: number;
// }

// const dog4: GenericDog<DogProperties> = {
//   name: "Fido",
//   properties: { name: "Fido", age: 10 }
// }

// console.log(dog4.properties.age);

// example 3 (set default parameters):
// type GenericDog<TProperties = Record<string, unknown> > = { // set default value
//   name: string;
//   properties: TProperties;
// }

// const dog4: GenericDog = { // no need parameters
//   name: "Fido",
//   properties: { name: "Fido", age: 10, color: "black" }
// }

// console.log(dog4.properties.color);

// example 4 (extends will add more strict properties):
type GenericDog2<TProperties extends Record<string, unknown> > = { //instead of =
  name: string;
  properties: TProperties;
}

type DogProperties = { // it adds strict here
  name: string;
  age: number;
  color: string;
}

const dog4: GenericDog2<DogProperties> = { 
  name: "Fido",
  properties: { name: "Fido", age: 10, color: "black" }
}

console.log(dog4.properties.color);
