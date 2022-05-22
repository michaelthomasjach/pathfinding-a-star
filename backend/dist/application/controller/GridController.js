"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridController = void 0;
const Grid_1 = require("../../boundedContext/grid/Grid");
class GridController {
    constructor() {
        this.getGrid = (req, res) => {
            res.send(new Grid_1.Grid().getGrid());
        };
    }
}
exports.GridController = GridController;
