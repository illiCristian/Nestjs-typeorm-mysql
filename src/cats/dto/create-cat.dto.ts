import { IsNumber, IsOptional, IsPositive, IsString, MinLength, isPositive } from "class-validator";

export class CreateCatDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  @IsPositive( )
  age: number;

  @IsString()
  @IsOptional()
  breed?:string 
}
