import {Logger, LoggerStdout} from "./core/Logger";
import { Timer } from "./core/Timer";
import { CreateApp } from "./CreateApp";
import {QueryBus} from "./core/query/QueryBus";
import {AggregateIdValidationQueryBusMiddleware} from "./core/query/middleware/AggregateIdValidationQueryBusMiddleware";
import {CommandBus} from "./core/command/CommandBus";
import {BasicEventBus, EventBus} from "./core/event/EventBus";
import {LogEventBusMiddleware} from "./core/event/middleware/LogEventBusMiddleware";
import {ErrorLoggerCommandBusMiddleware} from "./core/command/middleware/ErrorCommandBusMiddleware";
import {EventDispatcherCommandBusMiddleware} from "./core/command/middleware/EventDispatcherCommandBusMiddleware";
import {
    AggregateIdValidationCommandBusMiddleware
} from "./core/command/middleware/AggregateIdValidationCommandBusMiddleware";
import {ConfigureRoutes} from "./configuration/route/ConfigureRoutes";
import {Repositories} from "./configuration/repository/Repositories";
import {BuildDomains} from "../boundedContext/BuildDomains";

export class BuildApp {
    private app: CreateApp;
    private queryBus: QueryBus;
    private commandBus: CommandBus;
    private eventBus: EventBus;

    constructor(repositories: Repositories, logger: Logger, timer: Timer) {
        this.app = new CreateApp();
        this.queryBus = this.createQueryBus();
        this.eventBus = this.createEventBus(logger.stdoutLog, timer);
        this.commandBus  = this.createCommandBus(logger.stdoutLog, this.eventBus, this.queryBus);

        new BuildDomains(this.commandBus, this.queryBus, this.eventBus, repositories, logger.stdoutLog, timer);
        new ConfigureRoutes(this.app.getExpressApp(), this.queryBus, this.commandBus, logger, timer);
        // new Route(this.app.getExpressApp(), this.queryBus);
    }

    getBuildApp = (): CreateApp  => {
        return this.app;
    }

    createQueryBus = (): QueryBus => {
        const createQueryBus = () => new AggregateIdValidationQueryBusMiddleware(new QueryBus());
        return createQueryBus();
    }

    createEventBus = (stdoutLog: LoggerStdout, timer: Timer) =>
        new LogEventBusMiddleware(new BasicEventBus(), stdoutLog, timer);

    createCommandBus = (logger: LoggerStdout, eventBus: EventBus, queryBus: QueryBus): CommandBus => {
        const commandBus = new CommandBus();
        const aggregateIdValidationCommandBus = new AggregateIdValidationCommandBusMiddleware(commandBus, queryBus);
        const errorLoggerCommandBus = new ErrorLoggerCommandBusMiddleware(aggregateIdValidationCommandBus, logger);
        return new EventDispatcherCommandBusMiddleware(errorLoggerCommandBus, eventBus);
    };
}