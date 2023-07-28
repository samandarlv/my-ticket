import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
export declare class VenueTypeController {
    private readonly venueTypeService;
    constructor(venueTypeService: VenueTypeService);
    create(createVenueTypeDto: CreateVenueTypeDto): Promise<{
        message: string;
        VenueType: import("./model/venue_type.model").VenueType;
    }>;
    findAll(): Promise<import("./model/venue_type.model").VenueType[]>;
    findOne(id: string): Promise<import("./model/venue_type.model").VenueType>;
    update(id: string, updateVenueTypeDto: UpdateVenueTypeDto): Promise<{
        message: string;
        updated: import("./model/venue_type.model").VenueType;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
