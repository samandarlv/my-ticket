import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Kirish uchun toifalar/kategoriya")
@Controller("human-category")
export class HumanCategoryController {
    constructor(private readonly humanCategoryService: HumanCategoryService) {}

    @ApiOperation({ summary: "Yangi kategoriya qo'shish" })
    @Post()
    create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
        return this.humanCategoryService.create(createHumanCategoryDto);
    }

    @ApiOperation({ summary: "Barcha kategoriyalarni ko'rish" })
    @Get()
    findAll() {
        return this.humanCategoryService.findAll();
    }

    @ApiOperation({ summary: "Kategoriyani id orqali ko'rish" })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.humanCategoryService.findOne(+id);
    }

    @ApiOperation({ summary: "Kategoriyalarni id orqali yangilash" })
    @Put(":id")
    update(
        @Param("id") id: string,
        @Body() updateHumanCategoryDto: UpdateHumanCategoryDto
    ) {
        return this.humanCategoryService.update(+id, updateHumanCategoryDto);
    }

    @ApiOperation({ summary: "Kategoriyalarni id orqali o'chirish" })
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.humanCategoryService.remove(+id);
    }
}
