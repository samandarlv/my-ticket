import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from "@nestjs/common";
import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Joy turi")
@Controller("venue-type")
export class VenueTypeController {
    constructor(private readonly venueTypeService: VenueTypeService) {}

    @ApiOperation({ summary: "Joy turini qo'shish" })
    @Post()
    create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
        return this.venueTypeService.create(createVenueTypeDto);
    }

    @ApiOperation({ summary: "Hamma joy turlarini ko'rish" })
    @Get()
    findAll() {
        return this.venueTypeService.findAll();
    }

    @ApiOperation({ summary: "Joy turini id orqali ko'rish" })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.venueTypeService.findOne(+id);
    }

    @ApiOperation({ summary: "Joy turini id orqali yangilash" })
    @Put(":id")
    update(
        @Param("id") id: string,
        @Body() updateVenueTypeDto: UpdateVenueTypeDto
    ) {
        return this.venueTypeService.update(+id, updateVenueTypeDto);
    }

    @ApiOperation({ summary: "Joy turini id orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.venueTypeService.remove(+id);
    }
}
