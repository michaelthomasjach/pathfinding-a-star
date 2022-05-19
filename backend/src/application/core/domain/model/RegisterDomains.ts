import {DomainDescription} from "./DomainDescription";
import {CommandBus} from "../../command/CommandBus";
import {QueryBus} from "../../query/QueryBus";
import {EventBus} from "../../event/EventBus";
import {CollaboratorDescription} from "./collaborator/CollaboratorDescription";

export class RegisterDomains {
    constructor(private domains: DomainDescription[], private commandBus: CommandBus, private queryBus: QueryBus, private eventBus: EventBus) {
        console.log(domains);
        domains.forEach(domain => {
            domain?.collaborators.forEach(collaborator => {
                this.registerCommandHandlers(collaborator, commandBus);
                this.registerQueryHandlers(collaborator, queryBus);
                this.registerEventHandlers(collaborator, eventBus);
            });
        });
    }

    private registerCommandHandlers = (collaborator: CollaboratorDescription, commandBus: CommandBus): void => {
        // @ts-ignore
        collaborator.commands.forEach(command => {
            commandBus.subscribe(command.id, command.handler);
        });
    };

    private registerQueryHandlers = (collaborator: CollaboratorDescription, queryBus: QueryBus): void => {
        // @ts-ignore
        collaborator.queries.forEach(query => {
            queryBus.subscribe(query.id, query.handler);
        });
    };

    private registerEventHandlers = (collaborator: CollaboratorDescription, eventBus: EventBus): void => {
        // @ts-ignore
        collaborator.events.forEach(event => {
            eventBus.subscribe(event.id, event.handler);
        });
    };
}



