"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureTestRepositories = void 0;
const ReadOnlyFileRepository_1 = require("../../../infra/repository/ReadOnlyFileRepository");
const InMemoryRepository_1 = require("../../../infra/repository/InMemoryRepository");
const createInMemoryRepositoryFromFile = (path) => {
    const list = new ReadOnlyFileRepository_1.ReadOnlyFileRepository(path).list();
    const repository = new InMemoryRepository_1.InMemoryRepository();
    Object.entries(list).forEach(([id, value]) => repository.save(id, value));
    return repository;
};
class ConfigureTestRepositories {
    constructor() {
        this.getRepositories = () => {
            return {
                userRepository: this.userRepository
            };
        };
        this.createInMemoryRepositoryFromFile = (path) => {
            const list = new ReadOnlyFileRepository_1.ReadOnlyFileRepository(path).list();
            const repository = new InMemoryRepository_1.InMemoryRepository();
            Object.entries(list).forEach(([id, value]) => repository.save(id, value));
            return repository;
        };
        this.userRepository = new ReadOnlyFileRepository_1.ReadOnlyFileRepository("./storage/configuration/user.json");
        /*
        const xRepository = this.createInMemoryRepositoryFromFile<xDescription>(
            "./storage/configuration/x.json"
        );
        yRepository: new yRepository(new InMemoryRepository<Type_here>(), xRepository),
        */
    }
}
exports.ConfigureTestRepositories = ConfigureTestRepositories;
;
