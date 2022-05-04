import {Grid} from "../views/Grid";
import { Request, Response } from 'express';


export class GridController {
    constructor () {}

    getGrid = (req: Request, res: Response) => {
        res.send(new Grid().getGrid());
    }
}