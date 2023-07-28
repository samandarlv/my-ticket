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
exports.CreateSeatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSeatDto {
}
exports.CreateSeatDto = CreateSeatDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "O'rindiq raqami" }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1",
        description: "O'rindiq joylashgan qator raqami",
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "row", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "1",
        description: "O'rindiq joylashgan bino id raqami",
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "venue_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "O'rindiq tipi id raqami" }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSeatDto.prototype, "seat_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "location",
        description: "O'rindiq joylashgan joyi",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSeatDto.prototype, "location_in_schema", void 0);
//# sourceMappingURL=create-seat.dto.js.map