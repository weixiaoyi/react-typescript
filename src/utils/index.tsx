import { Component } from "react";
import { observer, inject } from "mobx-react";
import HomeStore from "../store/HomeStore";

interface StoreFun {
  (store: HomeStore): HomeStore;
}
// export const Inject = (func: StoreFun) => {
//   return (c: Component<any>) => {
//     return inject(func)(observer(c));
//   };
// };
