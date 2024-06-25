import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column } from "typeorm";

export class createCarDto {
    @IsString()
    @IsNotEmpty()
    make: string;
  
    @IsString()
    @IsNotEmpty()
    model: string;

    @IsNotEmpty()
    year: number;

    @IsNotEmpty()
    price: number;
  
    @IsString()
    @IsNotEmpty()
    location: string;
  
    @IsString()
    @IsNotEmpty()
    transmission: string;

    @IsString()
    @IsNotEmpty()
    mileage: string;
  
    @IsString()
    @IsNotEmpty()
    color: string;
  
    image: string;

}