export enum ReservationStatus {
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  IN_PROGRESS = "IN_PROGRESS"
}
export class Reservation {
    id: number;
    checkInDate: Date;
    checkOutDate: Date;
    reservationDate: Date;
    reservationStatus: ReservationStatus;

    constructor();
    constructor(checkInDate: Date, checkOutDate: Date, reservationDate: Date, reservationStatus: ReservationStatus, id: number);
    constructor(checkInDate?: Date, checkOutDate?: Date, reservationDate?: Date, reservationStatus?: ReservationStatus, id?: number) {
        this.id = id || 0;
        this.checkInDate = checkInDate || new Date();
        this.checkOutDate = checkOutDate || new Date();
        this.reservationDate = reservationDate || new Date();
        this.reservationStatus = reservationStatus || ReservationStatus.IN_PROGRESS;
    }

    toString(): string {
        return `Reservation { id: ${this.id}, checkInDate: "${this.checkInDate.toISOString()}", checkOutDate: "${this.checkOutDate.toISOString()}", reservationDate: "${this.reservationDate.toISOString()}", reservationStatus: "${this.reservationStatus}" }`;
    }
}
 