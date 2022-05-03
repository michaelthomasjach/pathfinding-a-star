"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevLogger = void 0;
class DevLogger {
    constructor() {
        this.logger = () => {
            return { stdoutLog: console };
        };
    }
}
exports.DevLogger = DevLogger;
