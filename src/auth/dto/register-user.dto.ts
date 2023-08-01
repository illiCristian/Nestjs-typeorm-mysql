import { IsEmail, IsString, MinLength } from "class-validator";
import {Transform} from 'class-transformer'
export class RegisterUserDto {
  @Transform(({value}) => value.trim()) 
  @IsString()
  @MinLength(3)
  name : string;

  @Transform(({value}) => value.trim()) 
  @IsString()
  @MinLength(6)
  password : string;

  @IsEmail()
  email: string;
}