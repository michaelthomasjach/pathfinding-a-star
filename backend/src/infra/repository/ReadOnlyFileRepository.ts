import {FileRepository} from "./FileRepository";

export class ReadOnlyFileRepository<T> extends FileRepository<T> {
    async save(id: string, value: T): Promise<void> {
        return Promise.reject("Repository is read-only !");
    }

    async delete(id: string): Promise<void> {
        return Promise.reject("Repository is read-only !");
    }
}
