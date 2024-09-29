// TODO: Define a type alias
type Car = {
  name: string;
  price: number;
  description: string;
};

type PersonName = string | boolean;
const name1: PersonName = "John";

type PersonArray = Array<string | boolean>;
const name2: PersonArray = ["Jay", "Jade"];
const name3: Array<string> = ["John", "Jane"];

console.log(name2)