import state from "./state";
import Actions from "./Actions";
import getters from "./getters";
import mutations from "./mutations";

export default class Pathfinder {
  private state: any;
  private actions: any;
  private getters: any;
  private mutations: any;

  constructor(axios: any) {
    this.state = state;
    this.actions = new Actions(axios).getActions();
    this.getters = getters;
    this.mutations = mutations;
  }

  getStore = () => ({
    state: this.state,
    actions: this.actions,
    getters: this.getters,
    mutations: this.mutations,
  });
}
