/**
 * CollaboratorDescription is other systems or sub-systems that send messages to this context.
 * It can be other bounded contexts, frontends (web or mobile), or something else.
 */
import {CollaboratorType} from "./CollaboratorType";
import {CommandDescription} from "./model/CommandDescription";
import {CollaborationType} from "./CollaborationType";
import {QueryDescription} from "./model/QueryDescription";
import {EventDescription} from "./model/EventDescription";


export class CollaboratorDescription {
    constructor(
        readonly name: string,
        readonly type: CollaboratorType,
        readonly collaborationType: CollaborationType,
        readonly commands: CommandDescription[],
        readonly queries: QueryDescription[],
        readonly events: EventDescription[]
    ) {}
}
