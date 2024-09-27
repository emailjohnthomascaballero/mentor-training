// TODO: Create a native enum or const enum (preferred to use)

// example 1 (value is visible in planet1 if hovered):
// const Planets = {
//   Mercury: 'Mercury 123',
//   Venus: 'Venus 123',
//   Earth: 'Earth 123',
// } as const; //add 'as const' to be a native enum.

// const planet1 = Planets.Mercury;

// console.log(planet1);

// example 2 (return key & type):
const Planets = {
  Mercury: 'Mercury 123',
  Venus: 'Venus 123',
  Earth: 'Earth 123',
} as const;

type PlanetsKey = keyof typeof Planets; // 'Mercury' | 'Venus' | 'Earth'
type PlanetsValue = typeof Planets[PlanetsKey]; // 'Mercury 123' | 'Venus 123' | 'Earth 123'
type PlanetsSingleValue = typeof Planets['Earth']; // 'Earth 123'

console.log(Object.keys(Planets));