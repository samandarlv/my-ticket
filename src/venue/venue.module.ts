import { Module } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Venue } from "./model/venue.model";
import { VenueType } from "../venue_type/model/venue_type.model";
import { VenuePhoto } from "../venue_photo/model/venue_photo.model";

@Module({
    imports: [SequelizeModule.forFeature([Venue, VenueType, VenuePhoto])],
    controllers: [VenueController],
    providers: [VenueService],
})
export class VenueModule {}
