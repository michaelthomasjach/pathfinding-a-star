"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBus = void 0;
class QueryBus {
    constructor(handlers = {}) {
        this.handlers = handlers;
    }
    subscribe(type, handler) {
        this.handlers[type] = handler;
    }
    dispatch(query) {
        var _a;
        return (_a = this.handlers[query.type]) === null || _a === void 0 ? void 0 : _a.execute(query);
    }
}
exports.QueryBus = QueryBus;
