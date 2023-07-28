import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenuePhoto } from "./model/venue_photo.model";

@Injectable()
export class VenuePhotoService {
    constructor(
        @InjectModel(VenuePhoto) private venuePhotoRepo: typeof VenuePhoto
    ) {}

    async create(
        createVenuePhotoDto: CreateVenuePhotoDto
    ): Promise<{ message: string; VenuePhoto: VenuePhoto }> {
        const photo = await this.venuePhotoRepo.create(createVenuePhotoDto);
        if (photo) {
            return {
                message: "Created succesfully",
                VenuePhoto: photo,
            };
        }
        throw new HttpException(
            "Did not created",
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    async findAll(): Promise<VenuePhoto[]> {
        const photos = await this.venuePhotoRepo.findAll({
            include: { all: true },
        });
        if (photos.length > 0) {
            return photos;
        }
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    async findOne(id: number): Promise<VenuePhoto> {
        const photo = await this.venuePhotoRepo.findByPk(id, {
            include: { all: true },
        });
        if (photo) {
            return photo;
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }

    async update(
        id: number,
        updateVenuePhotoDto: UpdateVenuePhotoDto
    ): Promise<{ message: string; updated: VenuePhoto }> {
        const updated = await this.venuePhotoRepo.update(updateVenuePhotoDto, {
            where: { id },
            returning: true,
        });
        if (updated[0]) {
            return {
                message: "Updated succesfully",
                updated: updated[1][0].dataValues,
            };
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }

    async remove(id: number): Promise<{ message: string }> {
        const deleted = await this.venuePhotoRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }
}
