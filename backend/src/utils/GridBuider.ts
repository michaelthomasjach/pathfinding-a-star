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
    const grid: Cell[][] = new Array(this.rows);
    console.log("grid => ", grid);
    let start = false;
    let end = false;
    let cellId = 0;

    for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      grid[rowIndex] = new Array(this.cols);

      for (let colIndex = 0; colIndex < this.cols; colIndex++) {
        const cell = new Cell(cellId++, rowIndex, colIndex);
        if (this.getRandomInt(10) > 8) {
          cell.setWall();
        } else {
          cell.setEmpty();
        }
        grid[rowIndex][colIndex] = cell;
      }
    }

    grid[0][0].setStart();
    grid[this.rows - 1][this.cols - 1].setEnd();

    for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      for (let colIndex = 0; colIndex < this.cols; colIndex++) {
        // Ajout du voisin du dessous
        if (rowIndex < this.rows - 1) {
          const cell = grid[rowIndex + 1][colIndex].getCellJSON();
          delete cell.neighbors;
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin du dessus
        if (rowIndex > 0) {
          const cell = grid[rowIndex - 1][colIndex].getCellJSON();
          delete cell.neighbors;
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin de droite
        if (colIndex < this.cols - 1) {
          const cell = grid[rowIndex][colIndex + 1].getCellJSON();
          delete cell.neighbors;
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin de gauche
        if (colIndex > 0) {
          const cell = grid[rowIndex][colIndex - 1].getCellJSON();
          delete cell.neighbors;
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // DIAGONALE
        // Ajout du voisin du dessous a gauche
        if (rowIndex < this.rows - 1 && colIndex > 0) {
          const cell = grid[rowIndex + 1][colIndex - 1].getCellJSON();
          delete cell.neighbors;
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin du dessous a droite
        if (rowIndex < this.rows - 1 && colIndex < this.cols - 1) {
          const cell = grid[rowIndex + 1][colIndex + 1].getCellJSON();
          delete cell.neighbors;
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin du dessus a gauche
        if (rowIndex > 0 && colIndex > 0) {
          const cell = grid[rowIndex - 1][colIndex - 1].getCellJSON();
          delete cell.neighbors;
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin du dessus a droite
        if (rowIndex > 0 && colIndex < this.cols - 1) {
          const cell = grid[rowIndex - 1][colIndex + 1].getCellJSON();
          delete cell.neighbors;
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
      }
    }

    return grid;
  };

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getGrid = (): Cell[][] => {
    return this.grid;
  };
}
