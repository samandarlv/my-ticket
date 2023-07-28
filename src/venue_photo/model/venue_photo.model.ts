import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/model/venue.model";

interface VenuePhotoAttr {
    venue_id: number;
    url: string;
}

@Table({ tableName: "venue_photo" })
export class VenuePhoto extends Model<VenuePhoto, VenuePhotoAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    venue_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    url: string;

    @BelongsTo(() => Venue)
    venuePhoto: Venue;
}
