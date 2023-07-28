"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanCategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const human_category_model_1 = require("./model/human_category.model");
let HumanCategoryService = exports.HumanCategoryService = class HumanCategoryService {
    constructor(humanCategoryRepo) {
        this.humanCategoryRepo = humanCategoryRepo;
    }
    async create(createHumanCategoryDto) {
        const category = await this.humanCategoryRepo.create(createHumanCategoryDto);
        if (category) {
            return {
                message: "Created succesfully",
                category: category,
            };
        }
        throw new common_1.HttpException("Did not created", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async findAll() {
        const category = await this.humanCategoryRepo.findAll({
            include: { all: true },
        });
        if (category.length > 0) {
            return category;
        }
        throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
    }
    async findOne(id) {
        const category = await this.humanCategoryRepo.findByPk(id, {
            include: { all: true },
        });
        if (category) {
            return category;
        }
        throw new common_1.HttpException("Not found with such id", common_1.HttpStatus.NOT_FOUND);
    }
    async update(id, updateHumanCategoryDto) {
        const updated = await this.humanCategoryRepo.update(updateHumanCategoryDto, {
            where: { id },
            returning: true,
        });
        if (updated[0]) {
            return {
                message: "Updated succesfully",
                updated: updated[1][0].dataValues,
            };
        }
        throw new common_1.HttpException("Not found with such id", common_1.HttpStatus.NOT_FOUND);
    }
    async remove(id) {
        const deleted = await this.humanCategoryRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new common_1.HttpException("Not found with such id", common_1.HttpStatus.NOT_FOUND);
    }
};
exports.HumanCategoryService = HumanCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(human_category_model_1.HumanCategory)),
    __metadata("design:paramtypes", [Object])
], HumanCategoryService);
//# sourceMappingURL=human_category.service.js.map