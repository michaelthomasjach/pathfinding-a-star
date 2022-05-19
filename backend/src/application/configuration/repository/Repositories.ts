import {Repository} from "../../../infra/repository/Repository";
import {UserDescription} from "../../../boundedContext/user/domain/aggregate/UserDescription";
import {User} from "../../../boundedContext/user/valueObject/User";

export type Repositories = {
    userRepository: Repository<User>;
};
