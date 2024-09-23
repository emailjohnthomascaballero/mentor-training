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

// TODO: Create an enum
