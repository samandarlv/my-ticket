import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEventTypeDto {
    @ApiProperty({ example: "Sport", description: "Marosim turi" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "1", description: "Marosim turi ID si" })
    @IsNumber()
    @IsOptional()
    parent_event_type_id: number;
}
