"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogEventBusMiddleware = void 0;
class LogEventBusMiddleware {
    constructor(delegateEventBus, logger, timer) {
        this.delegateEventBus = delegateEventBus;
        this.logger = logger;
        this.timer = timer;
    }
    subscribe(type, handler) {
        this.delegateEventBus.subscribe(type, handler);
    }
    dispatch(event) {
        this.logger.log(Object.assign(Object.assign({}, event), { meta: { date: new Date(this.timer.now()) } }));
        this.delegateEventBus.dispatch(event);
    }
}
exports.LogEventBusMiddleware = LogEventBusMiddleware;
