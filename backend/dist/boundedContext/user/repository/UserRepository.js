"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    get(userId) {
        return this.userRepository.get(userId);
    }
    save(userId, firstname, lastname, email, password, role) {
        this.userRepository.save(userId, {
            id: userId,
            firstname,
            lastname,
            email,
            password,
            role
        });
    }
}
exports.UserRepository = UserRepository;
