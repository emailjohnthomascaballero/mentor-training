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

console.log(intersection);