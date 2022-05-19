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
        .get("/admin", user)
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

  getActions = () => ({
    requestUserInformations: this.requestUserInformations,
  });
}
