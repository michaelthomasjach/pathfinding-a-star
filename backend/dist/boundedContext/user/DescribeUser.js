"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeUser = void 0;
const DomainDescriptionBuilder_1 = require("../../application/core/domain/DomainDescriptionBuilder");
const CollaboratorType_1 = require("../../application/core/domain/model/collaborator/CollaboratorType");
const CollaboratorDescriptionBuilder_1 = require("../../application/core/domain/model/collaborator/CollaboratorDescriptionBuilder");
const UserExistByEmailAndPasswordQuery_1 = require("./query/UserExistByEmailAndPasswordQuery");
const UserExistByIdQuery_1 = require("./query/UserExistByIdQuery");
class DescribeUser {
    constructor(queryBus, commandBus, repositories, timer) {
        this.getDomainDescription = () => {
            return this.domain;
        };
        this.describeDomain = () => new DomainDescriptionBuilder_1.DomainDescriptionBuilder()
            .withName("user")
            .withDescription("Fournit toutes les informations relatives à l'utilisateur")
            .withCollaborators(this.describeCollaborators(this.queryBus, this.commandBus, this.repositories, this.timer))
            .build();
        this.describeCollaborators = (queryBus, commandBus, repositories, timer) => {
            return [
                new CollaboratorDescriptionBuilder_1.CollaboratorDescriptionBuilder()
                    .withName("User")
                    .withType(CollaboratorType_1.CollaboratorType.FRONTEND)
                    /*
                            .addCommand(
                                "",
                                "",
                                new ChangeBirdHazardLevelCommandHandler(controlDataRepository)
                            )
                            */
                    .addQuery(UserExistByIdQuery_1.USER_EXIST_BY_ID, "Récupère l'utilisateur par son ID", new UserExistByIdQuery_1.UserExistByIdQueryHandler(this.repositories.userRepository))
                    .addQuery(UserExistByEmailAndPasswordQuery_1.USER_EXIST_BY_EMAIL_AND_PASSWORD, "Récupère l'utilisateur par son email et son mot de passe", new UserExistByEmailAndPasswordQuery_1.UserExistByEmailAndPasswordQueryHandler(this.repositories.userRepository))
                    .build(),
            ];
        };
        this.queryBus = queryBus;
        this.commandBus = commandBus;
        this.repositories = repositories;
        this.timer = timer;
        this.domain = this.describeDomain();
    }
}
exports.DescribeUser = DescribeUser;
