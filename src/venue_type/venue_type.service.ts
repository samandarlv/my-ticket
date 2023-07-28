import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenueType } from "./model/venue_type.model";

@Injectable()
export class VenueTypeService {
    constructor(
        @InjectModel(VenueType) private venueTypeRepo: typeof VenueType
    ) {}

    async create(
        createVenueTypeDto: CreateVenueTypeDto
    ): Promise<{ message: string; VenueType: VenueType }> {
        const type = await this.venueTypeRepo.create(createVenueTypeDto);
        if (type) {
            return {
                message: "Created succesfully",
                VenueType: type,
            };
        }
        throw new HttpException(
            "Did not created",
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    async findAll(): Promise<VenueType[]> {
        const types = await this.venueTypeRepo.findAll({
            include: { all: true },
        });
        if (types.length > 0) {
            return types;
        }
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    async findOne(id: number): Promise<VenueType> {
        const type = await this.venueTypeRepo.findByPk(id, {
            include: { all: true },
        });
        if (type) {
            return type;
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }

    async update(
        id: number,
        updateVenueTypeDto: UpdateVenueTypeDto
    ): Promise<{ message: string; updated: VenueType }> {
        const updated = await this.venueTypeRepo.update(updateVenueTypeDto, {
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
        const deleted = await this.venueTypeRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }
}
