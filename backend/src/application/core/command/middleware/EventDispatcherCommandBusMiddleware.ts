import {Command} from "../Command";
import {CommandBus} from "../CommandBus";
import {CommandHandler} from "../CommandHandler";
import {CommandResponse} from "../CommandResponse";
import {EventBus} from "../../event/EventBus";

export class EventDispatcherCommandBusMiddleware extends CommandBus {
    constructor(private commandBus: CommandBus, private eventBus: EventBus) {
        super();
    }

    subscribe(type: string, handler: CommandHandler<any>) {
        this.commandBus.subscribe(type, handler);
    }

    dispatch(command: Command): CommandResponse {
        const result = this.commandBus.dispatch(command);

        if (result.event) this.eventBus.dispatch(result.event);

        return result;
    }
}
