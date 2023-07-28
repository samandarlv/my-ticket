import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { VenueType } from "./model/venue_type.model";
export declare class VenueTypeService {
    private venueTypeRepo;
    constructor(venueTypeRepo: typeof VenueType);
    create(createVenueTypeDto: CreateVenueTypeDto): Promise<{
        message: string;
        VenueType: VenueType;
    }>;
    findAll(): Promise<VenueType[]>;
    findOne(id: number): Promise<VenueType>;
    update(id: number, updateVenueTypeDto: UpdateVenueTypeDto): Promise<{
        message: string;
        updated: VenueType;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
