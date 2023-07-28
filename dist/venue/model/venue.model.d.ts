import { Model } from "sequelize-typescript";
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
export declare class Venue extends Model<Venue, VenueAttr> {
    id: number;
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    venue_type_id: number;
    schema: string;
    region_id: number;
    district_id: number;
    venueType: VenueType;
    venuePhoto: VenuePhoto[];
    events: Event[];
    seats: Seat[];
}
export {};
