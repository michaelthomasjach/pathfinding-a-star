"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDescription = void 0;
class EventDescription {
    constructor(id, description, handler) {
        this.id = id;
        this.description = description;
        this.handler = handler;
    }
    toJSON() {
        return {
            id: this.id,
            description: this.description,
        };
    }
}
exports.EventDescription = EventDescription;
