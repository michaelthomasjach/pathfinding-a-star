"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDispatcherCommandBusMiddleware = void 0;
const CommandBus_1 = require("../CommandBus");
class EventDispatcherCommandBusMiddleware extends CommandBus_1.CommandBus {
    constructor(commandBus, eventBus) {
        super();
        this.commandBus = commandBus;
        this.eventBus = eventBus;
    }
    subscribe(type, handler) {
        this.commandBus.subscribe(type, handler);
    }
    dispatch(command) {
        const result = this.commandBus.dispatch(command);
        if (result.event)
            this.eventBus.dispatch(result.event);
        return result;
    }
}
exports.EventDispatcherCommandBusMiddleware = EventDispatcherCommandBusMiddleware;
