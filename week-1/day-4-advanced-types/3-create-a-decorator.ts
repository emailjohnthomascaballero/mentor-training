// TODO: Create a decorator
function log(
  target: any,
  methodKeyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${methodKeyName} with arguments: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${methodKeyName} returned: ${result}`);
    return result;
  };
  return descriptor;
}

class PersonSomething {
  @log
  greet(name: string) {
    console.log("This is calling from the greet method");
    return `Hello, ${name}`;
  }
}

const personSomething = new PersonSomething();
personSomething.greet("John");