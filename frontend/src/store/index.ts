import { createStore } from "vuex";
import pathfinder from "./modules/pathfinder";

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    pathfinder,
  },
});
