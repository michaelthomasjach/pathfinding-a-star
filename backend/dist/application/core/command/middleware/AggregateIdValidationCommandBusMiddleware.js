"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIdValidationCommandBusMiddleware = void 0;
const CommandBus_1 = require("../CommandBus");
const Result_1 = require("../../Result");
const UserExistsQuery_1 = require("../../../../boundedContext/user/query/UserExistsQuery");
class AggregateIdValidationCommandBusMiddleware extends CommandBus_1.CommandBus {
    constructor(commandBus, queryBus) {
        super();
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    subscribe(type, handler) {
        this.commandBus.subscribe(type, handler);
    }
    dispatch(command) {
        // TODO split AggregateIdValidationCommandBusMiddleware
        // @ts-ignore
        const { userId } = command;
        if (this.userIsAdmin(userId))
            return this.commandBus.dispatch(command);
        return (0, Result_1.failure)();
    }
    userIsAdmin(userId) {
        if (userId === undefined)
            return true;
        else
            return this.queryBus.dispatch(new UserExistsQuery_1.UserExistsQuery(userId)).error !== true;
    }
}
exports.AggregateIdValidationCommandBusMiddleware = AggregateIdValidationCommandBusMiddleware;
