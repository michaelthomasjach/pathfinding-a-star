import { IExampleState } from "./interfaces";
import { IExample } from "../interfaces";

export default class Mutations {
  private getDefaultState;

  private MUTATION_METHODS_NAMES = {
    setAllExample: "setAllExample",
    resetExampleState: "resetExampleState",
  };

  constructor(getDefaultState: any) {
    this.getDefaultState = getDefaultState;
  }

  getMutationsMethodsNames = () => this.MUTATION_METHODS_NAMES;

  getMutations = () => ({
    [this.MUTATION_METHODS_NAMES.setAllExample]: (state: IExampleState, example: IExample[]) => {
      state.allExample = example;
    },
    [this.MUTATION_METHODS_NAMES.resetExampleState]: (state: IExampleState) => {
      Object.assign(state, this.getDefaultState());
    },
  });
}
