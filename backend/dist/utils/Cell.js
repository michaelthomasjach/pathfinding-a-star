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
    constructor(id, rowIndex, colIndex, f = 0, g = 0, h = 0, neighborsIDs = []) {
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.previousCell = null;
        this.neighborsIDs = [];
        this.status = null;
        this.addNeighbor = (id) => {
            this.neighborsIDs.push(id);
        };
        this.clearNeighbors = () => {
            this.neighborsIDs = [];
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
        this.setF = (f) => {
            this.f = f;
        };
        this.setG = (g) => {
            this.g = g;
        };
        this.setH = (h) => {
            this.h = h;
        };
        this.setPreviousCell = (cell) => {
            this.previousCell = cell;
        };
        this.getNeighborsIDs = () => {
            return this.neighborsIDs;
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
        this.getPreviousCell = () => {
            return this.previousCell;
        };
        this.getCell = () => this;
        this.getCellJSON = () => JSON.parse(JSON.stringify(this));
        this.id = id;
        this.y = rowIndex;
        this.x = colIndex;
        this.f = f;
        this.g = g;
        this.h = h;
        this.neighborsIDs = neighborsIDs;
    }
}
exports.Cell = Cell;
