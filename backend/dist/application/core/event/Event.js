"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor(type, aggregateId, payload = {}) {
        this.type = type;
        this.aggregateId = aggregateId;
        this.payload = payload;
    }
}
exports.Event = Event;
