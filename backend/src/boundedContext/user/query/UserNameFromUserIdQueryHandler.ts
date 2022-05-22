import {Query} from "../../../application/core/query/Query";
import {Repository} from "../../../infra/repository/Repository";
import {QueryHandler, QueryResponse} from "../../../application/core/query/QueryHandler";
import {failure, success} from "../../../application/core/Result";
import {User} from "../valueObject/User";

export const USER_EXIST = "USER_EXIST";

export class UserExistQueryHandler extends QueryHandler<UserExistQuery, User> {
    constructor(private userRepository: Repository<User>) {
        super();
    }
    execute(query: UserExistQuery): QueryResponse<User> {
        const users = this.userRepository.list()
        const usersID = Object.keys(users);
        let user: User = <User>{};
        const exist = usersID.some((userId) => {
            user = users[userId];
            return (users[userId].email == query.email && users[userId].password == query.password);
        })



        if (exist === true) {
            return success(user);
        }
        return failure("Impossible de retrouver l'utilisateur en base de données.");
    }
}

export class UserExistQuery extends Query{
    constructor(readonly email: string, readonly password: string) {
        super(USER_EXIST);
    }
}