import { IExampleState } from "./interfaces";

export default class Getters {
  getGrid = (state: IExampleState) => {
    console.log("GETTER :", state.allExample);
    return state.allExample;
  };

  getGetters = () => ({
    getGrid: this.getGrid,
  });
}
