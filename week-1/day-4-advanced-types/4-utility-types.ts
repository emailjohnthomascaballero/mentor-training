// TODO: Use utility types (Partial, Pick, Omit, Readonly, Record, Required, NonNullable, ReturnType, Await

type BaseUser = {
  name: string;
  age: number;
};

type OptionalUser = Partial<BaseUser>;