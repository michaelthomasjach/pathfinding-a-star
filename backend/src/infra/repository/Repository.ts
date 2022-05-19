export interface Repository<T> {
    save(id: string, value: T): Promise<void>;

    get(id: string): T;

    delete(id: string): Promise<void>;

    list(): {[name: string]: T};
}
