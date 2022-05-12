import { Cell } from "./Cell";

export class AStar {
  private lowestFIndex = 0;
  private grid : Cell[][];
  // private openSet: Cell[] = [];
  private openSet: Cell[] = [];
  private closedSet: Cell[] = [];

  private readonly end: Cell;
  private readonly finalPath: Cell[] = [];

  constructor(grid: Cell[][], start: Cell, end: Cell) {
    this.openSet.push(start);
    this.end = end;
    this.grid = grid;
    this.finalPath = [];
    this.init();
  }


  init = (): Cell[] => {
    while (this.openSet.length > 0) {
      for (let i = 0; i < this.openSet.length; i++) {
        if (this.openSet[i].getF() < this.openSet[this.lowestFIndex].getF()) {
          this.lowestFIndex = i;
        }
      }

      let current: Cell = this.openSet[this.lowestFIndex];


      // Add final path
      if (current.getId() === this.end.getId()) {
        this.setFinalPath(current);
        console.log("Chemin trouvé");
      }


      this.removeFromArray(this.openSet, current);

      this.closedSet.push(this.retrieveCellFromID(current.getId()));

      const neighborsIDs = current.getNeighborsIDs();
      for (let i = 0; i < neighborsIDs.length; i++) {
        let neighborID = neighborsIDs[i];

        const neighborCell = this.retrieveCellFromID(neighborID);
        if (!this.closedSet.includes(neighborCell)) {
          let tempG = current.getG() + 1;

          if (this.openSet.includes(neighborCell)) {
            if (tempG < neighborCell.getG()) {
              neighborCell.setG(tempG);
            }
          } else {
            neighborCell.setG(tempG);
            this.openSet.push(neighborCell);
          }

          neighborCell.setH(this.heuristic(neighborCell, this.end));
          neighborCell.setF(neighborCell.getG() + neighborCell.getH());
          neighborCell.setPreviousCell(current);
        }
      }
    }
    return this.finalPath;
  };

  // calcule la distance entre le voisin et l'objectif
  // private heuristic = (a: Cell, b: Cell) => {
  private heuristic = (cell: Cell, end: Cell) => {
    const distance = Math.sqrt(Math.pow(cell.getX() - cell.getX(), 2) + Math.pow(end.getY() - end.getY(), 2));
    return distance;
  };

  private removeFromArray = (array: any[], element: any) => {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] == element) {
        array.splice(i, 1);
      }
    }
  };

  private setFinalPath = (current: Cell) => {
    //console.log(this.grid);
    let temp: Cell | null = current;
    this.finalPath.push(temp);
    while (temp != null && temp.getPreviousCell() != null) {
      //console.log("Current Node", temp.getId());
      //console.log("Previous Node", temp.getPreviousCell()?.getId());
      //console.log("--")

      this.finalPath.push(<Cell>temp.getPreviousCell());
      //console.log("finalPath :", this.finalPath);
      temp = temp.getPreviousCell();
    }
  }

  getFinalPath = () => {
    return this.finalPath;
  }

  private retrieveCellFromID = (cellId: number): Cell => {
    const flatGrid: Cell[] = this.grid.flat()
    let retrieveCell: Cell | undefined;
    flatGrid.some((cell) => {
      if (cell.getId() == cellId) {
        retrieveCell = cell;
      }
    })
    return <Cell>retrieveCell;
  }
}
