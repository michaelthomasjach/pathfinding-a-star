import { Route } from "./configuration/route/Route";

import { Logger } from "./core/Logger";
import { Timer } from "./core/Timer";
import { CreateApp } from "./CreateApp";

export class BuildApp {
    private app: CreateApp;
    constructor(logger: Logger, timer: Timer) {
        this.app = new CreateApp();
        new Route(this.app.getExpressApp());
    }

    getBuildApp = (): CreateApp  => {
        return this.app;
    }
}