import { IExampleState } from "./interfaces";

const getDefaultState = (): IExampleState => ({
  allExample: [],
});

const state = getDefaultState();
export { getDefaultState };

export default state;
