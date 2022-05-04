import {Logger} from "../../core/Logger";

export class DevLogger {
    logger = (): Logger => {
         return {stdoutLog: console};
    }
} 
