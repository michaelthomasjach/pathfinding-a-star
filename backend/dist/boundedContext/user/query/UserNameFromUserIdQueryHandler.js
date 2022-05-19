"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFromUserIdQuery = exports.UserFromUserIdQueryHandler = exports.USER_FROM_USER_ID = void 0;
const Query_1 = require("../../../application/core/query/Query");
const QueryHandler_1 = require("../../../application/core/query/QueryHandler");
const Result_1 = require("../../../application/core/Result");
exports.USER_FROM_USER_ID = "USER_FROM_USER_ID";
class UserFromUserIdQueryHandler extends QueryHandler_1.QueryHandler {
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
exports.UserFromUserIdQueryHandler = UserFromUserIdQueryHandler;
class UserFromUserIdQuery extends Query_1.Query {
    constructor(userId) {
        super(exports.USER_FROM_USER_ID);
        this.userId = userId;
    }
}
exports.UserFromUserIdQuery = UserFromUserIdQuery;
