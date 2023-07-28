import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from "sequelize-typescript";
import { EventType } from "../../event_type/model/event_type.model";
import { HumanCategory } from "../../human_category/model/human_category.model";
import { Venue } from "../../venue/model/venue.model";

interface EventAttr {
    name: string;
    photo: string;
    start_date: Date;
    start_time: string;
    finish_date: Date;
    finish_time: string;
    info: string;
    event_type_id: number;
    human_category_id: number;
    venue_id: number;
    lang_id: number;
    release_date: Date;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, EventAttr> {
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
    photo: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    start_date: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    start_time: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    finish_date: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    finish_time: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    info: string;

    @ForeignKey(() => EventType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    event_type_id: number;

    @ForeignKey(() => HumanCategory)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    human_category_id: number;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    venue_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    lang_id: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    release_date: Date;

    @BelongsTo(() => EventType)
    eventType: EventType;

    @BelongsTo(() => HumanCategory)
    humanCategory: HumanCategory;

    @BelongsTo(() => Venue)
    venue: Venue;
}
