"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandBus = void 0;
class CommandBus {
    constructor(handlers = {}) {
        this.handlers = handlers;
    }
    subscribe(type, handler) {
        this.handlers[type] = handler;
    }
    dispatch(command) {
        var _a;
        return (_a = this.handlers[command.type]) === null || _a === void 0 ? void 0 : _a.execute(command);
    }
}
exports.CommandBus = CommandBus;
