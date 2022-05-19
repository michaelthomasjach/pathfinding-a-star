import {copyFileIfNotExist, readFile, writeFile} from "./file";
import {Repository} from "./Repository";

export class FileRepository<T> implements Repository<T> {
    private filePath: string;
    private data: {[name: string]: T};

    constructor(path: string, defaultPath = "") {
        copyFileIfNotExist(defaultPath, path);
        this.filePath = path;
        this.data = readFile(path) || {};
    }

    async save(id: string, value: T): Promise<void> {
        this.data[id] = value;
        return this.syncPersistence();
    }

    get(id: string): T {
        return this.data[id];
    }

    list(): {[name: string]: T} {
        return this.data;
    }

    async delete(id: string): Promise<void> {
        delete this.data[id];
        return this.syncPersistence();
    }

    async syncPersistence(): Promise<void> {
        writeFile(this.filePath, this.data);
    }
}
