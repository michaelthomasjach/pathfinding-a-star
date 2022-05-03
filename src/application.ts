import { BuildDev } from "./application/BuildDev";
import {systemTimer} from "./application/core/Timer";

const port = process.env.PORT || 8081;
const application = new BuildDev(systemTimer);
// .listen(port, () => console.log(`SysPEO est up sur le port ${port}`));; 