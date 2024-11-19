export enum RoomType {
  SINGLE = "SINGLE",
  SUITE = "SUITE",
  LUXURY = "LUXURY"
}
export class Room {
    id: number;
    roomNumber: string;
    type: RoomType;

    constructor(roomNumber: string, type: RoomType, id: number) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.type = type;
    }


    toString(): string {
        return `Room { id: ${this.id}, roomNumber: "${this.roomNumber}", type: "${this.type}" }`;
    }
}
