import { Cell, CellStatus } from "./Cell";

export class GridBuilder {
  private cols: number; // width of grid
  private rows: number; // height of grid
  private grid: Cell[][];

  constructor(width: number = 10, height: number = 10) {
    this.cols = width;
    this.rows = height;
    this.grid = this.create();
  }

  private create = (): Cell[][] => {
    const grid = [];
    let start = false;
    let end = false;

    for (let rowIndex = 1; rowIndex < this.rows + 1; rowIndex++) {
      const row: Array<Cell> = [];

      for (let colIndex = 1; colIndex < this.cols + 1; colIndex++) {
        const cell = new Cell(rowIndex * colIndex);
        if (this.getRandomInt(10) > 8) {
          cell.setWall();
          row.push(cell);
        } else {
          cell.setEmpty();
          row.push(cell);
        }
      }
      grid.push(row);
    }
    return grid;
  };

  private createStart = () => {
    const start = this.getRandomInt(this.cols * this.rows);
  };

  private getBlock = (block: number, grid: Cell[][]) => {
    const row = Math.floor(block / this.cols);
    const line = block % this.cols;
    return grid[row][line];
  };

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getGrid = (): Cell[][] => {
    return this.grid;
  };
}
