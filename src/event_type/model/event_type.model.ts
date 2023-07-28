import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from "sequelize-typescript";
import { Event } from "../../event/model/event.model";

interface EventTypeAttr {
    name: string;
    parent_event_type_id: number;
}

@Table({ tableName: "event_type" })
export class EventType extends Model<EventType, EventTypeAttr> {
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

    @ForeignKey(() => EventType)
    @Column({
        type: DataType.INTEGER,
    })
    parent_event_type_id: number;

    @BelongsTo(() => EventType, "parent_event_type_id")
    parent: EventType;

    @HasMany(() => Event)
    event: Event[];
}
