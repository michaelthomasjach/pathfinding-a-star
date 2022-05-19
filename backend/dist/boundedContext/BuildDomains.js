"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildDomains = void 0;
const DescribeDomains_1 = require("./DescribeDomains");
const RegisterDomains_1 = require("../application/core/domain/model/RegisterDomains");
class BuildDomains {
    constructor(commandBus, queryBus, eventBus, repositories, logger, timer) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
        this.eventBus = eventBus;
        this.repositories = repositories;
        this.logger = logger;
        this.timer = timer;
        const domains = new DescribeDomains_1.DescribeDomains(commandBus, queryBus, eventBus, repositories, logger, timer);
        new RegisterDomains_1.RegisterDomains(domains.getDomainsDescriptions(), commandBus, queryBus, eventBus);
    }
}
exports.BuildDomains = BuildDomains;
