"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildApp = void 0;
const CreateApp_1 = require("./CreateApp");
const QueryBus_1 = require("./core/query/QueryBus");
const AggregateIdValidationQueryBusMiddleware_1 = require("./core/query/middleware/AggregateIdValidationQueryBusMiddleware");
const CommandBus_1 = require("./core/command/CommandBus");
const EventBus_1 = require("./core/event/EventBus");
const LogEventBusMiddleware_1 = require("./core/event/middleware/LogEventBusMiddleware");
const ErrorCommandBusMiddleware_1 = require("./core/command/middleware/ErrorCommandBusMiddleware");
const EventDispatcherCommandBusMiddleware_1 = require("./core/command/middleware/EventDispatcherCommandBusMiddleware");
const AggregateIdValidationCommandBusMiddleware_1 = require("./core/command/middleware/AggregateIdValidationCommandBusMiddleware");
const ConfigureRoutes_1 = require("./configuration/route/ConfigureRoutes");
const BuildDomains_1 = require("../boundedContext/BuildDomains");
class BuildApp {
    constructor(repositories, logger, timer) {
        this.getBuildApp = () => {
            return this.app;
        };
        this.createQueryBus = () => {
            const createQueryBus = () => new AggregateIdValidationQueryBusMiddleware_1.AggregateIdValidationQueryBusMiddleware(new QueryBus_1.QueryBus());
            return createQueryBus();
        };
        this.createEventBus = (stdoutLog, timer) => new LogEventBusMiddleware_1.LogEventBusMiddleware(new EventBus_1.BasicEventBus(), stdoutLog, timer);
        this.createCommandBus = (logger, eventBus, queryBus) => {
            const commandBus = new CommandBus_1.CommandBus();
            const aggregateIdValidationCommandBus = new AggregateIdValidationCommandBusMiddleware_1.AggregateIdValidationCommandBusMiddleware(commandBus, queryBus);
            const errorLoggerCommandBus = new ErrorCommandBusMiddleware_1.ErrorLoggerCommandBusMiddleware(aggregateIdValidationCommandBus, logger);
            return new EventDispatcherCommandBusMiddleware_1.EventDispatcherCommandBusMiddleware(errorLoggerCommandBus, eventBus);
        };
        this.app = new CreateApp_1.CreateApp();
        this.queryBus = this.createQueryBus();
        this.eventBus = this.createEventBus(logger.stdoutLog, timer);
        this.commandBus = this.createCommandBus(logger.stdoutLog, this.eventBus, this.queryBus);
        new BuildDomains_1.BuildDomains(this.commandBus, this.queryBus, this.eventBus, repositories, logger.stdoutLog, timer);
        new ConfigureRoutes_1.ConfigureRoutes(this.app.getExpressApp(), this.queryBus, this.commandBus, logger, timer);
        // new Route(this.app.getExpressApp(), this.queryBus);
    }
}
exports.BuildApp = BuildApp;
