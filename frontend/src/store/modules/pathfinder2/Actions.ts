import { ACTION_TYPES } from "./mutations";

export default class Actions {
  private axiosHttpClient: any;

  constructor(axiosHttpClient: any) {
    this.axiosHttpClient = axiosHttpClient;
  }

  // eslint-disable-next-line arrow-body-style
  private requestGrid = ({ commit }: any) => {
    return new Promise((result, reject) => {
      this.axiosHttpClient
        .get("/grid")
        .then((grid: any) => {
          console.log("/grid", grid);
          commit(ACTION_TYPES.setAllExample, grid);
          result(result);
        })
        .catch((error: any) => {
          reject(error);
          throw new Error(error);
        });
    });
  };

  getActions = () => ({
    requestGrid: this.requestGrid,
  });
}
