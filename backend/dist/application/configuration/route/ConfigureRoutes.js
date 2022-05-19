"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureRoutes = void 0;
const configureAdminRoutes_1 = require("./configureAdminRoutes");
const configureAstarRoutes_1 = require("./configureAstarRoutes");
const http_status_codes_1 = require("http-status-codes");
const UserRoles_1 = require("../middleware/UserRoles");
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
        new configureAstarRoutes_1.ConfigureAstarRoutes(app, queryBus);
        new configureAdminRoutes_1.ConfigureAdminRoutes(app, queryBus, this.userAuthorisationMiddleware(this.queryBus));
    }
}
exports.ConfigureRoutes = ConfigureRoutes;
;
