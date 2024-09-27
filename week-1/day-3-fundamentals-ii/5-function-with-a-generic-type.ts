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

// console.log(planetData);

// console.log(getPlanetData({id: '1', data: 'Mercury 123'}));

// example 2 (manual assigning the type of data):
// type GetPlanetDataArgs<TData> = {
//   id: string;
//   data: TData;
// }

// function getPlanetData<TData>({ id, data }: GetPlanetDataArgs<TData>) {
//   return { id, data };
// }

// const planetData = getPlanetData<number>({id: '1', data: 123}); // manual assigning the type of data

// console.log(planetData);

// console.log(getPlanetData<number>({id: '1', data: 123}));

// example 3
type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  age: number;
  adminAccess: boolean;
};

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

console.log(userData);
console.log(adminData);

// use this function instead.
function getUserProperties<TType extends "user" | "admin">(userType: TType) {
  return userType === "user"
    ? ({'name': 'Anthony', 'age': 30} as GetUserProperties<TType>)
    : ({'name': 'Jessa', 'age': 18, 'adminAccess': false} as GetUserProperties<TType>);
}

const userData2 = getUserProperties("user");
userData2.name;
userData2.age;

const adminData2 = getUserProperties("admin");
adminData2.name;
adminData2.age;
adminData2.adminAccess;

console.log(userData2);
console.log(adminData2);

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
