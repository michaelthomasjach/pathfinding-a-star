import { Application } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "../../../boundedContext/user/valueObject/User";
import { QueryBus } from "../../core/query/QueryBus";
import { UserRoles } from "../middleware/UserRoles";

// TODO Faire une vraie authentification avec token JWT
export class ConfigureAdminRoutes {
  constructor(
    private BASE_ROUTE: string,
    private app: Application,
    private queryBus: QueryBus,
    private userAuthorisationMiddleware: any
  ) {
    this.app.get(
      `${this.BASE_ROUTE}/admin`,
      this.userAuthorisationMiddleware,
      (req, res) => {
        // @ts-ignore
        const user: any = req.user;
        // const user: any = req.header;

        const userIsAuthenticated = user !== undefined;
        if (!userIsAuthenticated) return res.sendStatus(StatusCodes.FORBIDDEN);
        res.sendStatus(StatusCodes.OK);
      }
    );
  }

  formatUser = (queryBus: QueryBus, user: User) => {
    const formattedUser = user;
    if (user.role === UserRoles.DEV) return formattedUser;
    if (user.id === undefined) return { ...formattedUser };
    return { ...formattedUser };
  };
}
