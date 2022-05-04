export enum Zone {
    WALL = "WALL",
    EMPTY = "EMPTY"
}

export class Block {
    constructor() {

    }

    Wall = (): Zone => {
        return Zone.WALL
    }

    Empty = (): Zone => {
        return Zone.EMPTY;
    }
} 