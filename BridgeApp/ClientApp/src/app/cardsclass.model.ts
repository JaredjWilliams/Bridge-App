

export class Card {
    public suit: string;
    public number: string;
    public pointCount: number;
    public identifier: string;

    constructor(suit: string, number: string, pointCount: number, identifier: string) {
        this.suit = suit;
        this.number = number;
        this.pointCount = pointCount;
        this.identifier = identifier;
    }
    getSuit(): string {
        return `${this.suit}`
    }
    getNumber(): string {
        return `${this.number}`
    }
    getPointCount(): number {
        return this.pointCount
    }
}
