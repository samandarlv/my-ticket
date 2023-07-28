import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(createEventDto: CreateEventDto): Promise<{
        message: string;
        event: import("./model/event.model").Event;
    }>;
    findAll(): Promise<import("./model/event.model").Event[]>;
    findOne(id: string): Promise<import("./model/event.model").Event>;
    update(id: string, updateEventDto: UpdateEventDto): Promise<{
        message: string;
        updated: import("./model/event.model").Event;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
