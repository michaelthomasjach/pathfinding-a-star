import { IUser } from "@/store/modules/interfaces";
import { IUserState } from "./interfaces";

export default class Getters {
  getUser = (state: IUserState): IUser => {
    console.log("GETTER :", state.user);
    return state.user;
  };

  getGetters = () => ({
    getUser: this.getUser,
  });
}
