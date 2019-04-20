//取出所有类型的key
export type ObjectLike = object;

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

export type Exclude<
  T extends BasicValueTypes,
  U extends BasicValueTypes
> = T extends U ? never : T;

export type Extract<
  T extends BasicValueTypes,
  U extends BasicValueTypes
> = T extends U ? T : never;

export type Partial<T extends ObjectLike> = { [P in keyof T]?: T[P] };

export type Required<T extends ObjectLike> = { [P in keyof T]-?: T[P] };

export type Readonly<T extends ObjectLike> = { readonly [P in keyof T]: T[P] };

export type NonNullable<T> = T extends null | undefined ? never : T;

export type Record<K extends keyof any, T> = { [P in K]: T };

export type Pick<T extends ObjectLike, U extends keyof T> = { [K in U]: T[K] };

export type Overwrite<T extends ObjectLike, U extends ObjectLike> = {
  [K in Exclude<keyof T, keyof U>]: T[K]
} &
  U;

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
