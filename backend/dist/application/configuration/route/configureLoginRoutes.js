"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureLoginRoutes = void 0;
const http_status_codes_1 = require("http-status-codes");
const UserRoles_1 = require("../middleware/UserRoles");
const LoginController_1 = require("../../controller/LoginController");
const CreateJsonWebToken_1 = require("../../../infra/authentication/CreateJsonWebToken");
const formatUser = (queryBus, user, token) => {
    const formattedUser = user;
    if (user.role === UserRoles_1.UserRoles.DEV)
        return Object.assign(Object.assign({}, formattedUser), { token });
    return Object.assign(Object.assign({}, formattedUser), { token });
};
// TODO Faire une vraie authentification avec token JWT
class ConfigureLoginRoutes {
    constructor(BASE_ROUTE, app, queryBus) {
        this.BASE_ROUTE = BASE_ROUTE;
        this.app = app;
        this.queryBus = queryBus;
        this.app.post(`${this.BASE_ROUTE}/login`, (req, res) => {
            const user = new LoginController_1.UserController(this.queryBus).getUser(req, res);
            // @ts-ignore
            const userIsAuthenticated = user !== undefined;
            if (!userIsAuthenticated)
                return res.sendStatus(http_status_codes_1.StatusCodes.NOT_FOUND);
            const token = new CreateJsonWebToken_1.CreateJsonWebToken().generateToken(user);
            res.status(http_status_codes_1.StatusCodes.OK).send({ token });
        });
    }
}
exports.ConfigureLoginRoutes = ConfigureLoginRoutes;
