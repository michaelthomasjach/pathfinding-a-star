"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureAstarRoutes = void 0;
const UserRoles_1 = require("../middleware/UserRoles");
const GridController_1 = require("../../controller/GridController");
const formatUser = (queryBus, user) => {
    const formattedUser = { role: user.role };
    if (user.role === UserRoles_1.UserRoles.DEV)
        return formattedUser;
    if (user.id === undefined)
        return formattedUser;
    return formattedUser;
};
class ConfigureAstarRoutes {
    constructor(BASE_ROUTE, app, queryBus) {
        this.BASE_ROUTE = BASE_ROUTE;
        this.app = app;
        this.queryBus = queryBus;
        this.app.get(`${this.BASE_ROUTE}/astar`, (req, res) => {
            return new GridController_1.GridController().getGrid(req, res);
        });
    }
}
exports.ConfigureAstarRoutes = ConfigureAstarRoutes;
