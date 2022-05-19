"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorDescriptionBuilder = void 0;
const CollaboratorDescription_1 = require("./CollaboratorDescription");
const CommandDescription_1 = require("./model/CommandDescription");
const QueryDescription_1 = require("./model/QueryDescription");
const EventDescription_1 = require("./model/EventDescription");
class CollaboratorDescriptionBuilder {
    constructor() {
        this.commands = [];
        this.queries = [];
        this.events = [];
    }
    withName(name) {
        this.name = name;
        return this;
    }
    withType(type) {
        this.type = type;
        return this;
    }
    withCollaborationType(collaborationType) {
        this.collaborationType = collaborationType;
        return this;
    }
    addCommand(id, description, commandHandler) {
        this.commands.push(new CommandDescription_1.CommandDescription(id, description, commandHandler));
        return this;
    }
    addQuery(id, description, queryHandler) {
        this.queries.push(new QueryDescription_1.QueryDescription(id, description, queryHandler));
        return this;
    }
    addEvent(id, description, eventHandler) {
        this.events.push(new EventDescription_1.EventDescription(id, description, eventHandler));
        return this;
    }
    build() {
        return new CollaboratorDescription_1.CollaboratorDescription(this.name, this.type, this.collaborationType, this.commands, this.queries, this.events);
    }
}
exports.CollaboratorDescriptionBuilder = CollaboratorDescriptionBuilder;
