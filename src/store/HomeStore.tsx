import { observable } from "mobx";
import ModelExtend from "./ModelExtend";
class HomeStore extends ModelExtend {

  @observable name: string = "home";
}

export default HomeStore;
