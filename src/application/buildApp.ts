import {Deck} from "../utils/Deck";

export class buildApp {
    constructor() {
        this.createApp();
    }

    private createApp() {
        const deck = new Deck();
        console.log(deck.getDeck());
    }
}