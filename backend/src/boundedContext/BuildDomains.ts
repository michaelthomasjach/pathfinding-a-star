import {CommandBus} from "../application/core/command/CommandBus";
import {QueryBus} from "../application/core/query/QueryBus";
import {EventBus} from "../application/core/event/EventBus";
import {Logger, LoggerStdout} from "../application/core/Logger";
import {Timer} from "../application/core/Timer";
import {DescribeDomains} from "./DescribeDomains";
import {Repositories} from "../application/configuration/repository/Repositories";
import {RegisterDomains} from "../application/core/domain/model/RegisterDomains";

export class BuildDomains {
    constructor(private commandBus: CommandBus,
                private queryBus: QueryBus,
                private eventBus: EventBus,
                private repositories: Repositories,
                private logger: LoggerStdout,
                private timer: Timer) {
        const domains = new DescribeDomains(commandBus, queryBus, eventBus, repositories, logger, timer);
        new RegisterDomains(domains.getDomainsDescriptions(), commandBus, queryBus, eventBus);
    }
}
