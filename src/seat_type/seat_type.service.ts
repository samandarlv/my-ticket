import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { SeatType } from "./model/seat_type.model";

@Injectable()
export class SeatTypeService {
    constructor(@InjectModel(SeatType) private seatTypeRepo: typeof SeatType) {}
    async create(
        createSeatTypeDto: CreateSeatTypeDto
    ): Promise<{ message: string; seat_type: SeatType }> {
        const seat_type = await this.seatTypeRepo.create(createSeatTypeDto);
        if (seat_type) {
            return {
                message: "Created succesfully",
                seat_type: seat_type,
            };
        }
        throw new HttpException(
            "Did not created",
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    async findAll(): Promise<SeatType[]> {
        const seat_type = await this.seatTypeRepo.findAll({
            include: { all: true },
        });
        if (seat_type.length > 0) {
            return seat_type;
        }
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    async findOne(id: number): Promise<SeatType> {
        const seat_type = await this.seatTypeRepo.findByPk(id, {
            include: { all: true },
        });
        if (seat_type) {
            return seat_type;
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }

    async update(
        id: number,
        updateSeatTypeDto: UpdateSeatTypeDto
    ): Promise<{ message: string; updated: SeatType }> {
        const updated = await this.seatTypeRepo.update(updateSeatTypeDto, {
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
        const deleted = await this.seatTypeRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }
}
