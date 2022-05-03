"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = exports.Zone = void 0;
var Zone;
(function (Zone) {
    Zone["WALL"] = "WALL";
    Zone["EMPTY"] = "EMPTY";
})(Zone = exports.Zone || (exports.Zone = {}));
class Block {
    constructor() {
        this.Wall = () => {
            return Zone.WALL;
        };
        this.Empty = () => {
            return Zone.EMPTY;
        };
    }
}
exports.Block = Block;
