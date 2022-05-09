import { createStore } from "vuex";
import pathfinder from "@/store/modules/pathfinder";
// import { axiosHttpClient } from "@/store/axiosHttpClient";

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    pathfinder,
  },
});
