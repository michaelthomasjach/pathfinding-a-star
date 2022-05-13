import { AStar } from "./AStar";
import { Cell, CellStatus } from "./Cell";

export class GridBuilder {
  private cols: number; // width of grid
  private rows: number; // height of grid
  private grid: {grid: Cell[][], astar: any};

  constructor(cols: number = 10, rows: number = 10) {
    this.cols = cols;
    this.rows = rows;
    this.grid = this.create();
  }

  private create = (): {grid: Cell[][], astar: any} => {
    const grid: Cell[][] = new Array(this.rows);
    // console.log("grid => ", grid);
    let cellId = 0;

    for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      grid[rowIndex] = new Array(this.cols);

      for (let colIndex = 0; colIndex < this.cols; colIndex++) {
        const cell = new Cell(cellId++, rowIndex, colIndex);
        if (this.getRandomInt(100) > 70) {
          cell.setWall();
        } else {
          cell.setEmpty();
        }
        grid[rowIndex][colIndex] = cell;
      }
    }

    const start = grid[0][0];
    start.setStart();
    const end = grid[this.rows - 1][this.cols - 1];
    end.setEnd();

    for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      for (let colIndex = 0; colIndex < this.cols; colIndex++) {
        // Ajout du voisin du dessous
        if (rowIndex < this.rows - 1) {
          const cell = grid[rowIndex + 1][colIndex].getCell().getId();
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin du dessus
        if (rowIndex > 0) {
          const cell = grid[rowIndex - 1][colIndex].getCell().getId();
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin de droite
        if (colIndex < this.cols - 1) {
          const cell = grid[rowIndex][colIndex + 1].getCell().getId();
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin de gauche
        if (colIndex > 0) {
          const cell = grid[rowIndex][colIndex - 1].getCell().getId();
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // DIAGONALE
        // Ajout du voisin du dessous a gauche
        if (rowIndex < this.rows - 1 && colIndex > 0) {
          const cell = grid[rowIndex + 1][colIndex - 1].getCell().getId();
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin du dessous a droite
        if (rowIndex < this.rows - 1 && colIndex < this.cols - 1) {
          const cell = grid[rowIndex + 1][colIndex + 1].getCell().getId();
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin du dessus a gauche
        if (rowIndex > 0 && colIndex > 0) {
          const cell = grid[rowIndex - 1][colIndex - 1].getCell().getId();
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
        // Ajout du voisin du dessus a droite
        if (rowIndex > 0 && colIndex < this.cols - 1) {
          const cell = grid[rowIndex - 1][colIndex + 1].getCell().getId();
          grid[rowIndex][colIndex].addNeighbor(cell);
        }
      }
    }

    // console.log(start.getCellJSON().f);
    // console.log(grid);
    const astar = new AStar(grid, start, end);
    astar.init()
    const finalPath = astar.getFinalPath();

    return {grid: astar.getGrid(), astar: finalPath ? finalPath : [] };
  };

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getGrid = (): {grid: Cell[][], astar: any} => {
    return this.grid;
  };
}
