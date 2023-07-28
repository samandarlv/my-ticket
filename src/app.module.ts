import { Module } from "@nestjs/common";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { VenueType } from "./venue_type/model/venue_type.model";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { VenuePhoto } from "./venue_photo/model/venue_photo.model";
import { VenueModule } from "./venue/venue.module";
import { Venue } from "./venue/model/venue.model";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { HumanCategory } from "./human_category/model/human_category.model";
import { EventTypeModule } from "./event_type/event_type.module";
import { EventType } from "./event_type/model/event_type.model";
import { EventModule } from "./event/event.module";
import { Event } from "./event/model/event.model";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { SeatModule } from "./seat/seat.module";
import { Seat } from "./seat/model/seat.model";
import { SeatType } from "./seat_type/model/seat_type.model";

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [
                VenueType,
                VenuePhoto,
                Venue,
                HumanCategory,
                EventType,
                Event,
                Seat,
                SeatType,
            ],
            autoLoadModels: true,
            logging: false,
        }),
        VenueTypeModule,
        VenuePhotoModule,
        VenueModule,
        HumanCategoryModule,
        EventTypeModule,
        EventModule,
        SeatTypeModule,
        SeatModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
