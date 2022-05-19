import {Repository} from "./Repository";

export class InMemoryRepository<T> implements Repository<T> {
    private data: {[name: string]: T};

    constructor() {
        this.data = {};
    }

    async save(id: string, value: T): Promise<void> {
        this.data[id] = value;
    }

    get(id: string): T {
        return this.data[id];
    }

    list(): {[name: string]: T} {
        return this.data;
    }

    async delete(id: string): Promise<void> {
        delete this.data[id];
    }
}
