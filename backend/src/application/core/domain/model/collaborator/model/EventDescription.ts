import {EventHandler} from "../../../../event/EventHandler";
import {Event} from "../../../../event/Event";

export class EventDescription {
    constructor(readonly id: string, readonly description: string, readonly handler: EventHandler<Event>) {}

    toJSON() {
        return {
            id: this.id,
            description: this.description,
        };
    }
}
