"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
class CommandHandler {
    /**
     * Abstract class "CommandHandler" cannot be instantiated directly
     */
    constructor() {
        if (this.constructor === CommandHandler)
            throw new TypeError("Abstract class 'CommandHandler' cannot be instantiated directly");
        if (this.execute === CommandHandler.prototype.execute)
            throw new TypeError("You must implement 'execute' function");
    }
    /**
     * You must implement this function
     * @param {Command} command
     * @returns CommandResponse
     */
    execute(command) {
        throw new Error("You must not call this function");
    }
}
exports.CommandHandler = CommandHandler;
