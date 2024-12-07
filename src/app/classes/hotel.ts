import { Address } from './address';
 enum HotelRating {
  THREE_STARS = "THREE_STARS",
  FOUR_STARS = "FOUR_STARS",
  FIVE_STARS = "FIVE_STARS"
}

export class Hotel {
    id: number;
    name: string;
    rating: HotelRating;
    address: Address;

    constructor();
    constructor(name: string, address: Address, rating: HotelRating, id: number);
    constructor(name?: string, address?: Address, rating?: HotelRating, id?: number) {
        this.id = id || 0;
        this.name = name || '';
        this.address = address || new Address();
        this.rating = rating || HotelRating.THREE_STARS;
    }

    toString(): string {
        return `Hotel { id: ${this.id}, name: "${this.name}", rating: "${this.rating}", address: ${this.address.toString()} }`;
    }
}
 