import express, { Application, Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

export class CreateApp {
    private app: Express = express();

    constructor() {
        dotenv.config();

        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    getExpressApp = (): Application => {
        return this.app;
    }
}