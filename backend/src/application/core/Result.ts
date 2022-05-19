export interface ErrorHandling {
    error?: boolean;
    message?: string;
}

export type Result<T> = T & ErrorHandling;

export const success = <T>(result?: T): Result<T> => {
    if (result === undefined) {
        return {} as Result<null>;
    }
    return result;
};

export const failure = (message = ""): Result<any> => ({error: true, message});
