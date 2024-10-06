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
};

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
};

console.log(RecordUser);

// Required (removed optional properties (check when hovered)):
type RequiredUser = Required<OptionalUser>;

// NonNullable (cannot be null or undefined):
const animal: NonNullable<string> = "dog";
// const animal2: NonNullable<string> = null; // this is an error

// ReturnType (return object type):

function getUserData() {
  return {
    name: "John",
    age: 30,
    address: "New York",
  };
}

type test = typeof getUserData; // this is a function type

type GetUserDataResponse = ReturnType<typeof getUserData>; // this is a object type (check when hovered)

function displayUserData(userData: GetUserDataResponse) {
  console.log(`Name: ${userData.name}`);
  console.log(`Age: ${userData.age}`);
  console.log(`Address: ${userData.address}`);
}

displayUserData(getUserData());

// console.log(GetUserDataResponse);

// Await
async function getUserData2() {
  return new Promise<GetUserDataResponse>((resolve) => {
    resolve({
      name: "John",
      age: 30,
      address: "New York",
    });
  });
}

type GetUserDataResponse2 = Awaited<ReturnType<typeof getUserData2>>;

async function outputUserData() {
  const userData: GetUserDataResponse = getUserData();
  const userData2: GetUserDataResponse2 = await getUserData2();

  console.log("Synchronous Data:", userData);
  console.log("Asynchronous Data:", userData2);
}

// Call the function to see the output
outputUserData();