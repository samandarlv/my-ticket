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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEventDto {
}
exports.CreateEventDto = CreateEventDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Musiqiy konsert", description: "Marosim nomi" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEventDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "img/image1.png", description: "Marosim afishasi" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEventDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2023-07-27",
        description: "Boshlanish sanasi yyyy-oo-kk tarzda",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateEventDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "19:00", description: "Marosim boshlanish vaqti " }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEventDto.prototype, "start_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2023-08-15",
        description: "Marosim tugash sanasi",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], CreateEventDto.prototype, "finish_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "22:00", description: "Marosim tugash vaqti " }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEventDto.prototype, "finish_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Bu marosimda taniqli yulduzlar qatnashadi",
        description: "Marosim haqida ma'lumot",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEventDto.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Marosim turi ID raqami" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "event_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Kirish uchun toifa ID raqami" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "human_category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1",
        description: "Marosim o'tkaziladigan joy ID raqami",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "venue_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Til ID raqami" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "lang_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2023-09-01", description: "Chiqish sanasi" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], CreateEventDto.prototype, "release_date", void 0);
//# sourceMappingURL=create-event.dto.js.map