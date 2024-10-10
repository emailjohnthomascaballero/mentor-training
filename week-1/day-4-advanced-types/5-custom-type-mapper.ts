// TODO: Create a mapped type
type BaseUser2 = {
  name: string;
  age: number;
  address: string;
};

type MappedType<TObj> = {
  [K in keyof TObj & string as `${K}-test`]: TObj[K];
};

type test3 = MappedType<BaseUser2>;

const test4: test3 = {
  "name-test": "John",
  "age-test": 20,
  "address-test": "john@doe.com",
};

console.log(test4);