import { expect } from 'chai';
import {AStar} from "../src/utils/AStar";
import {before} from "mocha";
import {Cell} from "../src/utils/Cell";

describe("AStar", () => { // the tests container
    let start: Cell;
    let end: Cell;
    let grid: Cell[][] = [];
    let astar: AStar;
    const rows = 3;
    const cols = 3

    const buildGrid = (start: Cell, end: Cell, grid: Cell[][]): Cell[][] => {
        let indexCell = 0;
        let localGrid = new Array(rows)
        for(let row = 0; row < rows; row++) {
            let tempCols = new Array(cols)
            for(let col = 0; col < cols; col++) {
                tempCols[col] = new Cell(indexCell++, row, col, 0, 0, 0,[] );
            }
            localGrid[row] = tempCols;
        }
        localGrid[0][0].setStart();
        localGrid[2][2].setEnd();

        localGrid[1][1].setPreviousCell(localGrid[0][0]);
        localGrid[2][2].setPreviousCell(localGrid[1][1]);
        return localGrid;
    }

    before(() => {
        grid = buildGrid(new Cell(0, 0, 0, 0, 0, 0, []), new Cell(8, 2, 2, 0, 0, 0, []), []);
        start = grid[0][0];
        end = grid[rows -1][cols - 1];
        astar = new AStar(grid, start, end);
    });

    it("removeFromArray doit supprimer l'élément de l'array", () => {
        const array = new Array(1);
        array[0] =  "A";
        astar.removeFromArray(array, "A")
        expect(array).to.be.empty;
    });

    it("heuristic doit retourner l'hypotenuse entre start et end", () => {
        const distance = astar.heuristic(start, end);
        expect(distance).to.be.equals(2.8284271247461903);
    });

    it("retrieveCellFromID doit retourner une cellule", () => {
        const cell: Cell = astar.retrieveCellFromID(8);
        expect(cell).to.be.equals(grid[2][2]);
    });

    it("setFinalPath doit retourner une liste de cellules", () => {
        astar.setFinalPath(grid[2][2]);
        const finalPath: Cell[] = astar.getFinalPath();
        expect(finalPath).to.be.deep.equals([grid[2][2], grid[1][1], grid[0][0]]);
    });

    it("findCellWithTheSmallestDistanceF doit retourner une cellule avec la F le plus petit", () => {
        const cell1 = new Cell(0,0,0,1,0,0, []);
        const cell2 = new Cell(0,0,0,0,0,0, []);
        const cell3 = new Cell(0,0,0,5,0,0, []);
        const openSet = [];
        openSet.push(cell1, cell2, cell3);
        const cell: Cell = astar.findCellWithTheSmallestDistanceF(openSet);
        expect(cell).to.be.deep.equals(cell2);
    });

});