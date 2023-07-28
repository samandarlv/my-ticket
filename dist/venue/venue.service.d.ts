import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Venue } from "./model/venue.model";
export declare class VenueService {
    private venueRepo;
    constructor(venueRepo: typeof Venue);
    create(createVenueDto: CreateVenueDto): Promise<{
        message: string;
        Venue: Venue;
    }>;
    findAll(): Promise<Venue[]>;
    findOne(id: number): Promise<Venue>;
    update(id: number, updateVenueDto: UpdateVenueDto): Promise<{
        message: string;
        updated: Venue;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
