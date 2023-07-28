import { Model } from "sequelize-typescript";
import { Seat } from "../../seat/model/seat.model";
interface SeatTypeAttr {
    name: string;
}
export declare class SeatType extends Model<SeatType, SeatTypeAttr> {
    id: number;
    name: string;
    seats: Seat[];
}
export {};
