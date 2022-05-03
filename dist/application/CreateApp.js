"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApp = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
class CreateApp {
    constructor() {
        this.app = (0, express_1.default)();
        this.getApp = () => {
            return this.app;
        };
        dotenv_1.default.config();
        const PORT = process.env.PORT || 3000;
        this.app.use((0, helmet_1.default)());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.get('/', (req, res) => {
            res.send('<h1>Pathfinding A* est UP</h1>');
        });
    }
}
exports.CreateApp = CreateApp;
