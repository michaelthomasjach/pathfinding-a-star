import { BuildDev } from "./application/BuildDev";
import {systemTimer} from "./application/core/Timer";

const port = process.env.PORT || 3000;
const application = new BuildDev(systemTimer);
application.getApplication().listen(port, () => console.log(`Pathfinding ASTAR est up sur le port ${port}`))
// .listen(port, () => console.log(`SysPEO est up sur le port ${port}`));; 