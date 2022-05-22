import { Application } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "../../../boundedContext/user/valueObject/User";
import { QueryBus } from "../../core/query/QueryBus";
import { UserRoles } from "../middleware/UserRoles";
import { UserController } from "../../controller/LoginController";
import { CreateJsonWebToken } from "../../../infra/authentication/CreateJsonWebToken";

const formatUser = (queryBus: QueryBus, user: User, token: string) => {
  const formattedUser = user;
  if (user.role === UserRoles.DEV) return { ...formattedUser, token };
  return { ...formattedUser, token };
};

// TODO Faire une vraie authentification avec token JWT
export class ConfigureLoginRoutes {
  constructor(
    private BASE_ROUTE: string,
    private app: Application,
    private queryBus: QueryBus
  ) {
    this.app.post(`${this.BASE_ROUTE}/login`, (req, res) => {
      const user = new UserController(this.queryBus).getUser(req, res);
      console.log("USER", user);
      // @ts-ignore
      const userIsAuthenticated = user !== undefined;
      if (!userIsAuthenticated) return res.sendStatus(StatusCodes.NOT_FOUND);
      const token = new CreateJsonWebToken().generateToken(user);
      res.status(StatusCodes.OK).send({ token });
    });
  }
}
