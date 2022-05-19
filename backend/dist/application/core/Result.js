"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failure = exports.success = void 0;
const success = (result) => {
    if (result === undefined) {
        return {};
    }
    return result;
};
exports.success = success;
const failure = (message = "") => ({ error: true, message });
exports.failure = failure;
