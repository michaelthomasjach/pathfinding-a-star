"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureAstarRoutes = void 0;
const UserRoles_1 = require("../middleware/UserRoles");
const GridController_1 = require("../../controller/GridController");
const formatUser = (queryBus, user) => {
    const userId = user.id;
    const formattedUser = { role: user.role };
    if (user.role === UserRoles_1.UserRoles.DEV)
        return formattedUser;
    if (userId === undefined)
        return Object.assign({}, formattedUser);
    return Object.assign({}, formattedUser);
};
class ConfigureAstarRoutes {
    constructor(app, queryBus) {
        this.app = app;
        this.queryBus = queryBus;
        this.app.get("/astar", (req, res) => {
            return new GridController_1.GridController().getGrid(req, res);
        });
    }
}
exports.ConfigureAstarRoutes = ConfigureAstarRoutes;
;
