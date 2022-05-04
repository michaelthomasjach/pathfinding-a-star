"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildApp = void 0;
const Route_1 = require("./configuration/route/Route");
const CreateApp_1 = require("./CreateApp");
class BuildApp {
    constructor(logger, timer) {
        this.getBuildApp = () => {
            return this.app;
        };
        this.app = new CreateApp_1.CreateApp();
        new Route_1.Route(this.app.getExpressApp());
    }
}
exports.BuildApp = BuildApp;
