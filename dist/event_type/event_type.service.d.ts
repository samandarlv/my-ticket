import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { EventType } from "./model/event_type.model";
export declare class EventTypeService {
    private eventTypeRepo;
    constructor(eventTypeRepo: typeof EventType);
    create(createEventTypeDto: CreateEventTypeDto): Promise<{
        message: string;
        evet_type: EventType;
    }>;
    findAll(): Promise<EventType[]>;
    findOne(id: number): Promise<EventType>;
    update(id: number, updateEventTypeDto: UpdateEventTypeDto): Promise<{
        message: string;
        updated: EventType;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
