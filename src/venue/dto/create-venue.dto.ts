import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateVenueDto {
    @ApiProperty({ example: "Xumo Arena", description: "Joy nomi" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        example: "Islom Karimov ko'chasi 34",
        description: "Joylashgan manzili",
    })
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({ example: "Location link", description: "Manzil linki" })
    @IsNotEmpty()
    @IsString()
    location: string;

    @ApiProperty({
        example: "xumo.uz",
        description: "Rasmiy sayti aagar mavjud bo'lsa",
    })
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    site?: string;

    @ApiProperty({ example: "+998901234567", description: "Telefon raqami" })
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ApiProperty({ example: "1", description: "Joy turi id raqami" })
    @IsNotEmpty()
    @IsNumber()
    venue_type_id: number;

    @ApiProperty({
        example: "Sxema",
        description: "O'rindiqlar joylashuv sxemasi",
    })
    @IsNotEmpty()
    @IsString()
    schema: string;

    @ApiProperty({
        example: "1",
        description: "Joylashgan viloyat/shaxar id raqami",
    })
    @IsNotEmpty()
    @IsNumber()
    region_id: number;

    @ApiProperty({ example: "1", description: "Joylashgan tuman id raqami" })
    @IsNotEmpty()
    @IsNumber()
    district_id: number;
}
