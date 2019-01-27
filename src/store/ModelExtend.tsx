import { observable, action, toJS } from "mobx";
import { default as rootStore, RootStore } from "./index";

export default class ModelExtend {
  rootStore: RootStore;
  constructor() {
    this.rootStore = rootStore;
  }
}
