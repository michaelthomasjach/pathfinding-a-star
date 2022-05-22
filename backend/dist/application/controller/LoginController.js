"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserNameFromUserIdQueryHandler_1 = require("../../boundedContext/user/query/UserNameFromUserIdQueryHandler");
class UserController {
    constructor(queryBus) {
        this.queryBus = queryBus;
        this.getUser = (req, res) => {
            // @ts-ignore
            const { email, password } = req.body;
            return this.queryBus.dispatch(new UserNameFromUserIdQueryHandler_1.UserExistQuery(email, password));
        };
    }
}
exports.UserController = UserController;
