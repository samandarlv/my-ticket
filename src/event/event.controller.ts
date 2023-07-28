import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Marosimlar")
@Controller("event")
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @ApiOperation({ summary: "Yangi marosim qo'shish" })
    @Post()
    create(@Body() createEventDto: CreateEventDto) {
        return this.eventService.create(createEventDto);
    }

    @ApiOperation({ summary: "Marosimlarni ko'rish" })
    @Get()
    findAll() {
        return this.eventService.findAll();
    }

    @ApiOperation({ summary: "Marosimni id orqali ko'rish" })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.eventService.findOne(+id);
    }

    @ApiOperation({ summary: "Marosimni id orqali yangilash" })
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
        return this.eventService.update(+id, updateEventDto);
    }

    @ApiOperation({ summary: "Marosimni id orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.eventService.remove(+id);
    }
}
