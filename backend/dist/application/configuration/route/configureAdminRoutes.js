"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureAdminRoutes = void 0;
const http_status_codes_1 = require("http-status-codes");
const UserRoles_1 = require("../middleware/UserRoles");
// TODO Faire une vraie authentification avec token JWT
class ConfigureAdminRoutes {
    constructor(BASE_ROUTE, app, queryBus, userAuthorisationMiddleware) {
        this.BASE_ROUTE = BASE_ROUTE;
        this.app = app;
        this.queryBus = queryBus;
        this.userAuthorisationMiddleware = userAuthorisationMiddleware;
        this.formatUser = (queryBus, user) => {
            const userId = user.id;
            const formattedUser = user;
            if (user.role === UserRoles_1.UserRoles.DEV)
                return formattedUser;
            if (userId === undefined)
                return Object.assign({}, formattedUser);
            return Object.assign({}, formattedUser);
        };
        this.app.get(`${this.BASE_ROUTE}/admin`, this.userAuthorisationMiddleware, (req, res) => {
            // @ts-ignore
            // const user = req.user;
            console.log("HEADERS :", req);
            const user = req.header;
            const userIsAuthenticated = user !== undefined;
            if (!userIsAuthenticated)
                return res.sendStatus(http_status_codes_1.StatusCodes.NOT_FOUND);
            res.status(http_status_codes_1.StatusCodes.OK).send(this.formatUser(queryBus, user));
        });
    }
}
exports.ConfigureAdminRoutes = ConfigureAdminRoutes;
