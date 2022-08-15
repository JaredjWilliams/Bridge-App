export class Bidclass {
    public suit: string;
    public number: number;
    public meaning: string;

    constructor(suit: string, number: number, meaning: string) {
        this.suit = suit;
        this.number = number;
        this.meaning = meaning;
    }
    getSuit(): string {
        return `${this.suit}`
    }
    getNumber(): number {
        return this.number
    }
    getMeaning(): string {
        return `${this.meaning}`
    }
}
