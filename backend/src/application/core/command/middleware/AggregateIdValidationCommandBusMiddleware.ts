import { CommandBus } from "../CommandBus";
import { CommandHandler } from "../CommandHandler";
import { Command } from "../Command";
import { CommandResponse } from "../CommandResponse";
import { failure } from "../../Result";
import { UserExistByIdQuery } from "../../../../boundedContext/user/query/UserExistByIdQuery";
import { QueryBus } from "../../query/QueryBus";

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
    const { id } = command;
    if (this.userIsAdmin(id)) return this.commandBus.dispatch(command);
    return failure();
  }

  userIsAdmin(id: string): boolean {
    if (id === undefined) return true;
    else
      return this.queryBus.dispatch(new UserExistByIdQuery(id)).error !== true;
  }
}
