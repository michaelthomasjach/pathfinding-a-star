"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildApp = void 0;
const Grid_1 = require("../utils/Grid");
const CreateApp_1 = require("./CreateApp");
class BuildApp {
    constructor(logger, timer) {
        this.getApplication = () => {
            return this.app;
        };
        this.app = new CreateApp_1.CreateApp();
    }
    createApp() {
        const deck = new Grid_1.Grid();
        console.log(deck.getDeck());
    }
}
exports.BuildApp = BuildApp;
