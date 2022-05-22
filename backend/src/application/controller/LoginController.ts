import { Grid } from "../../boundedContext/grid/Grid";
import { Request, Response } from "express";
import {QueryBus} from "../core/query/QueryBus";
import {USER_EXIST, UserExistQuery} from "../../boundedContext/user/query/UserNameFromUserIdQueryHandler";

export class UserController {
    constructor(private queryBus: QueryBus) {}

    getUser = (req: Request, res: Response) => {
        // @ts-ignore
        const {email, password} = req.body;
        return this.queryBus.dispatch(new UserExistQuery(email, password))
    };
}
