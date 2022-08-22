export class Bid {
    public identifier: string
    public suit: string;
    public number: string;
    public meaning: string;

    constructor(identifier: string, suit: string, number: string, meaning: string) {
        this.identifier = identifier;
        this.suit = suit;
        this.number = number;
        this.meaning = meaning;
        
    }
    getSuit(): string {
        return `${this.suit}`
    }  
    getNumber(): string {
        return `${this.number}`
    }
    getMeaning(): string {
        return `${this.meaning}`
    }
}
