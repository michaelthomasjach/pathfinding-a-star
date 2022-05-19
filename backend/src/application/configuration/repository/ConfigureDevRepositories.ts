import {User} from "../../../boundedContext/user/valueObject/User";
import {ReadOnlyFileRepository} from "../../../infra/repository/ReadOnlyFileRepository";
import {Repositories} from "./Repositories";
import {Repository} from "../../../infra/repository/Repository";

export class ConfigureDevRepositories {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = new ReadOnlyFileRepository<User>(
            "./storage/configuration/user.json"
        )
    }

    getRepositories = (): Repositories => {
        return {
            userRepository: this.userRepository
        }
    }
};
