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
      let current: Cell = this.findCellWithTheSmallestDistanceF();


      // On cherche à savoir si la cellule ACTUELLE est égale à la cellule d'arrivée
      if (current.getId() === this.end.getId()) {
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

        // Si la cellule VOISINE n'est présente dans la liste [closedSet]
        if (!this.closedSet.includes(neighborCell)) {

          /**
           * Pour aller de la cellule ACTUELLE à la cellule VOISINE on se déplace de 1 donc =>
           * G = G + 1 par rapport à la valeur de G de la cellule ACTUELLE
           */
          let tempG = current.getG() + 1;

          // Si la cellule VOISINE fait partie de la liste [openSet]
          if (this.openSet.includes(neighborCell)) {
            // Si la valeur de G calculée est inférieure à celle de la valeur de G de la cellule VOISINE alors on remplace sa valeur
            if (tempG < neighborCell.getG()) {
              neighborCell.setG(tempG);
            }
          } else {
            // Si la cellule VOISINE ne fait pas partie de la liste [openSet]
            // On initialise la valeur de G de la cellule VOISINE & on ajoute la cellule VOISINE à la liste [openSet]
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
    const distance = Math.sqrt(Math.pow(cell.getX() - end.getX(), 2) + Math.pow(cell.getY() - end.getY(), 2));
    return distance;
  };

  private removeFromArray = (array: any[], element: any) => {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] == element) {
        array.splice(i, 1);
      }
    }
  };

  private findCellWithTheSmallestDistanceF = (): Cell => {
    for (let i = 0; i < this.openSet.length; i++) {
      if (this.openSet[i].getF() < this.openSet[this.lowestFIndex].getF()) {
        this.lowestFIndex = i;
      }
    }
    return this.openSet[this.lowestFIndex];
  }

  private setFinalPath = (current: Cell) => {
    console.log(this.grid);
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

  getGrid = () => {
    return this.grid;
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
