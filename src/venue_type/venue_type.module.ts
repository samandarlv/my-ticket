import { Module } from "@nestjs/common";
import { VenueTypeService } from "./venue_type.service";
import { VenueTypeController } from "./venue_type.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { VenueType } from "./model/venue_type.model";
import { Venue } from "../venue/model/venue.model";

@Module({
    imports: [SequelizeModule.forFeature([VenueType])],
    controllers: [VenueTypeController],
    providers: [VenueTypeService],
})
export class VenueTypeModule {}
