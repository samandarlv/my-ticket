import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { VenuePhoto } from "./model/venue_photo.model";
export declare class VenuePhotoService {
    private venuePhotoRepo;
    constructor(venuePhotoRepo: typeof VenuePhoto);
    create(createVenuePhotoDto: CreateVenuePhotoDto): Promise<{
        message: string;
        VenuePhoto: VenuePhoto;
    }>;
    findAll(): Promise<VenuePhoto[]>;
    findOne(id: number): Promise<VenuePhoto>;
    update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<{
        message: string;
        updated: VenuePhoto;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
