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
        this.status = null;
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
        this.getZone = () => {
            return this.status;
        };
        this.getId = () => {
            return this.id;
        };
        this.getCell = () => ({
            id: this.id,
            cell: this.status,
        });
        this.getInstance = () => {
            return this;
        };
        this.id = id;
    }
}
exports.Cell = Cell;
