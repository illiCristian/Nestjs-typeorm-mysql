import { JwtService } from '@nestjs/jwt';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginUserDto } from './dto/login-user.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async login({ email, password }: LoginUserDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = {
      email: user.email,
    };
    const token = await this.jwtService.signAsync(payload);
    return {
      email: user.email,
      token,
    };
  }

  async register({ email, password, name }: RegisterUserDto) {
    const findUser = await this.usersService.findOneByEmail(email);
    if (findUser) {
      throw new BadRequestException('User already exists');
    }

    return await this.usersService.create({
      email,
      password: await bcryptjs.hash(password, 10),
      name,
    });
  }
}
