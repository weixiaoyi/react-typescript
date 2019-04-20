//取出所有类型的key
export type ObjectLike = object | [];

export type BasicKeyTypes = string | number | symbol;

export type BasicValueTypes =
  | string
  | number
  | boolean
  | never
  | object
  | any
  | null
  | undefined
  | void;

export type GetKeys<T extends ObjectLike> = keyof T;

export type GetValues<T extends ObjectLike> = T[GetKeys<T>];

export type Omit<T extends ObjectLike, U extends BasicKeyTypes> = Pick<
  T,
  Exclude<GetKeys<T>, U>
>;

export type NoKey<T extends ObjectLike, U extends keyof T> = Omit<T, U>;

export type NoValueType<T extends ObjectLike, U extends BasicValueTypes> = Pick<
  T,
  GetValues<{ [K in GetKeys<T>]: T[K] extends U ? never : K }>
>;

export type Merge<T extends ObjectLike, U extends ObjectLike> = T & U;

export type Diff<T extends ObjectLike, U extends ObjectLike> = Pick<
  T,
  Exclude<GetKeys<T>, GetKeys<U>>
>;
