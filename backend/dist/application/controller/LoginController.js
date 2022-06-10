"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserExistByEmailAndPasswordQuery_1 = require("../../boundedContext/user/query/UserExistByEmailAndPasswordQuery");
class UserController {
    constructor(queryBus) {
        this.queryBus = queryBus;
        this.getUser = (req, res) => {
            // @ts-ignore
            const { email, password } = req.body;
            return this.queryBus.dispatch(new UserExistByEmailAndPasswordQuery_1.UserExistByEmailAndPasswordQuery(email, password));
        };
    }
}
exports.UserController = UserController;
