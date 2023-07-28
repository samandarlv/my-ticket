import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Venue } from "./model/venue.model";

@Injectable()
export class VenueService {
    constructor(@InjectModel(Venue) private venueRepo: typeof Venue) {}

    async create(
        createVenueDto: CreateVenueDto
    ): Promise<{ message: string; Venue: Venue }> {
        const venue = await this.venueRepo.create(createVenueDto);
        if (venue) {
            return {
                message: "Created succesfully",
                Venue: venue,
            };
        }
        throw new HttpException(
            "Did not created",
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    async findAll(): Promise<Venue[]> {
        const venues = await this.venueRepo.findAll({
            include: { all: true },
        });
        if (venues.length > 0) {
            return venues;
        }
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    async findOne(id: number): Promise<Venue> {
        const venue = await this.venueRepo.findByPk(id, {
            include: { all: true },
        });
        if (venue) {
            return venue;
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }

    async update(
        id: number,
        updateVenueDto: UpdateVenueDto
    ): Promise<{ message: string; updated: Venue }> {
        const updated = await this.venueRepo.update(updateVenueDto, {
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
        const deleted = await this.venueRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }
}
