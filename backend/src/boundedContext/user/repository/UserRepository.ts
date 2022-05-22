import {User} from "../valueObject/User";
import {Repository} from "../../../infra/repository/Repository";
import {UserRoles} from "../../../application/configuration/middleware/UserRoles";

export class UserRepository {
    constructor(
        private userRepository: Repository<User>,
    ) {}

    get(userId: string): User {
        return this.userRepository.get(userId);
    }

    save(userId: string, firstname: string, lastname: string, email: string, password: string, role: UserRoles) {
        this.userRepository.save(userId, {
            id: userId,
            firstname,
            lastname,
            email,
            password,
            role
        });
    }
}
