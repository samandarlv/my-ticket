import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { HumanCategory } from "./model/human_category.model";
export declare class HumanCategoryService {
    private humanCategoryRepo;
    constructor(humanCategoryRepo: typeof HumanCategory);
    create(createHumanCategoryDto: CreateHumanCategoryDto): Promise<{
        message: string;
        category: HumanCategory;
    }>;
    findAll(): Promise<HumanCategory[]>;
    findOne(id: number): Promise<HumanCategory>;
    update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<{
        message: string;
        updated: HumanCategory;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
