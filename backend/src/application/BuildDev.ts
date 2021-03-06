import { Timer } from "./core/Timer";
import { Application } from "express";

import { DevLogger } from "./configuration/logger/DevLogger";
import { BuildApp } from "./BuildApp";
import { CreateApp } from "./CreateApp";
import {Repositories} from "./configuration/repository/Repositories";
import {ConfigureDevRepositories} from "./configuration/repository/ConfigureDevRepositories";

export class BuildDev {
  private app: BuildApp;
  constructor(private timer: Timer) {
    const repositories: Repositories = new ConfigureDevRepositories().getRepositories();
    const port = process.env.PORT || 8081;
    this.app = new BuildApp(repositories, new DevLogger().logger(), timer);
  }

  getApplication = (): Application => {
    const application: CreateApp = this.app.getBuildApp();
    return application.getExpressApp();
  };
}
