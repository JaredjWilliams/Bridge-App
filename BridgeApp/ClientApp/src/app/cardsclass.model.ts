export class Cardsclass {
    public suit: string;
    public number: string;
    public pointCount: number;

    constructor(suit: string, number: string, pointCount: number ) {
        this.suit = suit;
        this.number = number;
        this.pointCount = pointCount;
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
