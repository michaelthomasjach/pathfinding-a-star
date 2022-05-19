"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureAdminRoutes = void 0;
const http_status_codes_1 = require("http-status-codes");
const UserRoles_1 = require("../middleware/UserRoles");
const formatUser = (queryBus, user) => {
    const userId = user.id;
    const formattedUser = { role: user.role };
    if (user.role === UserRoles_1.UserRoles.DEV)
        return formattedUser;
    if (userId === undefined)
        return Object.assign({}, formattedUser);
    return Object.assign({}, formattedUser);
};
// TODO Faire une vraie authentification avec token JWT
class ConfigureAdminRoutes {
    constructor(app, queryBus, userAuthorisationMiddleware) {
        this.app = app;
        this.queryBus = queryBus;
        this.userAuthorisationMiddleware = userAuthorisationMiddleware;
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
            if (!userIsAuthenticated)
                return res.sendStatus(http_status_codes_1.StatusCodes.NOT_FOUND);
            res.status(http_status_codes_1.StatusCodes.OK).send(formatUser(queryBus, user));
        });
    }
}
exports.ConfigureAdminRoutes = ConfigureAdminRoutes;
;
