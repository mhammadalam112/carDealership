import { Type } from "class-transformer";
import {  IsInt, IsNumber, IsOptional, IsString } from "class-validator";

export class searchCarDto {
    @IsOptional()
    @IsString()
    make?: string;
  
    @IsOptional()
    @IsString()
    model?: string;
  
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    year?: number;
  
    @IsOptional()
    @IsString()
    location?: string;
}