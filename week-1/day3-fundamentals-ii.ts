// TODO: Demonstrate generics (important if you are working in complex projects)


// example 1 (basic):
// type GenericDog<TProperties> = {
//   name: string;
//   properties: TProperties;
// }

// const dog3: GenericDog<number> = {
//   name: "Fido",
//   properties: 10
// }

// example 2 (add types):
// type GenericDog<TProperties> = {
//   name: string;
//   properties: TProperties;
// }

// type DogProperties = {
//   name: string;
//   age: number;
// }

// const dog3: GenericDog<DogProperties> = {
//   name: "Fido",
//   properties: { name: "Fido", age: 10 }
// }

// example 3 (set default parameters):
// type GenericDog<TProperties = Record<string, unknown> > = { // set default value
//   name: string;
//   properties: TProperties;
// }

// const dog3: GenericDog = { // no need parameters
//   name: "Fido",
//   properties: { name: "Fido", age: 10, color: "black" }
// }

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

// TODO: Create an enum (its like an object but help to prevent bugs)

enum Color {
  Red = 'Red',
  Yellow = 'Yellow',
  Blue = 'Blue',
}

const color = Color.Red;
const color2 = Color.Yellow;

if (color === Color.Red) {
  console.log('The color is red');
}


// TODO: Create a native enum or const enum (preferred to use)

// example 1 (value is visible in planet1 if hovered):
// const Planets = {
//   Mercury: 'Mercury 123',
//   Venus: 'Venus 123',
//   Earth: 'Earth 123',
// } as const; //add 'as const' to be a native enum.

// const planet1 = Planets.Mercury;

// example 2 (return key & type):
const Planets = {
  Mercury: 'Mercury 123',
  Venus: 'Venus 123',
  Earth: 'Earth 123',
} as const;

type PlanetsKey = keyof typeof Planets; // 'Mercury' | 'Venus' | 'Earth'
type PlanetsValue = typeof Planets[PlanetsKey]; // 'Mercury 123' | 'Venus 123' | 'Earth 123'
type PlanetsSingleValue = typeof Planets['Earth']; // 'Earth 123'

const planet1 = Planets.Mercury;


// TODO: Create a function with a generic type:

// example 1 (automatically assigning the type of data):
// type GetPlanetDataArgs<TData> = {
//   id: string;
//   data: TData;
// }

// function getPlanetData<TData>({ id, data }: GetPlanetDataArgs<TData>) {
//   return { id, data };
// }

// const planetData = getPlanetData({id: '1', data: 'Mercury 123'}); // automatic assigning the type of data


// example 2 (manual assigning the type of data):
// type GetPlanetDataArgs<TData> = {
//   id: string;
//   data: TData;
// }

// function getPlanetData<TData>({ id, data }: GetPlanetDataArgs<TData>) {
//   return { id, data };
// }

// const planetData = getPlanetData<number>({id: '1', data: 123}); // manual assigning the type of data


// example 3
type User = {
  name: string;
  age: number;
}

type Admin = {
  name: string;
  age: number;
  adminAccess: boolean;
}

type GetUserProperties<TType extends "user" | "admin"> = TType extends "user"
  ? User
  : Admin;

const userData: GetUserProperties<"user"> = {
  name: "John",
  age: 20,
};

const adminData: GetUserProperties<"admin"> = {
  name: "John",
  age: 20,
  adminAccess: true,
};

// not recommend to use this arrow function
// const getUserProperties1 = <TType extends "user" | "admin">(userType: TType) => {
//   return {} as GetUserProperties<TType>;
// };

// use this function instead.
function getUserProperties <TType extends "user" | "admin">(userType: TType) {
  return {} as GetUserProperties<TType>;
};

const userData2 = getUserProperties("user");
userData2.name;
userData2.age;

const adminData2 = getUserProperties("admin");
adminData2.name;
adminData2.age;
adminData2.adminAccess;

// console.log(adminData2.name);





// EXAMPLES OF BAD PRACTICES

// not recommend to use arrow function
// const aaaa = {
//   name: "John",
//   test: () => {
//     // this.name; // Cannot access name here
//   },
// };

// use function instead
// const bbbb = {
//   name: "John",
//   test: function () {
//     this.name;
//   },
// };