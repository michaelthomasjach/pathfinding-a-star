import {Timer} from "./core/Timer";

import {DevLogger} from "./configuration/DevLogger";
import { BuildApp } from "./BuildApp";

export class BuildDev {
    private app: BuildApp;
    constructor (private timer: Timer) {
        const port = process.env.PORT || 8081;
        this.app = new BuildApp(new DevLogger().logger(), timer);
        this.app.getApplication().getApp().listen(port, () => console.log(`Pathfinding ASTAR est up sur le port ${port}`))
    }
};
