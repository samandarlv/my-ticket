import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("O'rindiqlar")
@Controller("seat")
export class SeatController {
    constructor(private readonly seatService: SeatService) {}

    @ApiOperation({ summary: "Yangi o'rindiq qo'shish" })
    @Post()
    create(@Body() createSeatDto: CreateSeatDto) {
        return this.seatService.create(createSeatDto);
    }

    @ApiOperation({ summary: "O'rindiqlarni ko'rish" })
    @Get()
    findAll() {
        return this.seatService.findAll();
    }

    @ApiOperation({ summary: "O'rindiqlarni id orqali ko'rish" })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.seatService.findOne(+id);
    }

    @ApiOperation({ summary: "O'rindiqlarni id orqali yangilash" })
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateSeatDto: UpdateSeatDto) {
        return this.seatService.update(+id, updateSeatDto);
    }

    @ApiOperation({ summary: "O'rindiqlarni id orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.seatService.remove(+id);
    }
}
