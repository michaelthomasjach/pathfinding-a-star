import {Block, Zone} from "./Block";

export class GridBuilder {
    private width: number;
    private height: number;
    private grid: Zone[][];
    constructor(width: number = 10, height: number = 10) {
        this.width = width;
        this.height = height;
        this.grid = this.create();
    }

    private create = (): Zone[][] => {
        const grid = [];
        for(let height = 0; height < this.height; height++) {
            const row: Array<Zone> = [];
            for(let i = 0; i < this.width; i++) row.push(new Block().Empty())
            grid.push(row);
        }
        return grid;
    }

    getGrid = (): Zone[][] => {
        return this.grid;
    }
}