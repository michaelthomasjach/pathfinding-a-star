import { User } from "../valueObject/User";
import { Repository } from "../../../infra/repository/Repository";
import { UserRoles } from "../../../application/configuration/middleware/UserRoles";

export class UserRepository {
  constructor(private userRepository: Repository<User>) {}

  get(id: string): User {
    return this.userRepository.get(id);
  }

  save(
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    role: UserRoles
  ) {
    this.userRepository.save(id, {
      id,
      firstname,
      lastname,
      email,
      password,
      role,
    });
  }
}
