import { Application, Response, Request, NextFunction } from "express";
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
import { UserExistByIdQuery } from "../../../boundedContext/user/query/UserExistByIdQuery";

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

  isAuthorised = (queryBus: QueryBus, user: User) => {
    if (this.isDevUser(user)) return true;
    if (this.isAdminUser(user)) return true;
    return false;
  };

  checkUserAuthorisationMiddleware =
    (queryBus: QueryBus) =>
    (req: Request, res: Response, next: NextFunction) => {
      const user = this.extractHeaderAuthorization(req);
      if (user) {
        const result = queryBus.dispatch(new UserExistByIdQuery(user.id));
        // @ts-ignore
        if (this.isAuthorised(queryBus, user)) {
          req.user = user;
          return next();
        }
      }
      res.sendStatus(StatusCodes.FORBIDDEN);
    };

  extractHeaderAuthorization = (req: Request): User | null => {
    const headers: any = req.headers;
    const token = headers.token.split(" ")[1];
    if (token === null || typeof token == "undefined") return null;
    return new CreateJsonWebToken().decodeToken(token);
  };
}
