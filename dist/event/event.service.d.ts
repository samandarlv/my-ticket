import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { Event } from "./model/event.model";
export declare class EventService {
    private eventRepo;
    constructor(eventRepo: typeof Event);
    create(createEventDto: CreateEventDto): Promise<{
        message: string;
        event: Event;
    }>;
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<{
        message: string;
        updated: Event;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
