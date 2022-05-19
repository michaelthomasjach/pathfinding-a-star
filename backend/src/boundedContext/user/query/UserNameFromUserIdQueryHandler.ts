import {Query} from "../../../application/core/query/Query";
import {Repository} from "../../../infra/repository/Repository";
import {QueryHandler, QueryResponse} from "../../../application/core/query/QueryHandler";
import {failure, success} from "../../../application/core/Result";
import {UserDescription} from "../domain/aggregate/UserDescription";
import {User} from "../valueObject/User";

export const USER_FROM_USER_ID = "USER_FROM_USER_ID";

export class UserFromUserIdQueryHandler extends QueryHandler<UserFromUserIdQuery, boolean> {
    constructor(private userRepository: Repository<User>) {
        super();
    }
    execute(query: UserFromUserIdQuery): QueryResponse<boolean> {
        if (this.userRepository.get(query.userId) !== undefined) {
            return success(true);
        }
        return failure();
    }
}

export class UserFromUserIdQuery extends Query{
    constructor(readonly userId: string) {
        super(USER_FROM_USER_ID);
    }
}