"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorDescription = void 0;
class CollaboratorDescription {
    constructor(name, type, collaborationType, commands, queries, events) {
        this.name = name;
        this.type = type;
        this.collaborationType = collaborationType;
        this.commands = commands;
        this.queries = queries;
        this.events = events;
    }
}
exports.CollaboratorDescription = CollaboratorDescription;
