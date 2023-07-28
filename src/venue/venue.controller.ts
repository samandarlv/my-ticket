import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
} from "@nestjs/common";
import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Venue } from "./model/venue.model";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Joylar")
@Controller("venue")
export class VenueController {
    constructor(private readonly venueService: VenueService) {}

    @ApiOperation({ summary: "Yangi joy qo'shish" })
    @Post()
    create(@Body() createVenueDto: CreateVenueDto): Promise<{
        message: string;
        Venue: Venue;
    }> {
        return this.venueService.create(createVenueDto);
    }

    @ApiOperation({ summary: "Barcha joylarni ko'rish" })
    @Get()
    findAll(): Promise<Venue[]> {
        return this.venueService.findAll();
    }

    @ApiOperation({ summary: "Joylarni id orqali ko'rish" })
    @Get(":id")
    findOne(@Param("id") id: string): Promise<Venue> {
        return this.venueService.findOne(+id);
    }

    @ApiOperation({ summary: "Joylarni id orqali yangilash" })
    @Put(":id")
    update(
        @Param("id") id: string,
        @Body() updateVenueDto: UpdateVenueDto
    ): Promise<{ message: string; updated: Venue }> {
        return this.venueService.update(+id, updateVenueDto);
    }

    @ApiOperation({ summary: "Joylarni id orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string): Promise<{ message: string }> {
        return this.venueService.remove(+id);
    }
}
