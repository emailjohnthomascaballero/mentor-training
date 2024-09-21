// Day 3: TypeScript Fundamentals II

// TODO: Create a class with inheritance

class Dog {
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

const dog1 = new Dog("Fido");

dog1.getName();
dog1.setName("Rex");
dog1.getName();