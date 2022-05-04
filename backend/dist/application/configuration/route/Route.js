"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const GridController_1 = require("../../controller/GridController");
class Route {
    constructor(app) {
        this.routes = () => {
            this.app.get('/', (req, res) => {
                console.log("OK");
                return new GridController_1.GridController().getGrid(req, res);
            });
        };
        this.app = app;
        this.routes();
    }
}
exports.Route = Route;
