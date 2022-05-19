import { IUserState } from "./interfaces";
import { IUser } from "../interfaces";

export default class Mutations {
  private getDefaultState;

  private MUTATION_METHODS_NAMES = {
    setUserInformations: "setUserInformations",
  };

  constructor(getDefaultState: any) {
    this.getDefaultState = getDefaultState;
  }

  getMutationsMethodsNames = () => this.MUTATION_METHODS_NAMES;

  getMutations = () => ({
    [this.MUTATION_METHODS_NAMES.setUserInformations]:
      (state: IUserState, user: IUser) => {
        state.user = user;
      },
  });
}
