import {
  GetKeys,
  GetValues,
  Overwrite,
  NoValueType,
  Merge,
  Omit,
  Diff,
  NoKey
} from "./testType";
interface Me {
  name: string;
  age: number;
  sex: never;
}

interface Me2 {
  name: string;
  age: number;
  weight: number;
}

interface Me3 {
  age: string;
  weight: number;
}

type getKeys = GetKeys<Me>;

type getValus = GetValues<Me>;

type overwrite = Overwrite<Me2, Me3>;

type mergeType = Merge<Me2, Me3>;

type noType = NoValueType<Me, never>;

type omit = Omit<Me2, "name">;

type diff = Diff<Me2, Me3>;

type noKeyType = NoKey<Me2, "name">;
