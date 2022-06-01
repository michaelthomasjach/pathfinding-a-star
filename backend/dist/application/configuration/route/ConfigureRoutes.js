"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureRoutes = void 0;
const configureAdminRoutes_1 = require("./configureAdminRoutes");
const configureAstarRoutes_1 = require("./configureAstarRoutes");
const http_status_codes_1 = require("http-status-codes");
const UserRoles_1 = require("../middleware/UserRoles");
const configureLoginRoutes_1 = require("./configureLoginRoutes");
const CreateJsonWebToken_1 = require("../../../infra/authentication/CreateJsonWebToken");
class ConfigureRoutes {
    constructor(app, queryBus, commandBus, logger, timer) {
        this.app = app;
        this.queryBus = queryBus;
        this.commandBus = commandBus;
        this.logger = logger;
        this.timer = timer;
        this.userAuthorisationMiddleware = (queryBus) => this.checkUserAuthorisationMiddleware(queryBus);
        this.isDevUser = (user) => user !== undefined && user.role === UserRoles_1.UserRoles.DEV;
        this.isAdminUser = (user) => user !== undefined && user.role === UserRoles_1.UserRoles.ADMIN;
        this.isAuthorised = (queryBus, user, params) => {
            if (this.isDevUser(user))
                return true;
            if (this.isAdminUser(user))
                return true;
            return false;
        };
        this.checkUserAuthorisationMiddleware = (queryBus) => (req, res, next) => {
            // @ts-ignore
            if (this.isAuthorised(queryBus, req.user, req.params))
                return next();
            res.sendStatus(http_status_codes_1.StatusCodes.FORBIDDEN);
        };
        this.extractHeaderAuthorization = (req) => {
            const token = req.headers.get("authorization");
            if (token === null)
                return null;
            return new CreateJsonWebToken_1.CreateJsonWebToken().decodeToken(token);
        };
        const BASE_ROUTE = "/api";
        new configureLoginRoutes_1.ConfigureLoginRoutes(BASE_ROUTE, app, queryBus);
        new configureAstarRoutes_1.ConfigureAstarRoutes(BASE_ROUTE, app, queryBus);
        new configureAdminRoutes_1.ConfigureAdminRoutes(BASE_ROUTE, app, queryBus, this.userAuthorisationMiddleware(this.queryBus));
    }
}
exports.ConfigureRoutes = ConfigureRoutes;
