"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridController = void 0;
const Grid_1 = require("../../boundedContext/grid/Grid");
class GridController {
    constructor() {
        this.getGrid = (req, res) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Max-Age", "1800");
            res.setHeader("Access-Control-Allow-Headers", "content-type");
            res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
            res.send(new Grid_1.Grid().getGrid());
        };
    }
}
exports.GridController = GridController;
