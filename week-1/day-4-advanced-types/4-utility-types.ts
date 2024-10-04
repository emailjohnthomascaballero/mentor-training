// TODO: Use utility types (Partial, Pick, Omit, Readonly, Record, Required, NonNullable, ReturnType, Await

type BaseUser = {
  name: string;
  age: number;
  address: string;
};

type OptionalUser = Partial<BaseUser>;
type PickUser = Pick<BaseUser, "name" | "address">;
type OmitUser = Omit<BaseUser, "address">;
type ReadonlyUser = Readonly<BaseUser>;

const OptionalUser: OptionalUser = {
  name: "John",
  age: undefined,
};

const PickUser: PickUser = {
  name: "John",
  address: "New York",
};

const OmitUser: OmitUser = {
  name: "John",
  age: 30,
}

// you cannot assign new value because it is readonly
const ReadonlyUser: ReadonlyUser = {
  name: "John",
  age: 30,
  address: "New York",
};

// ReadonlyUser.name = "Jane"; // this is an error

console.log(OptionalUser.age);
console.log(PickUser);
console.log(OmitUser);


// Record (it will cause error if you add other keys):
type RecordUser = Record<"name" | "age" | "address", string>;

const RecordUser: RecordUser = {
  name: "John", 
  age: "30",
  address: "New York",
}

console.log(RecordUser);


// Required (removed optional properties (check when hovered)):
type RequiredUser = Required<OptionalUser>;

// NonNullable (cannot be null or undefined):
const animal: NonNullable<string> = "dog";
// const animal2: NonNullable<string> = null; // this is an error

