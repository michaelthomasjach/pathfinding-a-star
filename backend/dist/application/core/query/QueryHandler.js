"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryHandler = void 0;
class QueryHandler {
    /**
     * Abstract class "QueryHandler" cannot be instantiated directly
     */
    constructor() {
        if (this.constructor === QueryHandler)
            throw new TypeError("Abstract class 'QueryHandler' cannot be instantiated directly");
        if (this.execute === QueryHandler.prototype.execute)
            throw new TypeError("You must implement 'execute' function");
    }
    /**
     * You must implement this function
     * @param {Q extends Query} data
     */
    execute(data) {
        throw new Error("You must not call this function");
    }
}
exports.QueryHandler = QueryHandler;
