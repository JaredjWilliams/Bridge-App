export class DistributionClass {
    public suitCount: number;
    public suit: string;

    constructor(suitCount: number, suit: string) {
        this.suitCount = suitCount;
        this.suit = suit; 
    }
    getSuitCount(): number {
        return this.suitCount
    } 
    getSuit(): string {
        return this.suit
    }
    incrementSuitCount(): number {
        this.suitCount++
        return this.suitCount
    }
    decrementSuitCount(): number {
        this.suitCount--
        return this.suitCount
    }
}
