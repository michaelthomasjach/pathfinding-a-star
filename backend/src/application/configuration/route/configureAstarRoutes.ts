import { Application } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "../../../boundedContext/user/valueObject/User";
import { QueryBus } from "../../core/query/QueryBus";
import { UserRoles } from "../middleware/UserRoles";
import { GridController } from "../../controller/GridController";

const formatUser = (queryBus: QueryBus, user: User) => {
  const userId = user.id;
  const formattedUser = { role: user.role };
  if (user.role === UserRoles.DEV) return formattedUser;
  if (userId === undefined) return { ...formattedUser };
  return { ...formattedUser };
};

export class ConfigureAstarRoutes {
  constructor(
    private BASE_ROUTE: string,
    private app: Application,
    private queryBus: QueryBus
  ) {
    this.app.get(`${this.BASE_ROUTE}/astar`, (req, res) => {
      return new GridController().getGrid(req, res);
    });
  }
}
