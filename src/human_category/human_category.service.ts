import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { HumanCategory } from "./model/human_category.model";

@Injectable()
export class HumanCategoryService {
    constructor(
        @InjectModel(HumanCategory)
        private humanCategoryRepo: typeof HumanCategory
    ) {}

    async create(
        createHumanCategoryDto: CreateHumanCategoryDto
    ): Promise<{ message: string; category: HumanCategory }> {
        const category = await this.humanCategoryRepo.create(
            createHumanCategoryDto
        );
        if (category) {
            return {
                message: "Created succesfully",
                category: category,
            };
        }
        throw new HttpException(
            "Did not created",
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    async findAll(): Promise<HumanCategory[]> {
        const category = await this.humanCategoryRepo.findAll({
            include: { all: true },
        });
        if (category.length > 0) {
            return category;
        }
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    async findOne(id: number): Promise<HumanCategory> {
        const category = await this.humanCategoryRepo.findByPk(id, {
            include: { all: true },
        });
        if (category) {
            return category;
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }

    async update(
        id: number,
        updateHumanCategoryDto: UpdateHumanCategoryDto
    ): Promise<{ message: string; updated: HumanCategory }> {
        const updated = await this.humanCategoryRepo.update(
            updateHumanCategoryDto,
            {
                where: { id },
                returning: true,
            }
        );

        if (updated[0]) {
            return {
                message: "Updated succesfully",
                updated: updated[1][0].dataValues,
            };
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }

    async remove(id: number): Promise<{ message: string }> {
        const deleted = await this.humanCategoryRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new HttpException("Not found with such id", HttpStatus.NOT_FOUND);
    }
}
