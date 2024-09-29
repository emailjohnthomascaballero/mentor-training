// TODO: Demonstrate object type
const obj: object = []; // not usually used.

//  best practice
const person1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
  favoriteColors: ["red", "blue"],
} satisfies Record<string, string | number | Record<string, string> | string[]>;

console.log(person1.address.city)
console.log(person1.favoriteColors[1]);
