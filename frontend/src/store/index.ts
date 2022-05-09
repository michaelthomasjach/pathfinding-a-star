import { createStore } from "vuex";
import Pathfinder from "@/store/modules/pathfinder/Pathfinder";
import axiosHttpClient from "./axiosHttpClient";

// import { axiosHttpClient } from "@/store/axiosHttpClient";
const pathfinder = new Pathfinder(axiosHttpClient).getStore();

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    pathfinder,
  },
});
