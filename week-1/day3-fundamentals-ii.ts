// Day 3: TypeScript Fundamentals II

// TODO: Create a class with inheritance


//  class only:
// class Dog {
//   constructor (public name: string){
//     this.name = name;
//   }

//   getName(){
//     return this.name;
//   }

//   setName(name: string){
//     this.name = name;
//   }
// }

// const dog1 = new Dog("Fido");

// dog1.getName();
// dog1.setName("Rex");


//  with interface:
// this is mirror only and you can use it in testing
interface DogInterface {
  name: string;
  getName(): string;
  setName(name: string): void;
}

class Dog implements DogInterface {
  public name;
  constructor (name: string){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  setName(name: string){
    this.name = name;
  }
}

const dog1 = new Dog("Fido");

dog1.getName();
dog1.setName("Rex");

// Mock is used for testing.
class MockDog implements DogInterface {
  public name;
  constructor (name: string){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  setName(name: string){
    this.name = name;
  }
}


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
type GetPlanetDataArgs<TData> = {
  id: string;
  data: TData;
}

function getPlanetData<TData>({ id, data }: GetPlanetDataArgs<TData>) {
  return { id, data };
}

const planetData = getPlanetData<number>({id: '1', data: 123}); 
