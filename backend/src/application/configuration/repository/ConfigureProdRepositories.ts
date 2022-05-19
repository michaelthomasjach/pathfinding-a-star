import {Repository} from "../../../infra/repository/Repository";
import {User} from "../../../boundedContext/user/valueObject/User";
import {ReadOnlyFileRepository} from "../../../infra/repository/ReadOnlyFileRepository";
import {Repositories} from "./Repositories";
import {FileRepository} from "../../../infra/repository/FileRepository";

export class ConfigureDevRepositories {
    private userRepository: Repository<User>;

    constructor(fileStoragePath: string) {
        const createRepository: <T>(filename: string) => Promise<Repository<T>> = this.createRepositoryWithPath(fileStoragePath);

        this.userRepository = new ReadOnlyFileRepository<User>(
            "./storage/configuration/user.json"
        )
        // xRepository: await createRepository<any>("x.json"),
        // yRepository: new InMemoryRepository<new Intance_here()>(),

    }

    getRepositories = async (): Promise<Repositories> => {
        return {
            userRepository: this.userRepository
        }
    }

    createRepositoryWithPath = (fileStoragePath: string) =>
        async <T>(filename: string): Promise<Repository<T>> =>
            new FileRepository<T>(fileStoragePath + filename);
};