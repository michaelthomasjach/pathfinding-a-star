"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLoggerCommandBusMiddleware = void 0;
const CommandBus_1 = require("../CommandBus");
const Result_1 = require("../../Result");
class ErrorLoggerCommandBusMiddleware extends CommandBus_1.CommandBus {
    constructor(commandBus, logger) {
        super();
        this.commandBus = commandBus;
        this.logger = logger;
    }
    subscribe(type, handler) {
        this.commandBus.subscribe(type, handler);
    }
    dispatch(command) {
        try {
            return this.commandBus.dispatch(command);
        }
        catch (e) {
            this.logger.log(e);
            return (0, Result_1.failure)();
        }
    }
}
exports.ErrorLoggerCommandBusMiddleware = ErrorLoggerCommandBusMiddleware;
