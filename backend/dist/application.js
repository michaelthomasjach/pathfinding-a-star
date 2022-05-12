"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BuildDev_1 = require("./application/BuildDev");
const Timer_1 = require("./application/core/Timer");
const port = process.env.PORT || 3000;
process.once("SIGUSR2", function () {
    process.kill(process.pid, "SIGUSR2");
});
process.on("SIGINT", function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, "SIGINT");
});
const application = new BuildDev_1.BuildDev(Timer_1.systemTimer);
application
    .getApplication()
    .listen(port, () => console.log(`Pathfinding ASTAR est up sur le port ${port}`));
// .listen(port, () => console.log(`SysPEO est up sur le port ${port}`));;
