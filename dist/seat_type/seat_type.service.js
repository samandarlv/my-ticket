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
exports.SeatTypeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const seat_type_model_1 = require("./model/seat_type.model");
let SeatTypeService = exports.SeatTypeService = class SeatTypeService {
    constructor(seatTypeRepo) {
        this.seatTypeRepo = seatTypeRepo;
    }
    async create(createSeatTypeDto) {
        const seat_type = await this.seatTypeRepo.create(createSeatTypeDto);
        if (seat_type) {
            return {
                message: "Created succesfully",
                seat_type: seat_type,
            };
        }
        throw new common_1.HttpException("Did not created", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async findAll() {
        const seat_type = await this.seatTypeRepo.findAll({
            include: { all: true },
        });
        if (seat_type.length > 0) {
            return seat_type;
        }
        throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
    }
    async findOne(id) {
        const seat_type = await this.seatTypeRepo.findByPk(id, {
            include: { all: true },
        });
        if (seat_type) {
            return seat_type;
        }
        throw new common_1.HttpException("Not found with such id", common_1.HttpStatus.NOT_FOUND);
    }
    async update(id, updateSeatTypeDto) {
        const updated = await this.seatTypeRepo.update(updateSeatTypeDto, {
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
        const deleted = await this.seatTypeRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new common_1.HttpException("Not found with such id", common_1.HttpStatus.NOT_FOUND);
    }
};
exports.SeatTypeService = SeatTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(seat_type_model_1.SeatType)),
    __metadata("design:paramtypes", [Object])
], SeatTypeService);
//# sourceMappingURL=seat_type.service.js.map