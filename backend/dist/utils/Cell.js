"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = exports.CellStatus = void 0;
var CellStatus;
(function (CellStatus) {
    CellStatus["WALL"] = "WALL";
    CellStatus["EMPTY"] = "EMPTY";
    CellStatus["START"] = "START";
    CellStatus["END"] = "END";
})(CellStatus = exports.CellStatus || (exports.CellStatus = {}));
class Cell {
    constructor(id, rowIndex, colIndex) {
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbors = [];
        this.status = null;
        this.addNeighbor = (cell) => {
            this.neighbors.push(cell);
        };
        this.setWall = () => {
            this.status = CellStatus.WALL;
        };
        this.setEmpty = () => {
            this.status = CellStatus.EMPTY;
        };
        this.setStart = () => {
            this.status = CellStatus.START;
        };
        this.setEnd = () => {
            this.status = CellStatus.END;
        };
        this.getNeighbors = () => {
            return this.neighbors;
        };
        this.getZone = () => {
            return this.status;
        };
        this.getId = () => {
            return this.id;
        };
        this.getX = () => {
            return this.x;
        };
        this.getY = () => {
            return this.y;
        };
        this.getF = () => {
            return this.f;
        };
        this.getG = () => {
            return this.g;
        };
        this.getH = () => {
            return this.h;
        };
        this.getCell = () => this;
        this.getCellJSON = () => JSON.parse(JSON.stringify(this));
        this.id = id;
        this.y = rowIndex;
        this.x = colIndex;
    }
}
exports.Cell = Cell;
