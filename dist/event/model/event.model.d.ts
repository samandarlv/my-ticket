import { Model } from "sequelize-typescript";
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
export declare class Event extends Model<Event, EventAttr> {
    id: number;
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
    eventType: EventType;
    humanCategory: HumanCategory;
    venue: Venue;
}
export {};
