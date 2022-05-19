"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
class Query {
    constructor(type) {
        this.type = type;
        if (this.constructor === Query) {
            throw new TypeError("Abstract class 'Query' cannot be instantiated directly");
        }
    }
}
exports.Query = Query;
