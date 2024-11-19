import { Address } from './address';
 enum HotelRating {
  ONE_STAR = "ONE_STAR",
  TWO_STAR = "TWO_STAR",
  THREE_STAR = "THREE_STAR",
  FOUR_STAR = "FOUR_STAR",
  FIVE_STAR = "FIVE_STAR"
}

export class Hotel {
    id: number;
    name: string;
    rating: HotelRating;
    address: Address; // Relation 1-1 avec Address, obligatoire

    constructor(name: string, address: Address, rating: HotelRating, id: number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.rating = rating;
    }

    toString(): string {
        return `Hotel { id: ${this.id}, name: "${this.name}", rating: "${this.rating}", address: ${this.address.toString()} }`;
    }
}
