"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor(type) {
        this.type = type;
        if (this.constructor === Command) {
            throw new TypeError("Abstract class 'Command' cannot be instantiated directly");
        }
    }
}
exports.Command = Command;
