import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class updateCarDto {
    @IsString()
    @IsOptional()
    make: string;
  
    @IsString()
    @IsOptional()
    model: string;
  
    @IsOptional()
    year: number;

    @IsOptional()
    price: number;
  
    @IsString()
    @IsOptional()
    location: string;
  
    @IsString()
    @IsOptional()
    transmission: string;

    @IsString()
    @IsOptional()
    mileage: string;
  
    @IsString()
    @IsOptional()
    color: string;
  
    @IsOptional()
    image: string;

}