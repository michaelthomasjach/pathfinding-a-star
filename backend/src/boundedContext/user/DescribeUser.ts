import {QueryBus} from "../../application/core/query/QueryBus";
import {CommandBus} from "../../application/core/command/CommandBus";
import {Timer} from "../../application/core/Timer";
import {DomainDescription} from "../../application/core/domain/model/DomainDescription";
import {DomainDescriptionBuilder} from "../../application/core/domain/DomainDescriptionBuilder";
import {CollaboratorType} from "../../application/core/domain/model/collaborator/CollaboratorType";
import {
    CollaboratorDescriptionBuilder
} from "../../application/core/domain/model/collaborator/CollaboratorDescriptionBuilder";
import {CollaboratorDescription} from "../../application/core/domain/model/collaborator/CollaboratorDescription";
import {Repositories} from "../../application/configuration/repository/Repositories";
import {USER_EXIST, UserExistQueryHandler} from "./query/UserNameFromUserIdQueryHandler";

export class DescribeUser {
    private queryBus: QueryBus;
    private commandBus: CommandBus;
    private repositories: Repositories;
    private timer: Timer;
    private domain: DomainDescription;

    constructor(queryBus: QueryBus,
                commandBus: CommandBus,
                repositories: Repositories,
                timer: Timer) {
        this.queryBus = queryBus;
        this.commandBus = commandBus;
        this.repositories = repositories;
        this.timer = timer;

        this.domain = this.describeDomain();
    }

    getDomainDescription = (): DomainDescription => {
        return this.domain;
    }

    private describeDomain = (): DomainDescription =>
        new DomainDescriptionBuilder()
            .withName("user")
            .withDescription("Fournit toutes les informations relatives à l'utilisateur")
            .withCollaborators(this.describeCollaborators(this.queryBus, this.commandBus, this.repositories, this.timer))
            .build()

    private describeCollaborators = (queryBus: QueryBus, commandBus: CommandBus, repositories: Repositories, timer: Timer): CollaboratorDescription[] => {
        return [
            new CollaboratorDescriptionBuilder()
                .withName("User")
                .withType(CollaboratorType.FRONTEND)
                /*
                .addCommand(
                    "",
                    "",
                    new ChangeBirdHazardLevelCommandHandler(controlDataRepository)
                )
                */

                .addQuery(USER_EXIST, "Récupère l'utilisateur", new UserExistQueryHandler(this.repositories.userRepository))
                .build(),
        ];
    }

}