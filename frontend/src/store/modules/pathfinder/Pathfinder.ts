import State from "./State";
import Actions from "./Actions";
import Getters from "./Getters";
import Mutations from "./Mutations";

export default class Pathfinder {
  private state: any;
  private actions: any;
  private getters: any;
  private mutations: any;

  constructor(axios: any) {
    this.state = new State().getState();
    const mutationsInstance = new Mutations(this.state.getDefaultState);
    this.mutations = mutationsInstance.getMutations();
    this.actions = new Actions(axios, mutationsInstance.getMutationsMethodsNames()).getActions();
    this.getters = new Getters().getGetters();
  }

  getStore = () => ({
    state: this.state,
    actions: this.actions,
    getters: this.getters,
    mutations: this.mutations,
  });
}
