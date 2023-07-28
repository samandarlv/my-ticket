import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHumanCategoryDto {
    @ApiProperty({ example: "Bolalar uchun", description: "Faqat belgilangan oshdagi bolalar kirishi mumkin"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "11", description: "Kirish mumkin etilgan eng yosh toifa" })
    @IsNotEmpty()
    @IsNumber()
    start_age: number;
    
    @ApiProperty({ example: "17", description: "Kirish mumkin etilgan eng yoshi katta toifa" })
    @IsNotEmpty()
    @IsNumber()
    finish_age: number;
    
    // @ApiProperty({ example: "Erkak", description: "" })
    // @IsNotEmpty()
    // @IsString()
    // gender: string;
}
