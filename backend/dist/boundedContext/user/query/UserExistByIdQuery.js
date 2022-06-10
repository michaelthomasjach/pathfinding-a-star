"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExistByIdQuery = exports.UserExistByIdQueryHandler = exports.USER_EXIST_BY_ID = void 0;
const Query_1 = require("../../../application/core/query/Query");
const QueryHandler_1 = require("../../../application/core/query/QueryHandler");
const Result_1 = require("../../../application/core/Result");
exports.USER_EXIST_BY_ID = "USER_EXIST_BY_ID";
class UserExistByIdQueryHandler extends QueryHandler_1.QueryHandler {
    constructor(userRepository) {
        super();
        this.userRepository = userRepository;
    }
    execute(query) {
        const users = this.userRepository.list();
        const usersID = Object.keys(users);
        let user = {};
        const exist = usersID.some((id) => {
            user = users[id];
            return id == query.id;
        });
        if (exist === true) {
            return (0, Result_1.success)(user);
        }
        return (0, Result_1.failure)("Impossible de retrouver l'utilisateur en base de données depuis son ID.");
    }
}
exports.UserExistByIdQueryHandler = UserExistByIdQueryHandler;
class UserExistByIdQuery extends Query_1.Query {
    constructor(id) {
        super(exports.USER_EXIST_BY_ID);
        this.id = id;
    }
}
exports.UserExistByIdQuery = UserExistByIdQuery;
