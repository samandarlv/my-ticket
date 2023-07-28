import { EventTypeService } from "./event_type.service";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
export declare class EventTypeController {
    private readonly eventTypeService;
    constructor(eventTypeService: EventTypeService);
    create(createEventTypeDto: CreateEventTypeDto): Promise<{
        message: string;
        evet_type: import("./model/event_type.model").EventType;
    }>;
    findAll(): Promise<import("./model/event_type.model").EventType[]>;
    findOne(id: string): Promise<import("./model/event_type.model").EventType>;
    update(id: string, updateEventTypeDto: UpdateEventTypeDto): Promise<{
        message: string;
        updated: import("./model/event_type.model").EventType;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
