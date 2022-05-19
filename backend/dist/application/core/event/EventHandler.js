"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
class EventHandler {
    /**
     * Abstract class "EventHandler" cannot be instantiated directly
     */
    constructor() {
        if (this.constructor === EventHandler)
            throw new TypeError("Abstract class 'EventHandler' cannot be instantiated directly");
        if (this.handle === EventHandler.prototype.handle)
            throw new TypeError("You must implement 'handle' function");
    }
    /**
     * You must implement this function
     * @param {E extends Event} event
     */
    handle(event) {
        throw new Error("You must not call this function");
    }
}
exports.EventHandler = EventHandler;
