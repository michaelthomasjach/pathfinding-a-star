import {Command} from "../Command";
import {CommandBus} from "../CommandBus";
import {CommandHandler} from "../CommandHandler";
import {CommandResponse} from "../CommandResponse";
import {LoggerStdout} from "../../Logger";
import {failure} from "../../Result";
import {AggregateIdValidationCommandBusMiddleware} from "./AggregateIdValidationCommandBusMiddleware";

export class ErrorLoggerCommandBusMiddleware extends CommandBus {
    constructor(private commandBus: AggregateIdValidationCommandBusMiddleware, private logger: LoggerStdout) {
        super();
    }

    subscribe(type: string, handler: CommandHandler<any>) {
        this.commandBus.subscribe(type, handler);
    }

    dispatch(command: Command): CommandResponse {
        try {
            return this.commandBus.dispatch(command);
        } catch (e) {
            this.logger.log(e);
            return failure();
        }
    }
}
