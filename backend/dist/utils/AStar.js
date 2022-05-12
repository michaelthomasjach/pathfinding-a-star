"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AStar = void 0;
class AStar {
    constructor(grid, start, end) {
        this.lowestFIndex = 0;
        // private openSet: Cell[] = [];
        this.openSet = [];
        this.closedSet = [];
        this.finalPath = [];
        this.init = () => {
            while (this.openSet.length > 0) {
                for (let i = 0; i < this.openSet.length; i++) {
                    if (this.openSet[i].getF() < this.openSet[this.lowestFIndex].getF()) {
                        this.lowestFIndex = i;
                    }
                }
                let current = this.openSet[this.lowestFIndex];
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
                        }
                        else {
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
        this.heuristic = (cell, end) => {
            const distance = Math.sqrt(Math.pow(cell.getX() - cell.getX(), 2) + Math.pow(end.getY() - end.getY(), 2));
            return distance;
        };
        this.removeFromArray = (array, element) => {
            for (let i = array.length - 1; i >= 0; i--) {
                if (array[i] == element) {
                    array.splice(i, 1);
                }
            }
        };
        this.setFinalPath = (current) => {
            var _a;
            console.log(this.grid);
            let temp = current;
            this.finalPath.push(temp);
            while (temp != null && temp.getPreviousCell() != null) {
                console.log("Current Node", temp.getId());
                console.log("Previous Node", (_a = temp.getPreviousCell()) === null || _a === void 0 ? void 0 : _a.getId());
                console.log("--");
                this.finalPath.push(temp.getPreviousCell());
                console.log("finalPath :", this.finalPath);
                temp = temp.getPreviousCell();
            }
        };
        this.getFinalPath = () => {
            return this.finalPath;
        };
        this.retrieveCellFromID = (cellId) => {
            // console.log("GRID", this.grid);
            // console.log("FLAT", this.grid.flat());
            const flatGrid = this.grid.flat();
            let retrieveCell;
            flatGrid.some((cell) => {
                if (cell.getId() == cellId) {
                    retrieveCell = cell;
                }
            });
            return retrieveCell;
        };
        this.openSet.push(start);
        this.end = end;
        this.grid = grid;
        this.finalPath = [];
        this.init();
    }
}
exports.AStar = AStar;
