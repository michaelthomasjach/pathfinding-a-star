"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const GridBuider_1 = require("../../utils/GridBuider");
class Grid {
    constructor() {
        this.build = () => {
            return "la réponse du backend";
        };
        this.createGrid = () => {
            const grid = new GridBuider_1.GridBuilder(10, 10).getGrid();
        };
        this.getGrid = () => {
            return this.grid;
        };
        this.grid = this.build();
        const grid = this.createGrid();
    }
}
exports.Grid = Grid;
