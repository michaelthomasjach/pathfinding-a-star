import {Repository} from "../../../infra/repository/Repository";
import {User} from "../../../boundedContext/user/valueObject/User";

export type Repositories = {
    userRepository: Repository<User>;
};
