"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const venue_type_module_1 = require("./venue_type/venue_type.module");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const venue_type_model_1 = require("./venue_type/model/venue_type.model");
const venue_photo_module_1 = require("./venue_photo/venue_photo.module");
const venue_photo_model_1 = require("./venue_photo/model/venue_photo.model");
const venue_module_1 = require("./venue/venue.module");
const venue_model_1 = require("./venue/model/venue.model");
const human_category_module_1 = require("./human_category/human_category.module");
const human_category_model_1 = require("./human_category/model/human_category.model");
const event_type_module_1 = require("./event_type/event_type.module");
const event_type_model_1 = require("./event_type/model/event_type.model");
const event_module_1 = require("./event/event.module");
const event_model_1 = require("./event/model/event.model");
const seat_type_module_1 = require("./seat_type/seat_type.module");
const seat_module_1 = require("./seat/seat.module");
const seat_model_1 = require("./seat/model/seat.model");
const seat_type_model_1 = require("./seat_type/model/seat_type.model");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [
                    venue_type_model_1.VenueType,
                    venue_photo_model_1.VenuePhoto,
                    venue_model_1.Venue,
                    human_category_model_1.HumanCategory,
                    event_type_model_1.EventType,
                    event_model_1.Event,
                    seat_model_1.Seat,
                    seat_type_model_1.SeatType,
                ],
                autoLoadModels: true,
                logging: false,
            }),
            venue_type_module_1.VenueTypeModule,
            venue_photo_module_1.VenuePhotoModule,
            venue_module_1.VenueModule,
            human_category_module_1.HumanCategoryModule,
            event_type_module_1.EventTypeModule,
            event_module_1.EventModule,
            seat_type_module_1.SeatTypeModule,
            seat_module_1.SeatModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map