// TODO: Demonstrate number type
const age: number = 30;

// TODO: Demonstrate string type
const firstName: string = "John";

// TODO: Demonstrate boolean type
const isAdmin: boolean = true;

// TODO: Demonstrate array type
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["John", "Jane", "Joe"];
const names2: Array<string> = ["John", "Jane", "Joe"]; //alternative

// TODO: Demonstrate tuple type
const myTuple: [number, string, boolean, string[]] = [10, "Hello", true, ["John", "Jane"]];

// TODO: Demonstrate any type
const anything: any = "John";
// Cons: Loss of type safety, decreased maintainability, limited tooling support, hidden runtime errors, and missed benefits of TypeScript’s type system.

// TODO: Demonstrate unknown type
const unknown: unknown = 'JOhn';
// instead of any, use unknown.

// TODO: Demonstrate never type
const arr: never[] = [];
// arr.push(10); // error! you can never add values to an array of never.

// TODO: Demonstrate void type
const hello: void = undefined;

// void real world example
const promise = new Promise((resolve, reject) => {
  return resolve;
})

void promise;

// TODO: Demonstrate null and undefined
const nullType: null = null;
const undefinedType: undefined = undefined;

const lastName: string | null = null;

// TODO: Demonstrate object type
const obj: object = []; // not usually used.

//  best practice
const person1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  }
} satisfies Record<string, number | string | Record<string, string>>;

person1.address.city;