"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureDevRepositories = void 0;
const ReadOnlyFileRepository_1 = require("../../../infra/repository/ReadOnlyFileRepository");
class ConfigureDevRepositories {
    constructor() {
        this.getRepositories = () => {
            return {
                userRepository: this.userRepository
            };
        };
        this.userRepository = new ReadOnlyFileRepository_1.ReadOnlyFileRepository("./storage/user.json");
    }
}
exports.ConfigureDevRepositories = ConfigureDevRepositories;
;
