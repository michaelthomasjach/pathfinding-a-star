import {Repository} from "../../../infra/repository/Repository";
import {User} from "../../../boundedContext/user/valueObject/User";
import {ReadOnlyFileRepository} from "../../../infra/repository/ReadOnlyFileRepository";
import {Repositories} from "./Repositories";
import { InMemoryRepository } from "../../../infra/repository/InMemoryRepository";

const createInMemoryRepositoryFromFile = <T>(path: string) => {
    const list = new ReadOnlyFileRepository<T>(path).list();
    const repository = new InMemoryRepository<T>();
    Object.entries(list).forEach(([id, value]) => repository.save(id, value));
    return repository;
};

export class ConfigureTestRepositories {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = new ReadOnlyFileRepository<User>(
            "./storage/configuration/user.json"
        )
        /*
        const xRepository = this.createInMemoryRepositoryFromFile<xDescription>(
            "./storage/configuration/x.json"
        );
        yRepository: new yRepository(new InMemoryRepository<Type_here>(), xRepository),
        */
    }

    getRepositories = (): Repositories => {
        return {
            userRepository: this.userRepository
        }
    }

    createInMemoryRepositoryFromFile = <T>(path: string) => {
        const list = new ReadOnlyFileRepository<T>(path).list();
        const repository = new InMemoryRepository<T>();
        Object.entries(list).forEach(([id, value]) => repository.save(id, value));
        return repository;
    };
};
