

export class Card {
    public suit: string;
    public number: string;
    public pointCount: number;
    public identifier: string;
    public clicked: boolean;
    

    constructor(suit: string, number: string, pointCount: number, identifier: string, clicked: boolean) {
        this.suit = suit;
        this.number = number;
        this.pointCount = pointCount;
        this.identifier = identifier;
        this.clicked = clicked;
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
