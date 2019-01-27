import HomeStore from "./HomeStore";

export class RootStore {
  homeStore: HomeStore;
  constructor() {
    this.homeStore = new HomeStore();
  }
}

export default new RootStore();
