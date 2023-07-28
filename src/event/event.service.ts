import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "./model/event.model";

@Injectable()
export class EventService {
    constructor(@InjectModel(Event) private eventRepo: typeof Event) {}

    async create(
        createEventDto: CreateEventDto
    ): Promise<{ message: string; event: Event }> {
        const event = await this.eventRepo.create(createEventDto);
        if (event) {
            return {
                message: "Created succesfully",
                event: event,
            };
        }
        throw new HttpException(
            "Did not created",
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    async findAll(): Promise<Event[]> {
        const events = await this.eventRepo.findAll({
            include: { all: true },
        });
        if (events.length > 0) {
            return events;
        }
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    async findOne(id: number): Promise<Event> {
        const event = await this.eventRepo.findByPk(id, {
            include: { all: true },
        });
        if (event) {
            return event;
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }

    async update(
        id: number,
        updateEventDto: UpdateEventDto
    ): Promise<{ message: string; updated: Event }> {
        const updated = await this.eventRepo.update(updateEventDto, {
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
        const deleted = await this.eventRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }
}
