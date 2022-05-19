import { BuildDev } from "./application/BuildDev";
import { systemTimer } from "./application/core/Timer";

const port = process.env.PORT || 3000;
process.once("SIGUSR2", function () {
  process.kill(process.pid, "SIGUSR2");
});

process.on("SIGINT", function () {
  // this is only called on ctrl+c, not restart
  process.kill(process.pid, "SIGINT");
});

const applicationDev = new BuildDev(systemTimer);
applicationDev
  .getApplication()
  .listen(port, () =>
    console.log(`Pathfinding ASTAR est up sur le port ${port}`)
  );
