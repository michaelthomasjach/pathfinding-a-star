"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIdValidationQueryBusMiddleware = void 0;
const QueryBus_1 = require("../QueryBus");
const UserExistsQuery_1 = require("../../../../boundedContext/user/query/UserExistsQuery");
const Result_1 = require("../../Result");
class AggregateIdValidationQueryBusMiddleware extends QueryBus_1.QueryBus {
    constructor(queryBus) {
        super();
        this.queryBus = queryBus;
    }
    subscribe(type, handler) {
        this.queryBus.subscribe(type, handler);
    }
    dispatch(query) {
        // @ts-ignore
        const { userId } = query;
        if (this.userIsAdmin(userId))
            return this.queryBus.dispatch(query);
        return (0, Result_1.failure)("L'utilisateur n'est pas administrateur");
    }
    userIsAdmin(userId) {
        if (userId === undefined)
            return false;
        else
            return this.queryBus.dispatch(new UserExistsQuery_1.UserExistsQuery(userId)).error !== true;
    }
}
exports.AggregateIdValidationQueryBusMiddleware = AggregateIdValidationQueryBusMiddleware;
