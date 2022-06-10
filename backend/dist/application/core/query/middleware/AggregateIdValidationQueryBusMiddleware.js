"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIdValidationQueryBusMiddleware = void 0;
const QueryBus_1 = require("../QueryBus");
const UserExistByIdQuery_1 = require("../../../../boundedContext/user/query/UserExistByIdQuery");
const Result_1 = require("../../Result");
class AggregateIdValidationQueryBusMiddleware extends QueryBus_1.QueryBus {
    constructor(queryBus) {
        super();
        this.queryBus = queryBus;
    }
    subscribe(type, handler) {
        this.queryBus.subscribe(type, handler);
    }
    dispatch(query, userShouldBeAuthenticatedToExecuteQuery = false) {
        if (userShouldBeAuthenticatedToExecuteQuery) {
            // @ts-ignore
            const { id } = query;
            if (this.userIsAdmin(id))
                return this.queryBus.dispatch(query);
            return (0, Result_1.failure)("L'utilisateur n'est pas administrateur");
        }
        return this.queryBus.dispatch(query);
    }
    userIsAdmin(id) {
        if (id === undefined)
            return false;
        else
            return this.queryBus.dispatch(new UserExistByIdQuery_1.UserExistByIdQuery(id)).error !== true;
    }
}
exports.AggregateIdValidationQueryBusMiddleware = AggregateIdValidationQueryBusMiddleware;
