import {
    BelongsTo,
    Column,
    DataType,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/model/venue.model";

interface VenueTypeAttr {
    name: string;
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<VenueType, VenueTypeAttr> {
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

    @HasMany(() => Venue)
    venue: Venue[];
}
