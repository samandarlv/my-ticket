import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVenuePhotoDto {
    @ApiProperty({ example: "1", description: "Joy id raqami" })
    @IsNotEmpty()
    @IsNumber()
    venue_id: number;

    @ApiProperty({ example: "img/image1.png", description: "Joy rasmi linki" })
    @IsNotEmpty()
    @IsString()
    url: string;
}
