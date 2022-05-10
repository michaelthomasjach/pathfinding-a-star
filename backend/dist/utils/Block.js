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
    constructor(id) {
        this.cell = null;
        this.setWall = () => {
            this.cell = CellStatus.WALL;
        };
        this.setEmpty = () => {
            this.cell = CellStatus.EMPTY;
        };
        this.setStart = () => {
            this.cell = CellStatus.START;
        };
        this.setEnd = () => {
            this.cell = CellStatus.END;
        };
        this.getZone = () => {
            return this.cell;
        };
        this.getId = () => {
            return this.id;
        };
        this.getCell = () => ({
            id: this.id,
            cell: this.cell,
        });
        this.getInstance = () => {
            return this;
        };
        this.id = id;
    }
}
exports.Cell = Cell;
