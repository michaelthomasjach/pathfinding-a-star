"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeUser = void 0;
const DomainDescriptionBuilder_1 = require("../../application/core/domain/DomainDescriptionBuilder");
const CollaboratorType_1 = require("../../application/core/domain/model/collaborator/CollaboratorType");
const CollaboratorDescriptionBuilder_1 = require("../../application/core/domain/model/collaborator/CollaboratorDescriptionBuilder");
const UserNameFromUserIdQueryHandler_1 = require("./query/UserNameFromUserIdQueryHandler");
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
                    .addQuery(UserNameFromUserIdQueryHandler_1.USER_FROM_USER_ID, "Récupère l'utilisateur", new UserNameFromUserIdQueryHandler_1.UserFromUserIdQueryHandler(this.repositories.userRepository))
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
