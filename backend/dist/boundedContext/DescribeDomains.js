"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeDomains = void 0;
const DescribeUser_1 = require("./user/DescribeUser");
class DescribeDomains {
    constructor(commandBus, queryBus, eventBus, repositories, logger, timer) {
        this.getDomainsDescriptions = () => {
            return this.domainDescriptions;
        };
        this.domainDescriptions = [
            // @ts-ignore
            new DescribeUser_1.DescribeUser(queryBus, commandBus, repositories, timer).getDomainDescription(),
        ];
    }
}
exports.DescribeDomains = DescribeDomains;
