"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildDev = void 0;
const DevLogger_1 = require("./configuration/DevLogger");
const BuildApp_1 = require("./BuildApp");
class BuildDev {
    constructor(timer) {
        this.timer = timer;
        const port = process.env.PORT || 8081;
        this.app = new BuildApp_1.BuildApp(new DevLogger_1.DevLogger().logger(), timer);
        this.app.getApplication().getApp().listen(port, () => console.log(`Pathfinding ASTAR est up sur le port ${port}`));
    }
}
exports.BuildDev = BuildDev;
;
