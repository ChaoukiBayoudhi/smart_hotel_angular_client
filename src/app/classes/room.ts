export enum RoomType {
  SINGLE = "SINGLE",
  SUITE = "SUITE",
  LUXURY = "LUXURY"
}
export class Room {
    id: number;
    roomNumber: string;
    type: RoomType;

    constructor();
    constructor(roomNumber: string, type: RoomType, id: number);
    constructor(roomNumber?: string, type?: RoomType, id?: number) {
        this.id = id || 0;
        this.roomNumber = roomNumber || '';
        this.type = type || RoomType.SINGLE;
    }


    toString(): string {
        return `Room { id: ${this.id}, roomNumber: "${this.roomNumber}", type: "${this.type}" }`;
    }
}
