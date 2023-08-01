import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginUserDto {

  @Transform(({value}) => value.trim()) 
  @IsString()
  @MinLength(6)
  password : string;

  @IsEmail()
  email: string;

}