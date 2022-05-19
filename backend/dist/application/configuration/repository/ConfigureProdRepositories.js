"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureDevRepositories = void 0;
const ReadOnlyFileRepository_1 = require("../../../infra/repository/ReadOnlyFileRepository");
const FileRepository_1 = require("../../../infra/repository/FileRepository");
class ConfigureDevRepositories {
    constructor(fileStoragePath) {
        this.getRepositories = () => __awaiter(this, void 0, void 0, function* () {
            return {
                userRepository: this.userRepository
            };
        });
        this.createRepositoryWithPath = (fileStoragePath) => (filename) => __awaiter(this, void 0, void 0, function* () { return new FileRepository_1.FileRepository(fileStoragePath + filename); });
        const createRepository = this.createRepositoryWithPath(fileStoragePath);
        this.userRepository = new ReadOnlyFileRepository_1.ReadOnlyFileRepository("./storage/configuration/user.json");
        // xRepository: await createRepository<any>("x.json"),
        // yRepository: new InMemoryRepository<new Intance_here()>(),
    }
}
exports.ConfigureDevRepositories = ConfigureDevRepositories;
;
