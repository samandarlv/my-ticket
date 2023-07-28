import { Model } from "sequelize-typescript";
import { Venue } from "../../venue/model/venue.model";
interface VenueTypeAttr {
    name: string;
}
export declare class VenueType extends Model<VenueType, VenueTypeAttr> {
    id: number;
    name: string;
    venue: Venue[];
}
export {};
