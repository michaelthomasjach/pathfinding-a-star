import { Application, Request, Response } from "express";
import { GridController } from "../../controller/GridController";

export class Route {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    this.routes();
  }

  private routes = () => {
    this.app.get("/grid", (req: Request, res: Response) => {
      console.log("Réponse backend /grid");
      return new GridController().getGrid(req, res);
    });
  };
}
