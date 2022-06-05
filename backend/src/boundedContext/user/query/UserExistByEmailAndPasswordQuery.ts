import { Query } from "../../../application/core/query/Query";
import { Repository } from "../../../infra/repository/Repository";
import {
  QueryHandler,
  QueryResponse,
} from "../../../application/core/query/QueryHandler";
import { failure, success } from "../../../application/core/Result";
import { User } from "../valueObject/User";

export const USER_EXIST_BY_EMAIL_AND_PASSWORD =
  "USER_EXIST_BY_EMAIL_AND_PASSWORD";

export class UserExistByEmailAndPasswordQueryHandler extends QueryHandler<
  UserExistByEmailAndPasswordQuery,
  User
> {
  constructor(private userRepository: Repository<User>) {
    super();
  }
  execute(query: UserExistByEmailAndPasswordQuery): QueryResponse<User> {
    const users = this.userRepository.list();
    const usersID = Object.keys(users);
    let user: User = <User>{};
    const exist = usersID.some((id) => {
      user = users[id];
      return (
        users[id].email == query.email && users[id].password == query.password
      );
    });

    if (exist === true) {
      return success(user);
    }
    return failure(
      "Impossible de retrouver l'utilisateur en base de données depuis son email et son mot de passe."
    );
  }
}

export class UserExistByEmailAndPasswordQuery extends Query {
  constructor(readonly email: string, readonly password: string) {
    super(USER_EXIST_BY_EMAIL_AND_PASSWORD);
  }
}
