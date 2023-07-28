import { Model } from "sequelize-typescript";
import { SeatType } from "../../seat_type/model/seat_type.model";
import { Venue } from "../../venue/model/venue.model";
interface SeatAttr {
    sector: number;
    row: number;
    venue_id: number;
    seat_type_id: number;
    location_in_schema: string;
}
export declare class Seat extends Model<Seat, SeatAttr> {
    id: number;
    row: number;
    venue_id: number;
    seat_type_id: number;
    location_in_schema: string;
    seat_type: SeatType;
    venue: Venue;
}
export {};
