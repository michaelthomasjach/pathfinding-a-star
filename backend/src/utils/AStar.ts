import {Cell, CellStatus} from "./Cell";

export class AStar {
  private grid : Cell[][];
  // private openSet: Cell[] = [];
  private openSet: Cell[] = [];
  private closedSet: Cell[] = [];
  private readonly end: Cell;
  private readonly finalPath: Cell[] = [];
  private solutionFound = false;

  constructor(grid: Cell[][], start: Cell, end: Cell) {
    this.openSet.push(start);
    this.end = end;
    this.grid = grid;
    this.finalPath = [];
  }

  init = (): Cell[] => {
    /**
     *  G = distance entre la cellule de départ et la cellule (chaque déplacement de cellule vaut 1)
     *  Si la cellule est à 3 déplacements de la cellule de départ alors G = 3
     */

    /**
     * H = distance (hypotenuse) entre la cellule et la cellule de fin
     */

    /**
     * F = somme des distances G + H (la distance la plus petite et le meilleur chemin)
     */

    while (this.openSet.length > 0) {
      // Pour chaque cellule présente dans l'openSet on cherche à récupérer la cellule avec la valeur F la plus petite
      let current: Cell = this.findCellWithTheSmallestDistanceF(this.openSet);


      // On cherche à savoir si la cellule ACTUELLE est égale à la cellule d'arrivée
      if (current.getId() === this.end.getId()) {
        this.solutionFound = true;
        this.setFinalPath(current);
        console.log("Chemin trouvé");
      }

      // Une fois la cellule ACTUELLE analysée, on la supprime de la liste [openSet] et on l'ajoute à la liste [closedSet] pour ne pas l'analyser de nouveau
      this.removeFromArray(this.openSet, current);
      this.closedSet.push(this.retrieveCellFromID(current.getId()));


      // On cherche à récupérer toutes les cellules VOISINES de la cellule ACTUELLE
      const neighborsIDs = current.getNeighborsIDs();

      // Pour chaque cellule VOISINE
      for (let i = 0; i < neighborsIDs.length; i++) {
        const neighborCell = this.retrieveCellFromID(neighborsIDs[i]);

        // Si la cellule VOISINE n'est présente dans la liste [closedSet] et que la cellule VOISINE n'est pas un obstacle
        if (!this.closedSet.includes(neighborCell)
            && neighborCell.getStatus() !== CellStatus.WALL) {

          /**
           * Pour aller de la cellule ACTUELLE à la cellule VOISINE on se déplace de 1 donc =>
           * G = G + 1 par rapport à la valeur de G de la cellule ACTUELLE
           */
          let tempG = current.getG() + 1;


          // Si la cellule VOISINE fait partie de la liste [openSet]
          let newPath = false;
          if (this.openSet.includes(neighborCell)) {
            // Si la valeur de G calculée est inférieure à celle de la valeur de G de la cellule VOISINE alors on remplace sa valeur
            if (tempG < neighborCell.getG()) {
              neighborCell.setG(tempG);
              newPath = true;
            }
          } else {
            // Si la cellule VOISINE ne fait pas partie de la liste [openSet]
            // On initialise la valeur de G de la cellule VOISINE & on ajoute la cellule VOISINE à la liste [openSet]
            neighborCell.setG(tempG);
            newPath = true;
            this.openSet.push(neighborCell);
          }

          if (newPath) {
            neighborCell.setH(this.heuristic(neighborCell, this.end));
            neighborCell.setF(neighborCell.getG() + neighborCell.getH());
            neighborCell.setPreviousCell(current);
          }
        }
      }
    }
    if (!this.solutionFound) {
      console.log("Aucune solution trouvée !")
      return [];
    }
    return this.finalPath;
  };

  // Private
  heuristic = (cell: Cell, end: Cell) => {
    // calcule la distance entre le voisin et l'objectif
    const distance = Math.sqrt(Math.pow(cell.getX() - end.getX(), 2) + Math.pow(cell.getY() - end.getY(), 2));
    return distance;
  };

  // Private
  removeFromArray = (array: any[], element: any) => {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] == element) {
        array.splice(i, 1);
      }
    }
  };

  // Private
  findCellWithTheSmallestDistanceF = (openSet: Cell[]): Cell => {
    let lowestFIndex = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].getF() < openSet[lowestFIndex].getF()) {
        lowestFIndex = i;
      }
    }
    return openSet[lowestFIndex];
  }

  // Private
  setFinalPath = (current: Cell) => {
    let temp: Cell | null = current;
    this.finalPath.push(temp);
    while (temp != null && temp.getPreviousCell() != null) {
      this.finalPath.push(<Cell>temp.getPreviousCell());
      temp = temp.getPreviousCell();
    }
  }

  // Private
  retrieveCellFromID = (cellId: number): Cell => {
    const flatGrid: Cell[] = this.grid.flat()
    let retrieveCell: Cell | undefined;
    flatGrid.some((cell) => {
      if (cell.getId() == cellId) {
        retrieveCell = cell;
      }
    })
    return <Cell>retrieveCell;
  }

  getFinalPath = () => {
    return this.finalPath;
  }

  getGrid = () => {
    return this.grid;
  }
}
