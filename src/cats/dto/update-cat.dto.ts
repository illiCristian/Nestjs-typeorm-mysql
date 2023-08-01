
import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class UpdateCatDto  {

  @IsString()
  @MinLength(3)
  @IsOptional()
  name: string;

  @IsNumber()
  @IsPositive( )
  @IsOptional()
  age: number;

  @IsString()
  @IsOptional()
  breed:string 
}
