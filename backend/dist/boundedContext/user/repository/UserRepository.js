"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    get(id) {
        return this.userRepository.get(id);
    }
    save(id, firstname, lastname, email, password, role) {
        this.userRepository.save(id, {
            id,
            firstname,
            lastname,
            email,
            password,
            role,
        });
    }
}
exports.UserRepository = UserRepository;
