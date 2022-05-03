import express, { Application, Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

export class CreateApp {
    private app: Express = express();

    constructor() {
        dotenv.config();

        const PORT = process.env.PORT || 3000;
        
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        this.app.get('/', (req: Request, res: Response) => {
            res.send('<h1>Pathfinding A* est UP</h1>');
        });
    }

    getApp = (): Express => {
        return this.app;
    }
}