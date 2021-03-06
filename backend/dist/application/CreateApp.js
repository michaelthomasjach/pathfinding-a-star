"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApp = void 0;
var cors = require("cors");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
class CreateApp {
    constructor() {
        this.app = (0, express_1.default)();
        this.getExpressApp = () => {
            return this.app;
        };
        /**
         * TO AVOID ERROR No 'Access-Control-Allow-Origin'
         */
        this.app.use(cors({
            origin: "http://localhost:8080",
            methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
            // credentials: true, //access-control-allow-credentials:true
            // optionSuccessStatus: 200,
        }));
        dotenv_1.default.config();
        this.app.use((0, helmet_1.default)());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
}
exports.CreateApp = CreateApp;
