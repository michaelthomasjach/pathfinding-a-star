import {CommandBus} from "../application/core/command/CommandBus";
import {QueryBus} from "../application/core/query/QueryBus";
import {EventBus} from "../application/core/event/EventBus";
import {Logger, LoggerStdout} from "../application/core/Logger";
import {Timer} from "../application/core/Timer";
import {DescribeUser} from "./user/DescribeUser";
import {Repositories} from "../application/configuration/repository/Repositories";
import {DomainDescription} from "../application/core/domain/model/DomainDescription";

export class DescribeDomains {
    private domainDescriptions: DomainDescription[];

    constructor(commandBus: CommandBus,
                queryBus: QueryBus,
                eventBus: EventBus,
                repositories: Repositories,
                logger: LoggerStdout,
                timer: Timer) {
        this.domainDescriptions = [
            // @ts-ignore
            new DescribeUser(queryBus, commandBus, repositories, timer).getDomainDescription(),
        ]
    }

    getDomainsDescriptions = (): DomainDescription[] => {
        return this.domainDescriptions;
    }
}