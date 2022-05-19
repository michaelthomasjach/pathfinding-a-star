import {Query} from "../Query";
import {QueryBus} from "../QueryBus";
import {QueryHandler, QueryResponse} from "../QueryHandler";
import {UserExistsQuery} from "../../../../boundedContext/user/query/UserExistsQuery";
import {failure} from "../../Result";

export class AggregateIdValidationQueryBusMiddleware extends QueryBus {
    constructor(private queryBus: QueryBus) {
        super();
    }

    subscribe(type: string, handler: QueryHandler<Query, any>): void {
        this.queryBus.subscribe(type, handler);
    }

    dispatch(query: Query): QueryResponse<any> {
        // @ts-ignore
        const {userId} = query;
        if (this.userIsAdmin(userId)) return this.queryBus.dispatch(query);
        return failure("L'utilisateur n'est pas administrateur");
    }

    userIsAdmin(userId: string): boolean {
        if (userId === undefined) return false;
        else return this.queryBus.dispatch(new UserExistsQuery(userId)).error !== true;
    }
}
