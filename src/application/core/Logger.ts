export interface LoggerStdout {
    log(...data: any[]): void;
}

export interface Logger {
    stdoutLog: LoggerStdout;
}
