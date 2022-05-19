import { IUserState } from "./interfaces";

export default class State {
  private state;

  constructor() {
    this.state = this.getDefaultState();
  }

  private getDefaultState = (): IUserState => <IUserState>({
    user: {},
  });

  getState = () => ({
    state: this.state,
    getDefaultState: this.getDefaultState(),
  });
}
