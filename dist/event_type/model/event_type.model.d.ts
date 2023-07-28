import { Model } from "sequelize-typescript";
import { Event } from "../../event/model/event.model";
interface EventTypeAttr {
    name: string;
    parent_event_type_id: number;
}
export declare class EventType extends Model<EventType, EventTypeAttr> {
    id: number;
    name: string;
    parent_event_type_id: number;
    parent: EventType;
    event: Event[];
}
export {};
