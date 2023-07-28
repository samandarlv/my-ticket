import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSeatDto {
    @ApiProperty({ example: "1", description: "O'rindiq raqami" })
    @IsNumber()
    @IsNotEmpty()
    sector: number;

    @ApiProperty({
        example: "1",
        description: "O'rindiq joylashgan qator raqami",
    })
    @IsNumber()
    @IsNotEmpty()
    row: number;

    @ApiProperty({
        example: "1",
        description: "O'rindiq joylashgan bino id raqami",
    })
    @IsNumber()
    @IsNotEmpty()
    venue_id: number;

    @ApiProperty({ example: "1", description: "O'rindiq tipi id raqami" })
    @IsNumber()
    @IsNotEmpty()
    seat_type_id: number;

    @ApiProperty({
        example: "location",
        description: "O'rindiq joylashgan joyi",
    })
    @IsString()
    @IsNotEmpty()
    location_in_schema: string;
}
