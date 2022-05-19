import {CommandBus} from "../CommandBus";
import {CommandHandler} from "../CommandHandler";
import {Command} from "../Command";
import {CommandResponse} from "../CommandResponse";
import {failure} from "../../Result";
import {UserExistsQuery} from "../../../../boundedContext/user/query/UserExistsQuery";
import {QueryBus} from "../../query/QueryBus";

export class AggregateIdValidationCommandBusMiddleware extends CommandBus {
    constructor(private commandBus: CommandBus, private queryBus: QueryBus) {
        super();
    }

    subscribe(type: string, handler: CommandHandler<Command>) {
        this.commandBus.subscribe(type, handler);
    }

    dispatch(command: Command): CommandResponse {
        // TODO split AggregateIdValidationCommandBusMiddleware
        // @ts-ignore
        const {userId} = command;
        if (this.userIsAdmin(userId))
            return this.commandBus.dispatch(command);
        return failure();
    }

    userIsAdmin(userId: string): boolean {
        if (userId === undefined) return true;
        else return this.queryBus.dispatch(new UserExistsQuery(userId)).error !== true;
    }
}
