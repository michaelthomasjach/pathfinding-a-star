"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainDescriptionBuilder = void 0;
const DomainDescription_1 = require("./model/DomainDescription");
class DomainDescriptionBuilder {
    constructor() {
        this.collaborators = [];
    }
    withName(name) {
        this.name = name;
        return this;
    }
    withDescription(description) {
        this.description = description;
        return this;
    }
    addCollaborator(collaborator) {
        this.collaborators.push(collaborator);
        return this;
    }
    withCollaborators(collaborators) {
        this.collaborators = this.collaborators.concat(collaborators);
        return this;
    }
    build() {
        return new DomainDescription_1.DomainDescription(this.name, this.description, this.collaborators);
    }
}
exports.DomainDescriptionBuilder = DomainDescriptionBuilder;
