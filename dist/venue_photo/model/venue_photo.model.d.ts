import { Model } from "sequelize-typescript";
import { Venue } from "../../venue/model/venue.model";
interface VenuePhotoAttr {
    venue_id: number;
    url: string;
}
export declare class VenuePhoto extends Model<VenuePhoto, VenuePhotoAttr> {
    id: number;
    venue_id: number;
    url: string;
    venuePhoto: Venue;
}
export {};
