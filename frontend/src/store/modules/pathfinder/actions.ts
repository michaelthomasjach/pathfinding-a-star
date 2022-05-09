import axios from "axios";

import { ACTION_TYPES } from "./mutations";

export default {
  requestGrid({ commit }: any) {
    commit(ACTION_TYPES.setAllExample, "grid.data");

    /*
    axios
      .get("/grid")
      .then((grid) => {
        commit(ACTION_TYPES.setAllExample, grid.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
      */
  },
};
