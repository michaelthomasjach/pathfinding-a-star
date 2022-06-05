import { Grid } from "../../boundedContext/grid/Grid";
import { Request, Response } from "express";
import { QueryBus } from "../core/query/QueryBus";
import { UserExistByEmailAndPasswordQuery } from "../../boundedContext/user/query/UserExistByEmailAndPasswordQuery";

export class UserController {
  constructor(private queryBus: QueryBus) {}

  getUser = (req: Request, res: Response) => {
    // @ts-ignore
    const { email, password } = req.body;
    return this.queryBus.dispatch(
      new UserExistByEmailAndPasswordQuery(email, password)
    );
  };
}
