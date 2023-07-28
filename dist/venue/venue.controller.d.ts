import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Venue } from "./model/venue.model";
export declare class VenueController {
    private readonly venueService;
    constructor(venueService: VenueService);
    create(createVenueDto: CreateVenueDto): Promise<{
        message: string;
        Venue: Venue;
    }>;
    findAll(): Promise<Venue[]>;
    findOne(id: string): Promise<Venue>;
    update(id: string, updateVenueDto: UpdateVenueDto): Promise<{
        message: string;
        updated: Venue;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
