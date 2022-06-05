import { Query } from "../Query";
import { QueryBus } from "../QueryBus";
import { QueryHandler, QueryResponse } from "../QueryHandler";
import { UserExistByIdQuery } from "../../../../boundedContext/user/query/UserExistByIdQuery";
import { failure } from "../../Result";

export class AggregateIdValidationQueryBusMiddleware extends QueryBus {
  constructor(private queryBus: QueryBus) {
    super();
  }

  subscribe(type: string, handler: QueryHandler<Query, any>): void {
    this.queryBus.subscribe(type, handler);
  }

  dispatch(
    query: Query,
    userShouldBeAuthenticatedToExecuteQuery: boolean = false
  ): QueryResponse<any> {
    if (userShouldBeAuthenticatedToExecuteQuery) {
      // @ts-ignore
      const { id } = query;
      if (this.userIsAdmin(id)) return this.queryBus.dispatch(query);
      return failure("L'utilisateur n'est pas administrateur");
    }
    return this.queryBus.dispatch(query);
  }

  userIsAdmin(id: string): boolean {
    if (id === undefined) return false;
    else
      return this.queryBus.dispatch(new UserExistByIdQuery(id)).error !== true;
  }
}
