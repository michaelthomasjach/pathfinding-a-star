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
  private requestUserInformations = ({ commit }: any) => {
    return new Promise((result, reject) => {
      const user = {
        id: 1,
        firstname: "Mike",
        lastname: "Jach",
        role: "ADMIN",
      };
      this.axiosHttpClient
        .get("/api/admin", user)
        .then((admin: any) => {
          commit(this.MUTATION_METHODS_NAMES.setUserInformations, admin);
          result(admin);
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
          commit(this.MUTATION_METHODS_NAMES.setUserInformations, user);
          result(user);
        })
        .catch((error: any) => {
          reject(error);
          throw new Error(error);
        });
    });
  };

  getActions = () => ({
    requestUserInformations: this.requestUserInformations,
    requestLogin: this.requestLogin,
  });
}
