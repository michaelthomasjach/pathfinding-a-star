"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDomains = void 0;
class RegisterDomains {
    constructor(domains, commandBus, queryBus, eventBus) {
        this.domains = domains;
        this.commandBus = commandBus;
        this.queryBus = queryBus;
        this.eventBus = eventBus;
        this.registerCommandHandlers = (collaborator, commandBus) => {
            // @ts-ignore
            collaborator.commands.forEach(command => {
                commandBus.subscribe(command.id, command.handler);
            });
        };
        this.registerQueryHandlers = (collaborator, queryBus) => {
            // @ts-ignore
            collaborator.queries.forEach(query => {
                queryBus.subscribe(query.id, query.handler);
            });
        };
        this.registerEventHandlers = (collaborator, eventBus) => {
            // @ts-ignore
            collaborator.events.forEach(event => {
                eventBus.subscribe(event.id, event.handler);
            });
        };
        console.log(domains);
        domains.forEach(domain => {
            domain === null || domain === void 0 ? void 0 : domain.collaborators.forEach(collaborator => {
                this.registerCommandHandlers(collaborator, commandBus);
                this.registerQueryHandlers(collaborator, queryBus);
                this.registerEventHandlers(collaborator, eventBus);
            });
        });
    }
}
exports.RegisterDomains = RegisterDomains;
