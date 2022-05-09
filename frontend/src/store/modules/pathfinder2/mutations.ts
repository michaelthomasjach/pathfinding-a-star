import { getDefaultState } from "./state";
import { IExampleState } from "./interfaces";
import { IExample } from "../interfaces";

export const ACTION_TYPES = {
  setAllExample: "setAllExample",
  resetExampleState: "resetExampleState",
};

// Mutations
export default {
  [ACTION_TYPES.setAllExample](state: IExampleState, example: IExample[]) {
    state.allExample = example;
  },
  [ACTION_TYPES.resetExampleState](state: IExampleState) {
    Object.assign(state, getDefaultState());
  },
};
