import {Block, Zone} from "./Block";

export class Deck {
    private width: number;
    private height: number;
    private deck: Zone[][];
    constructor(width: number = 10, height: number = 10) {
        this.width = width;
        this.height = height;
        this.deck = this.create();
    }

    private create = (): Zone[][] => {
        const deck = [];
        for(let height = 0; height < this.height; height++) {
            const row: Array<Zone> = [];
            for(let i = 0; i < this.width; i++) row.push(new Block().Empty())
            deck.push(row);
        }
        return deck;
    }

    getDeck = () => {
        return this.deck;
    }
}