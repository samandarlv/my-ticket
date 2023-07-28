import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
} from "@nestjs/common";
import { VenuePhotoService } from "./venue_photo.service";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Joylar rasmlari")
@Controller("venue-photo")
export class VenuePhotoController {
    constructor(private readonly venuePhotoService: VenuePhotoService) {}

    @ApiOperation({ summary: "Joy rasmini qo'shish" })
    @Post()
    create(@Body() createVenuePhotoDto: CreateVenuePhotoDto) {
        return this.venuePhotoService.create(createVenuePhotoDto);
    }

    @ApiOperation({ summary: "Joylarni rasminilarini ko'rish" })
    @Get()
    findAll() {
        return this.venuePhotoService.findAll();
    }

    @ApiOperation({ summary: "Joylarni rasminilarini id orqali ko'rish" })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.venuePhotoService.findOne(+id);
    }

    @ApiOperation({ summary: "Joylarni rasminilarini id orqali yangilash" })
    @Put(":id")
    update(
        @Param("id") id: string,
        @Body() updateVenuePhotoDto: UpdateVenuePhotoDto
    ) {
        return this.venuePhotoService.update(+id, updateVenuePhotoDto);
    }

    @ApiOperation({ summary: "Joylarni rasminilarini id orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.venuePhotoService.remove(+id);
    }
}
