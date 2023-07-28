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
exports.VenueService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const venue_model_1 = require("./model/venue.model");
let VenueService = exports.VenueService = class VenueService {
    constructor(venueRepo) {
        this.venueRepo = venueRepo;
    }
    async create(createVenueDto) {
        const venue = await this.venueRepo.create(createVenueDto);
        if (venue) {
            return {
                message: "Created succesfully",
                Venue: venue,
            };
        }
        throw new common_1.HttpException("Did not created", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async findAll() {
        const venues = await this.venueRepo.findAll({
            include: { all: true },
        });
        if (venues.length > 0) {
            return venues;
        }
        throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
    }
    async findOne(id) {
        const venue = await this.venueRepo.findByPk(id, {
            include: { all: true },
        });
        if (venue) {
            return venue;
        }
        throw new common_1.HttpException("Not found with such id", common_1.HttpStatus.NOT_FOUND);
    }
    async update(id, updateVenueDto) {
        const updated = await this.venueRepo.update(updateVenueDto, {
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
        const deleted = await this.venueRepo.destroy({ where: { id } });
        if (deleted) {
            return { message: "Deleted succesfully" };
        }
        throw new common_1.HttpException("Not found with such id", common_1.HttpStatus.NOT_FOUND);
    }
};
exports.VenueService = VenueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(venue_model_1.Venue)),
    __metadata("design:paramtypes", [Object])
], VenueService);
//# sourceMappingURL=venue.service.js.map