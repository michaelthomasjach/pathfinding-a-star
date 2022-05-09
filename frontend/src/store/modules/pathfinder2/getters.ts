import { IExampleState } from "./interfaces";

const getGrid = (state: IExampleState) => {
  console.log("GETTER :", state.allExample);
  return state.allExample;
};

export default {
  getGrid, // get grid
};
