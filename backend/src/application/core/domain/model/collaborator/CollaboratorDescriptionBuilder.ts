import {CollaboratorType} from "./CollaboratorType";
import {CollaboratorDescription} from "./CollaboratorDescription";
import {CollaborationType} from "./CollaborationType";
import {CommandDescription} from "./model/CommandDescription";
import {QueryDescription} from "./model/QueryDescription";
import {EventDescription} from "./model/EventDescription";
import {CommandHandler} from "../../../command/CommandHandler";
import {Command} from "../../../command/Command";
import {QueryHandler} from "../../../query/QueryHandler";
import {Query} from "../../../query/Query";
import {EventHandler} from "../../../event/EventHandler";
import {Event} from "../../../event/Event";

export class CollaboratorDescriptionBuilder {
    private name!: string;
    private type!: CollaboratorType;
    private collaborationType!: CollaborationType;
    private commands: CommandDescription[] = [];
    private queries: QueryDescription[] = [];
    private events: EventDescription[] = [];

    withName(name: string): CollaboratorDescriptionBuilder {
        this.name = name;
        return this;
    }

    withType(type: CollaboratorType): CollaboratorDescriptionBuilder {
        this.type = type;
        return this;
    }

    withCollaborationType(collaborationType: CollaborationType): CollaboratorDescriptionBuilder {
        this.collaborationType = collaborationType;
        return this;
    }

    addCommand(
        id: string,
        description: string,
        commandHandler: CommandHandler<Command>
    ): CollaboratorDescriptionBuilder {
        this.commands.push(new CommandDescription(id, description, commandHandler));
        return this;
    }

    addQuery(id: string, description: string, queryHandler: QueryHandler<Query, any>): CollaboratorDescriptionBuilder {
        this.queries.push(new QueryDescription(id, description, queryHandler));
        return this;
    }

    addEvent(id: string, description: string, eventHandler: EventHandler<Event>): CollaboratorDescriptionBuilder {
        this.events.push(new EventDescription(id, description, eventHandler));
        return this;
    }

    build(): CollaboratorDescription {
        return new CollaboratorDescription(
            this.name,
            this.type,
            this.collaborationType,
            this.commands,
            this.queries,
            this.events
        );
    }
}
