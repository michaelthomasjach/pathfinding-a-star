export default class Actions {
  private axiosHttpClient: any;
  private MUTATION_METHODS_NAMES: any;

  constructor(axiosHttpClient: any, mutationMethodsNames: any) {
    this.axiosHttpClient = axiosHttpClient;
    this.MUTATION_METHODS_NAMES = mutationMethodsNames;
  }

  // eslint-disable-next-line arrow-body-style
  private requestGrid = ({ commit }: any) => {
    return new Promise((result, reject) => {
      this.axiosHttpClient
        .get("/grid")
        .then((grid: any) => {
          console.log("/grid", grid);
          commit(this.MUTATION_METHODS_NAMES.setAllExample, grid);
          result(grid);
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
