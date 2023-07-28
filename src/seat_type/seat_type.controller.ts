import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("O'rindiqlar tiplari")
@Controller("seat-type")
export class SeatTypeController {
    constructor(private readonly seatTypeService: SeatTypeService) {}

    @ApiOperation({ summary: "Yangi o'rindiq tipini qo'shish" })
    @Post()
    create(@Body() createSeatTypeDto: CreateSeatTypeDto) {
        return this.seatTypeService.create(createSeatTypeDto);
    }

    @ApiOperation({ summary: "O'rindiqlar tiplarini ko'rish" })
    @Get()
    findAll() {
        return this.seatTypeService.findAll();
    }

    @ApiOperation({ summary: "O'rindiqlar tipini id orqali ko'rish" })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.seatTypeService.findOne(+id);
    }

    @ApiOperation({ summary: "O'rindiqlar tipini id orqali yangilash" })
    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateSeatTypeDto: UpdateSeatTypeDto
    ) {
        return this.seatTypeService.update(+id, updateSeatTypeDto);
    }

    @ApiOperation({ summary: "O'rindiqlar tipini id orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.seatTypeService.remove(+id);
    }
}
