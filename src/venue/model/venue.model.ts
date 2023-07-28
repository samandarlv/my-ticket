import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";
import { VenueType } from "../../venue_type/model/venue_type.model";
import { VenuePhoto } from "../../venue_photo/model/venue_photo.model";
import { Event } from "../../event/model/event.model";
import { Seat } from "../../seat/model/seat.model";

interface VenueAttr {
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    venue_type_id: number;
    schema: string;
    region_id: number;
    district_id: number;
}

@Table({ tableName: "venue" })
export class Venue extends Model<Venue, VenueAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    location: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    site: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone: string;

    @ForeignKey(() => VenueType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    venue_type_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    schema: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    region_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    district_id: number;

    @BelongsTo(() => VenueType)
    venueType: VenueType;

    @HasMany(() => VenuePhoto)
    venuePhoto: VenuePhoto[];

    @HasMany(() => Event)
    events: Event[];

    @HasMany(() => Seat)
    seats: Seat[];
}
