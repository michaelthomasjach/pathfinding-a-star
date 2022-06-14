// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { IUser } from "@/store/modules/interfaces";

export default class Actions {
  private axiosHttpClient: any;
  private MUTATION_METHODS_NAMES: any;

  constructor(axiosHttpClient: any, mutationMethodsNames: any) {
    this.axiosHttpClient = axiosHttpClient;
    this.MUTATION_METHODS_NAMES = mutationMethodsNames;
  }

  // eslint-disable-next-line arrow-body-style
  private requestUserInformations = ({ commit }: any, token: string) => {
    return new Promise((result, reject) => {
      this.axiosHttpClient
        .get("/api/admin", token)
        .then((response: any) => {
          result(response);
        })
        .catch((error: any) => {
          reject(error);
          throw new Error(error);
        });
    });
  };

  // eslint-disable-next-line arrow-body-style
  private requestLogin = ({ commit }: any, payload: { email: string; password: string }) => {
    return new Promise((result, reject) => {
      this.axiosHttpClient
        .post("/api/login", payload)
        .then((response: any) => {
          const userData: IUser = jwt_decode(response.data.token);
          const user = { ...userData, token: `Bearer ${response.data.token}` };
          localStorage.setItem("jwt-token", `Bearer ${response.data.token}`);
          commit(this.MUTATION_METHODS_NAMES.setUserInformations, user);
          result(user);
        })
        .catch((error: any) => {
          reject(error);
          throw new Error(error);
        });
    });
  };

  // eslint-disable-next-line arrow-body-style
  private refreshUserStoreInformations = ({ commit }: any, user: IUser) => {
    commit(this.MUTATION_METHODS_NAMES.setUserInformations, user);
  };

  // eslint-disable-next-line arrow-body-style
  private requestLogout = ({ commit }: any) => {
    localStorage.removeItem("jwt-token");
    commit(this.MUTATION_METHODS_NAMES.setUserInformations, undefined);
  };

  getActions = () => ({
    requestUserInformations: this.requestUserInformations,
    requestLogin: this.requestLogin,
    refreshUserStoreInformations: this.refreshUserStoreInformations,
    requestLogout: this.requestLogout,
  });
}
