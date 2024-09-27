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