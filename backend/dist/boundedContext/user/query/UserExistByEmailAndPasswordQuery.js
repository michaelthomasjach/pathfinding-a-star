"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExistByEmailAndPasswordQuery = exports.UserExistByEmailAndPasswordQueryHandler = exports.USER_EXIST_BY_EMAIL_AND_PASSWORD = void 0;
const Query_1 = require("../../../application/core/query/Query");
const QueryHandler_1 = require("../../../application/core/query/QueryHandler");
const Result_1 = require("../../../application/core/Result");
exports.USER_EXIST_BY_EMAIL_AND_PASSWORD = "USER_EXIST_BY_EMAIL_AND_PASSWORD";
class UserExistByEmailAndPasswordQueryHandler extends QueryHandler_1.QueryHandler {
    constructor(userRepository) {
        super();
        this.userRepository = userRepository;
    }
    execute(query) {
        const users = this.userRepository.list();
        const usersID = Object.keys(users);
        let user = {};
        const exist = usersID.some((id) => {
            user = users[id];
            return (users[id].email == query.email && users[id].password == query.password);
        });
        if (exist === true) {
            return (0, Result_1.success)(user);
        }
        return (0, Result_1.failure)("Impossible de retrouver l'utilisateur en base de données depuis son email et son mot de passe.");
    }
}
exports.UserExistByEmailAndPasswordQueryHandler = UserExistByEmailAndPasswordQueryHandler;
class UserExistByEmailAndPasswordQuery extends Query_1.Query {
    constructor(email, password) {
        super(exports.USER_EXIST_BY_EMAIL_AND_PASSWORD);
        this.email = email;
        this.password = password;
    }
}
exports.UserExistByEmailAndPasswordQuery = UserExistByEmailAndPasswordQuery;
