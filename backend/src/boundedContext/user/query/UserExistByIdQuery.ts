import { Query } from "../../../application/core/query/Query";
import { Repository } from "../../../infra/repository/Repository";
import {
  QueryHandler,
  QueryResponse,
} from "../../../application/core/query/QueryHandler";
import { failure, success } from "../../../application/core/Result";
import { User } from "../valueObject/User";

export const USER_EXIST_BY_ID = "USER_EXIST_BY_ID";

export class UserExistByIdQueryHandler extends QueryHandler<
  UserExistByIdQuery,
  User
> {
  constructor(private userRepository: Repository<User>) {
    super();
  }
  execute(query: UserExistByIdQuery): QueryResponse<User> {
    const users = this.userRepository.list();
    const usersID = Object.keys(users);
    let user: User = <User>{};
    const exist = usersID.some((id) => {
      user = users[id];
      return id == query.id;
    });

    if (exist === true) {
      return success(user);
    }
    return failure(
      "Impossible de retrouver l'utilisateur en base de données depuis son ID."
    );
  }
}

export class UserExistByIdQuery extends Query {
  constructor(readonly id: string) {
    super(USER_EXIST_BY_ID);
  }
}
