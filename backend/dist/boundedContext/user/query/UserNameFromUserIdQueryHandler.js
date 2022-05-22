"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExistQuery = exports.UserExistQueryHandler = exports.USER_EXIST = void 0;
const Query_1 = require("../../../application/core/query/Query");
const QueryHandler_1 = require("../../../application/core/query/QueryHandler");
const Result_1 = require("../../../application/core/Result");
exports.USER_EXIST = "USER_EXIST";
class UserExistQueryHandler extends QueryHandler_1.QueryHandler {
    constructor(userRepository) {
        super();
        this.userRepository = userRepository;
    }
    execute(query) {
        const users = this.userRepository.list();
        const usersID = Object.keys(users);
        let user = {};
        const exist = usersID.some((userId) => {
            user = users[userId];
            return (users[userId].email == query.email && users[userId].password == query.password);
        });
        if (exist === true) {
            return (0, Result_1.success)(user);
        }
        return (0, Result_1.failure)("Impossible de retrouver l'utilisateur en base de données.");
    }
}
exports.UserExistQueryHandler = UserExistQueryHandler;
class UserExistQuery extends Query_1.Query {
    constructor(email, password) {
        super(exports.USER_EXIST);
        this.email = email;
        this.password = password;
    }
}
exports.UserExistQuery = UserExistQuery;
