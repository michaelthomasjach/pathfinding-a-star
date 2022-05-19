"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExistsQuery = exports.UserExistsQueryHandler = exports.USER_EXISTS = void 0;
const Query_1 = require("../../../application/core/query/Query");
const QueryHandler_1 = require("../../../application/core/query/QueryHandler");
const Result_1 = require("../../../application/core/Result");
exports.USER_EXISTS = "USER_EXISTS";
class UserExistsQueryHandler extends QueryHandler_1.QueryHandler {
    constructor(userRepository) {
        super();
        this.userRepository = userRepository;
    }
    execute(query) {
        if (this.userRepository.get(query.userId) !== undefined) {
            return (0, Result_1.success)(true);
        }
        return (0, Result_1.failure)();
    }
}
exports.UserExistsQueryHandler = UserExistsQueryHandler;
class UserExistsQuery extends Query_1.Query {
    constructor(userId) {
        super(exports.USER_EXISTS);
        this.userId = userId;
    }
}
exports.UserExistsQuery = UserExistsQuery;
