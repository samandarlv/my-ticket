import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from "@nestjs/common";
import { EventTypeService } from "./event_type.service";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Marosim turlari")
@Controller("event-type")
export class EventTypeController {
    constructor(private readonly eventTypeService: EventTypeService) {}

    @ApiOperation({ summary: "Yangi marosim turini qo'shish" })
    @Post()
    create(@Body() createEventTypeDto: CreateEventTypeDto) {
        return this.eventTypeService.create(createEventTypeDto);
    }

    @ApiOperation({ summary: "Marosim turlarini ko'rish" })
    @Get()
    findAll() {
        return this.eventTypeService.findAll();
    }

    @ApiOperation({ summary: "Marosim turini id orqali ko'rish" })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.eventTypeService.findOne(+id);
    }

    @ApiOperation({ summary: "Marosim turini id orqali yangilash" })
    @Put(":id")
    update(
        @Param("id") id: string,
        @Body() updateEventTypeDto: UpdateEventTypeDto
    ) {
        return this.eventTypeService.update(+id, updateEventTypeDto);
    }

    @ApiOperation({ summary: "Marosim turini id orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.eventTypeService.remove(+id);
    }
}
