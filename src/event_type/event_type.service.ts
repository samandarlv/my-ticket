import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { EventType } from "./model/event_type.model";

@Injectable()
export class EventTypeService {
    constructor(
        @InjectModel(EventType) private eventTypeRepo: typeof EventType
    ) {}

    async create(
        createEventTypeDto: CreateEventTypeDto
    ): Promise<{ message: string; evet_type: EventType }> {
        const event_type = await this.eventTypeRepo.create(createEventTypeDto);
        if (event_type) {
            return {
                message: "Created succesfully",
                evet_type: event_type,
            };
        }
        throw new HttpException(
            "Did not created",
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    async findAll(): Promise<EventType[]> {
        const event_types = await this.eventTypeRepo.findAll({
            include: { all: true },
        });
        if (event_types.length > 0) {
            return event_types;
        }
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    async findOne(id: number): Promise<EventType> {
        const event_type = await this.eventTypeRepo.findByPk(id, {
            include: { all: true },
        });
        if (event_type) {
            return event_type;
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }

    async update(
        id: number,
        updateEventTypeDto: UpdateEventTypeDto
    ): Promise<{ message: string; updated: EventType }> {
        const updated = await this.eventTypeRepo.update(updateEventTypeDto, {
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
        const deleted = await this.eventTypeRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }
}
