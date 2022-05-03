import {Grid} from "../utils/Grid";

import { Logger } from "./core/Logger";
import { Timer } from "./core/Timer";
import { CreateApp } from "./CreateApp";

export class BuildApp {
    private app: CreateApp;
    constructor(logger: Logger, timer: Timer) {
        this.app = new CreateApp();
    }

    getApplication = (): CreateApp  => {
        return this.app;
    }

    private createApp() {
        const deck = new Grid();
        console.log(deck.getDeck());
    }
}