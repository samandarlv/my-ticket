import { HumanCategoryService } from "./human_category.service";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
export declare class HumanCategoryController {
    private readonly humanCategoryService;
    constructor(humanCategoryService: HumanCategoryService);
    create(createHumanCategoryDto: CreateHumanCategoryDto): Promise<{
        message: string;
        category: import("./model/human_category.model").HumanCategory;
    }>;
    findAll(): Promise<import("./model/human_category.model").HumanCategory[]>;
    findOne(id: string): Promise<import("./model/human_category.model").HumanCategory>;
    update(id: string, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<{
        message: string;
        updated: import("./model/human_category.model").HumanCategory;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
