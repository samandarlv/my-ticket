import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEventDto {
    @ApiProperty({ example: "Musiqiy konsert", description: "Marosim nomi" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "img/image1.png", description: "Marosim afishasi" })
    @IsNotEmpty()
    @IsString()
    photo: string;

    @ApiProperty({
        example: "2023-07-27",
        description: "Boshlanish sanasi yyyy-oo-kk tarzda",
    })
    @IsNotEmpty()
    start_date: Date;

    @ApiProperty({ example: "19:00", description: "Marosim boshlanish vaqti " })
    @IsNotEmpty()
    @IsString()
    start_time: string;

    @ApiProperty({
        example: "2023-08-15",
        description: "Marosim tugash sanasi",
    })
    @IsNotEmpty()
    @IsString()
    finish_date: Date;

    @ApiProperty({ example: "22:00", description: "Marosim tugash vaqti " })
    @IsNotEmpty()
    @IsString()
    finish_time: string;

    @ApiProperty({
        example: "Bu marosimda taniqli yulduzlar qatnashadi",
        description: "Marosim haqida ma'lumot",
    })
    @IsNotEmpty()
    @IsString()
    info: string;

    @ApiProperty({ example: "1", description: "Marosim turi ID raqami" })
    @IsNotEmpty()
    @IsNumber()
    event_type_id: number;

    @ApiProperty({ example: "1", description: "Kirish uchun toifa ID raqami" })
    @IsNotEmpty()
    @IsNumber()
    human_category_id: number;

    @ApiProperty({
        example: "1",
        description: "Marosim o'tkaziladigan joy ID raqami",
    })
    @IsNotEmpty()
    @IsNumber()
    venue_id: number;

    @ApiProperty({ example: "1", description: "Til ID raqami" })
    @IsNotEmpty()
    @IsNumber()
    lang_id: number;

    @ApiProperty({ example: "2023-09-01", description: "Chiqish sanasi" })
    @IsNotEmpty()
    @IsString()
    release_date: Date;
}
