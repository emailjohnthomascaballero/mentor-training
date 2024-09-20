// TODO: define an interface but better use satisfies
interface Product {
  name: string;
  price: number;
  description: string;
}

const product: Product = {
  name: "Product 1",
  price: 10,
  description: "Product 1 description",
};

product.name;

// TODO: Define a type alias
type Car = {
  name: string;
  price: number;
  description: string;
};

type PersonName = string | boolean;
const name1: PersonName = "John";

type PersonArray = Array<string | boolean>;
const name2: Array<string> = ["John", "Jane"];

// TODO: Demonstrate union type
type Person = string | number | boolean | undefined | null;

// TODO: Demonstrate intersection type

interface Animal {
  type: string;
  quantity: number;
}

interface Human {
  name: string;
  age: number;
}

type PersonWithAnimal = Animal & Human; // intersection

const intersection: PersonWithAnimal = {
  name: "John",
  age: 20,
  type: "Dog",
  quantity: 3,
};

// TODO: Create a function with optional parameters
function optionalParameters(name: string, age: number) {
  return `Hello ${name} ${age ? `you are ${age} years old.` : ""}`;
}

// TODO: Create a function with default parameters
function defaultParameters(name: string = "John", age: number = 20) {
  return `Hello ${name} ${age ? `you are ${age} years old.` : ""}`;
}

// TODO: Create a function with rest parameters
function restParameters(name: string, ...rest: string[]) {
  return `Hello ${name} ${rest.join(" ")}`;
}

function restParameters2({
  name,
  ...rest
}: {
  name: string;
  age: number;
  gender: string;
}) {
  return `Hello ${name}, ${rest.age} ${rest.gender}`;
}

restParameters2({ name: "John", age: 20, gender: "male" });