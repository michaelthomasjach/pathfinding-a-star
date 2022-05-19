import {Command} from "../../../../command/Command";
import {CommandHandler} from "../../../../command/CommandHandler";

export class CommandDescription {
    constructor(readonly id: string, readonly description: string, readonly handler: CommandHandler<Command>) {}

    toJSON() {
        return {
            id: this.id,
            description: this.description,
        };
    }
}
