import { createStore } from "vuex";
import Admin from "@/store/modules/admin/Admin";
import Pathfinder from "@/store/modules/pathfinder/Pathfinder";

import axiosHttpClient from "./axiosHttpClient";

const pathfinder = new Pathfinder(axiosHttpClient).getStore();
const admin = new Admin(axiosHttpClient).getStore();

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    pathfinder,
    admin,
  },
});
