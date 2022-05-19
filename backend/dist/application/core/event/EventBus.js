"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicEventBus = void 0;
class BasicEventBus {
    constructor(eventHandlersByType = {}) {
        this.eventHandlersByType = eventHandlersByType;
    }
    subscribe(type, subscriber) {
        if (this.eventHandlersByType[type] === undefined) {
            this.eventHandlersByType[type] = [];
        }
        this.eventHandlersByType[type].push(subscriber);
    }
    dispatch(event) {
        const subscribers = this.eventHandlersByType[event.type];
        if (subscribers !== undefined && Array.isArray(subscribers)) {
            subscribers.forEach(subscriber => {
                try {
                    subscriber.handle(event);
                }
                catch (error) {
                    console.log({
                        message: "Error while handling event",
                        event,
                        error,
                    });
                }
            });
        }
    }
}
exports.BasicEventBus = BasicEventBus;
