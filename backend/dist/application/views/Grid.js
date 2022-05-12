"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const GridBuider_1 = require("../../utils/GridBuider");
class Grid {
    constructor() {
        this.createGrid = () => {
            return new GridBuider_1.GridBuilder(3, 3).getGrid();
        };
        this.getGrid = () => {
            return this.grid;
        };
        this.grid = this.createGrid();
    }
}
exports.Grid = Grid;
