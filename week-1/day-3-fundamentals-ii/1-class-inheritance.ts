// Day 3: TypeScript Fundamentals II

// TODO: Create a class with inheritance


//  class only:
class Dog2 {
  constructor (public name: string){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  setName(name: string){
    this.name = name;
  }
}

const dog3 = new Dog2("Fido");

console.log(`Class only: ${dog3.getName()}`);
dog3.setName("Rex");
console.log(`Class only: ${dog3.getName()}`);


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

console.log(dog1.getName());
dog1.setName("Rex");

// Mock is used for testing.
class MockDog implements DogInterface {
  // public name;
  constructor (public name: string){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  setName(name: string){
    this.name = name;
  }
}

const mockdog = new MockDog("MockFido");

console.log(mockdog.getName());