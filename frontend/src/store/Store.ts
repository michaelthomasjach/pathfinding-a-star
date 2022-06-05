import { createStore } from "vuex";
import Pathfinder from "@/store/modules/pathfinder/Pathfinder";
import User from "@/store/modules/user/User";

import axiosHttpClient from "./axiosHttpClient";

export default class Store {
  private pathfinder = new Pathfinder(axiosHttpClient).getStore();
  private user = new User(axiosHttpClient).getStore();

  private store = createStore({
    strict: process.env.NODE_ENV !== "production",
    modules: {
      pathfinder: this.pathfinder,
      user: this.user,
    },
  });

  getStore = () => this.store;
}
