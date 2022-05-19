import {Query} from "../../../../query/Query";
import {QueryHandler} from "../../../../query/QueryHandler";

export class QueryDescription {
    constructor(readonly id: string, readonly description: string, readonly handler: QueryHandler<Query, any>) {}

    toJSON() {
        return {
            id: this.id,
            description: this.description,
        };
    }
}
