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

    constructor(
        checkInDate: Date,
        checkOutDate: Date,
        reservationDate: Date,
        reservationStatus: ReservationStatus,
        id: number
    ) {
        this.id = id;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.reservationDate = reservationDate;
        this.reservationStatus = reservationStatus;
    }

    toString(): string {
        return `Reservation { id: ${this.id}, checkInDate: "${this.checkInDate.toISOString()}", checkOutDate: "${this.checkOutDate.toISOString()}", reservationDate: "${this.reservationDate.toISOString()}", reservationStatus: "${this.reservationStatus}" }`;
    }
}
