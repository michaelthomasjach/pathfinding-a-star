import { Cell } from "../../utils/Cell";
import { GridBuilder } from "../../utils/GridBuider";

export class Grid {
  private grid: any;
  constructor() {
    this.grid = this.createGrid();
  }

  private createGrid = (): Cell[][] => {
    return new GridBuilder(10, 10).getGrid();
  };

  getGrid = () => {
    return this.grid;
  };
}
