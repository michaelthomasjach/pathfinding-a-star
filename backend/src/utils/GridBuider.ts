import { Cell, CellStatus } from "./Cell";

export class GridBuilder {
  private cols: number; // width of grid
  private rows: number; // height of grid
  private grid: Cell[][];

  constructor(cols: number = 10, rows: number = 10) {
    this.cols = cols;
    this.rows = rows;
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
    grid[0][0].setStart();
    grid[this.rows - 1][this.cols - 1].setEnd();
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
