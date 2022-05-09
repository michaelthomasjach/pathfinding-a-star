import { createStore } from "vuex";
import pathfinder from "@/store/modules/pathfinder";
import Pathfinder from "@/store/modules/pathfinder2/Pathfinder";
import axiosHttpClient from "./axiosHttpClient";

// import { axiosHttpClient } from "@/store/axiosHttpClient";
const pathfinder2 = new Pathfinder(axiosHttpClient).getStore();

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    // pathfinder,
    pathfinder2,
  },
});
