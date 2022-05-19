import {Application} from "express";
import {StatusCodes} from "http-status-codes";
import {User} from "../../../boundedContext/user/valueObject/User";
import {QueryBus} from "../../core/query/QueryBus";
import {UserRoles} from "../middleware/UserRoles";


const formatUser = (queryBus: QueryBus, user: User) => {
    const userId = user.id;
    const formattedUser = user;
    if (user.role === UserRoles.DEV) return formattedUser;
    if (userId === undefined) return {...formattedUser};
    return {...formattedUser};
};

// TODO Faire une vraie authentification avec token JWT
export class ConfigureAdminRoutes {
    constructor(private app: Application, private queryBus: QueryBus, private userAuthorisationMiddleware: any) {
        this.app.get("/admin", (req, res) => {
            // @ts-ignore
            // const user = req.user;
            const user = {
                "id": "1",
                "firstname": "Mike",
                "lastname": "Jach",
                "role": "ADMIN"
            };
            const userIsAuthenticated = user !== undefined;
            if (!userIsAuthenticated) return res.sendStatus(StatusCodes.NOT_FOUND);
            res.status(StatusCodes.OK).send(formatUser(queryBus, user));
        });
    }
};
