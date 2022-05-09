"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridBuilder = void 0;
const Block_1 = require("./Block");
class GridBuilder {
    constructor(width = 10, height = 10) {
        this.create = () => {
            const grid = [];
            for (let height = 0; height < this.height; height++) {
                const row = [];
                for (let i = 0; i < this.width; i++) {
                    if (this.getRandomInt(10) > 8) {
                        row.push(new Block_1.Block().Wall());
                    }
                    else {
                        row.push(new Block_1.Block().Empty());
                    }
                }
                grid.push(row);
            }
            return grid;
        };
        this.getGrid = () => {
            return this.grid;
        };
        this.width = width;
        this.height = height;
        this.grid = this.create();
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
exports.GridBuilder = GridBuilder;
