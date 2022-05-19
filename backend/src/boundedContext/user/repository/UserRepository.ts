import {User} from "../valueObject/User";
import {UserDescription} from "../domain/aggregate/UserDescription";
import {Repository} from "../../../infra/repository/Repository";
import {UserRoles} from "../../../application/configuration/middleware/UserRoles";

export class UserRepository {
    constructor(
        private userRepository: Repository<UserDescription>,
    ) {}

    get(userId: string): User {
        return this.userRepository.get(userId);
    }

    save(userId: string, firstname: string, lastname: string, role: UserRoles) {
        this.userRepository.save(userId, {
            id: userId,
            firstname,
            lastname,
            role
        });
    }
}
