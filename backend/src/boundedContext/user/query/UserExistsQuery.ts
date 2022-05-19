import {Query} from "../../../application/core/query/Query";
import {Repository} from "../../../infra/repository/Repository";
import {QueryHandler, QueryResponse} from "../../../application/core/query/QueryHandler";
import {failure, success} from "../../../application/core/Result";
import {UserDescription} from "../domain/aggregate/UserDescription";

export const USER_EXISTS = "USER_EXISTS";

export class UserExistsQueryHandler extends QueryHandler<UserExistsQuery, boolean> {
    constructor(private userRepository: Repository<UserDescription>) {
        super();
    }
    execute(query: UserExistsQuery): QueryResponse<boolean> {
        if (this.userRepository.get(query.userId) !== undefined) {
            return success(true);
        }
        return failure();
    }
}

export class UserExistsQuery extends Query{
    constructor(readonly userId: string) {
        super(USER_EXISTS);
    }
}