var cors = require("cors");

import express, { Application, Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";

export class CreateApp {
  private app: Express = express();

  constructor() {
    /**
     * TO AVOID ERROR No 'Access-Control-Allow-Origin'
     */
    this.app.use(
      cors({
        origin: "http://localhost:8080",
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
        // credentials: true, //access-control-allow-credentials:true
        // optionSuccessStatus: 200,
      })
    );

    dotenv.config();

    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  getExpressApp = (): Application => {
    return this.app;
  };
}
