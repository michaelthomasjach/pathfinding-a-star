import State from "./State";
import Actions from "./Actions";
import Getters from "./Getters";
import Mutations from "./Mutations";

export default class User {
  private readonly state: any;
  private readonly actions: any;
  private readonly getters: any;
  private readonly mutations: any;

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
