import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Seat } from "./model/seat.model";

@Injectable()
export class SeatService {
    constructor(@InjectModel(Seat) private seatRepo: typeof Seat) {}
    async create(
        createSeatDto: CreateSeatDto
    ): Promise<{ message: string; seat: Seat }> {
        const seat = await this.seatRepo.create(createSeatDto);
        if (seat) {
            return {
                message: "Created succesfully",
                seat: seat,
            };
        }
        throw new HttpException(
            "Did not created",
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    async findAll(): Promise<Seat[]> {
        const seat = await this.seatRepo.findAll({
            include: { all: true },
        });
        if (seat.length > 0) {
            return seat;
        }
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    async findOne(id: number): Promise<Seat> {
        const seat = await this.seatRepo.findByPk(id, {
            include: { all: true },
        });
        if (seat) {
            return seat;
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }

    async update(
        id: number,
        updateSeatDto: UpdateSeatDto
    ): Promise<{ message: string; updated: Seat }> {
        const updated = await this.seatRepo.update(updateSeatDto, {
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
        const deleted = await this.seatRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }
}
