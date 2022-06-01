import { Application, Response } from "express";
import { QueryBus } from "../../core/query/QueryBus";
import { CommandBus } from "../../core/command/CommandBus";
import { Logger } from "../../core/Logger";
import { Timer } from "../../core/Timer";
import { ConfigureAdminRoutes } from "./configureAdminRoutes";
import { ConfigureAstarRoutes } from "./configureAstarRoutes";
import { StatusCodes } from "http-status-codes";
import { User } from "../../../boundedContext/user/valueObject/User";
import { UserRoles } from "../middleware/UserRoles";
import { ConfigureLoginRoutes } from "./configureLoginRoutes";
import { CreateJsonWebToken } from "../../../infra/authentication/CreateJsonWebToken";

export class ConfigureRoutes {
  constructor(
    private app: Application,
    private queryBus: QueryBus,
    private commandBus: CommandBus,
    private logger: Logger,
    private timer: Timer
  ) {
    const BASE_ROUTE = "/api";
    new ConfigureLoginRoutes(BASE_ROUTE, app, queryBus);
    new ConfigureAstarRoutes(BASE_ROUTE, app, queryBus);
    new ConfigureAdminRoutes(
      BASE_ROUTE,
      app,
      queryBus,
      this.userAuthorisationMiddleware(this.queryBus)
    );
  }

  userAuthorisationMiddleware = (queryBus: QueryBus) =>
    this.checkUserAuthorisationMiddleware(queryBus);

  isDevUser = (user: User) => user !== undefined && user.role === UserRoles.DEV;
  isAdminUser = (user: User) =>
    user !== undefined && user.role === UserRoles.ADMIN;

  isAuthorised = (queryBus: QueryBus, user: User, params: any) => {
    if (this.isDevUser(user)) return true;
    if (this.isAdminUser(user)) return true;
    return false;
  };

  checkUserAuthorisationMiddleware =
    (queryBus: QueryBus) => (req: Request, res: Response, next: any) => {
      // @ts-ignore
      if (this.isAuthorised(queryBus, req.user, req.params)) return next();
      res.sendStatus(StatusCodes.FORBIDDEN);
    };

  extractHeaderAuthorization = (req: Request): User | null => {
    const token = req.headers.get("authorization");
    if (token === null) return null;
    return new CreateJsonWebToken().decodeToken(token);
  };
}
