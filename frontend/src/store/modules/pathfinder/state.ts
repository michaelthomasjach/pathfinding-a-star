import { IExampleState } from "./interfaces";

export default class State {
  private state;

  constructor() {
    this.state = this.getDefaultState();
  }

  private getDefaultState = (): IExampleState => ({
    allExample: [],
  });

  getState = () => ({
    state: this.state,
    getDefaultState: this.getDefaultState(),
  });
}
