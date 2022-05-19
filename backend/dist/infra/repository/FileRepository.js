"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRepository = void 0;
const file_1 = require("./file");
class FileRepository {
    constructor(path, defaultPath = "") {
        (0, file_1.copyFileIfNotExist)(defaultPath, path);
        this.filePath = path;
        this.data = (0, file_1.readFile)(path) || {};
    }
    save(id, value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data[id] = value;
            return this.syncPersistence();
        });
    }
    get(id) {
        return this.data[id];
    }
    list() {
        return this.data;
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            delete this.data[id];
            return this.syncPersistence();
        });
    }
    syncPersistence() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, file_1.writeFile)(this.filePath, this.data);
        });
    }
}
exports.FileRepository = FileRepository;
