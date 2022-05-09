import { Zone } from "../../utils/Block";
import { GridBuilder } from "../../utils/GridBuider";

export class Grid {
  private grid: any;
  constructor() {
    this.grid = this.build();
    const grid = this.createGrid();
  }

  private build = () => {
    return "la réponse du backend";
  };

  private createGrid = () => {
    const grid: Zone[][] = new GridBuilder(10, 10).getGrid();
  };

  getGrid = () => {
    return this.grid;
  };
}
