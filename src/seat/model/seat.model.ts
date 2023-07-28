import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from "sequelize-typescript";
import { SeatType } from "../../seat_type/model/seat_type.model";
import { Venue } from "../../venue/model/venue.model";

interface SeatAttr {
    sector: number;
    row: number;
    venue_id: number;
    seat_type_id: number;
    location_in_schema: string;
}

@Table({ tableName: "seat" })
export class Seat extends Model<Seat, SeatAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    row: number;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    venue_id: number;

    @ForeignKey(() => SeatType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    seat_type_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    location_in_schema: string;

    @BelongsTo(() => SeatType)
    seat_type: SeatType;

    @BelongsTo(() => Venue)
    venue: Venue;
}
