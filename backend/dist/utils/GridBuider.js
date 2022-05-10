"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridBuilder = void 0;
const Cell_1 = require("./Cell");
class GridBuilder {
    constructor(width = 10, height = 10) {
        this.create = () => {
            const grid = [];
            let start = false;
            let end = false;
            for (let rowIndex = 1; rowIndex < this.rows + 1; rowIndex++) {
                const row = [];
                for (let colIndex = 1; colIndex < this.cols + 1; colIndex++) {
                    const cell = new Cell_1.Cell(rowIndex * colIndex);
                    if (this.getRandomInt(10) > 8) {
                        cell.setWall();
                        row.push(cell);
                    }
                    else {
                        cell.setEmpty();
                        row.push(cell);
                    }
                }
                grid.push(row);
            }
            return grid;
        };
        this.createStart = () => {
            const start = this.getRandomInt(this.cols * this.rows);
        };
        this.getBlock = (block, grid) => {
            const row = Math.floor(block / this.cols);
            const line = block % this.cols;
            return grid[row][line];
        };
        this.getGrid = () => {
            return this.grid;
        };
        this.cols = width;
        this.rows = height;
        this.grid = this.create();
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
exports.GridBuilder = GridBuilder;
