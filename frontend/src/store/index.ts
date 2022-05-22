import { createStore } from "vuex";
import Pathfinder from "@/store/modules/pathfinder/Pathfinder";
import User from "@/store/modules/user/User";

import axiosHttpClient from "./axiosHttpClient";

const pathfinder = new Pathfinder(axiosHttpClient).getStore();
const user = new User(axiosHttpClient).getStore();

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    pathfinder,
    user,
  },
});
