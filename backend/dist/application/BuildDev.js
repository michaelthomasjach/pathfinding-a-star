"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildDev = void 0;
const DevLogger_1 = require("./configuration/logger/DevLogger");
const BuildApp_1 = require("./BuildApp");
const ConfigureDevRepositories_1 = require("./configuration/repository/ConfigureDevRepositories");
class BuildDev {
    constructor(timer) {
        this.timer = timer;
        this.getApplication = () => {
            const application = this.app.getBuildApp();
            return application.getExpressApp();
        };
        const repositories = new ConfigureDevRepositories_1.ConfigureDevRepositories().getRepositories();
        const port = process.env.PORT || 8081;
        this.app = new BuildApp_1.BuildApp(repositories, new DevLogger_1.DevLogger().logger(), timer);
    }
}
exports.BuildDev = BuildDev;
