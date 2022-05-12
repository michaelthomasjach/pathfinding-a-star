import { Cell } from "../../utils/Cell";
import { GridBuilder } from "../../utils/GridBuider";

export class Grid {
  private grid: any;
  constructor() {
    this.grid = this.createGrid();
  }

  private createGrid = (): {grid: Cell[][], astar: any} => {
    return new GridBuilder(50, 20 ).getGrid();
  };

  getGrid = () => {
    return this.grid;
  };
}
