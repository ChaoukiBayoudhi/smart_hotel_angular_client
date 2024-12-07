import { Hotel } from "./hotel";

export class Address {

    id: number;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    //hotel: Hotel; // Relation 1-1 avec Hotel, optionnelle

    constructor();
    constructor(street: string, city: string, state: string, zipCode: string, country: string, hotel: Hotel, id: number);
    constructor(street?: string, city?: string, state?: string, zipCode?: string, country?: string, hotel?: Hotel, id?: number) {
        this.id = id || 0;
        this.street = street || '';
        this.city = city || '';
        this.state = state || '';
        this.zipCode = zipCode || '';
        this.country = country || '';
        //this.hotel = hotel || new Hotel;
    }

    toString(): string {
        return `Address { id: ${this.id}, street: "${this.street}", city: "${this.city}", state: "${this.state}", zipCode: "${this.zipCode}", country: "${this.country}"`;
    }
}
 