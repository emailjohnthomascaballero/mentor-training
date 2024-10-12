// TODO: Create a custom type guard

// Example 1
// Define a custom type guard
function isString(value: string | number): value is string {
  return typeof value === 'string';
}

// Usage example
function printValue(value: string | number) {
  if (isString(value)) {
      console.log(`String value: ${value}`);
  } else {
      console.log(`Number value: ${value}`);
  }
}

printValue("Hello, world!"); // Output: String value: Hello, world!
printValue(42);   // Output: Number value: 42


// Example 2 
function isString1<TValue>(value: TValue) {
  return typeof value === "string";
}

function testFunction(value: unknown) {
  if (isString1(value)) {
    console.log(value.toUpperCase());
  }
}