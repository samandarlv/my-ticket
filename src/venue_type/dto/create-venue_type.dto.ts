import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueTypeDto {
    @ApiProperty({ example: "Sport", description: "Joy turi" })
    @IsNotEmpty()
    @IsString()
    name: string;
}
