"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIdValidationCommandBusMiddleware = void 0;
const CommandBus_1 = require("../CommandBus");
const Result_1 = require("../../Result");
const UserExistByIdQuery_1 = require("../../../../boundedContext/user/query/UserExistByIdQuery");
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
        const { id } = command;
        if (this.userIsAdmin(id))
            return this.commandBus.dispatch(command);
        return (0, Result_1.failure)();
    }
    userIsAdmin(id) {
        if (id === undefined)
            return true;
        else
            return this.queryBus.dispatch(new UserExistByIdQuery_1.UserExistByIdQuery(id)).error !== true;
    }
}
exports.AggregateIdValidationCommandBusMiddleware = AggregateIdValidationCommandBusMiddleware;
