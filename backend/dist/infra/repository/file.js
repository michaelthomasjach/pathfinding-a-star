"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyFileIfNotExist = exports.writeFile = exports.readFile = void 0;
const fs_1 = require("fs");
const readFile = (filePath) => (0, fs_1.existsSync)(filePath) && JSON.parse((0, fs_1.readFileSync)(filePath));
exports.readFile = readFile;
const writeFile = (filePath, data) => {
    (0, fs_1.writeFileSync)(filePath, JSON.stringify(data));
};
exports.writeFile = writeFile;
const copyFileIfNotExist = (from, to) => {
    if (!(0, fs_1.existsSync)(to) && (0, fs_1.existsSync)(from)) {
        (0, fs_1.copyFileSync)(from, to);
    }
};
exports.copyFileIfNotExist = copyFileIfNotExist;
