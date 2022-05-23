import { Body, Controller, Get, Post, Res, Param, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../user/dto/userDto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth') // router.use('/auth', constroller)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
  @Post('register')
  public register(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @Post('login') // router.get('/login', (req, rest, next))
  public async login(
    @Body() body: { username: string; email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const TokenData = await this.authService.login(
      body.username ? body.username : body.email,
      body.password,
    );
    res.send(TokenData.token);
  }

  @Post('reset') // router.get('/login', (req, rest, next))
  public resetPassword(@Body() body) {
    return this.authService.resetPassword(body.emailToken);
  }

  @Put('verifyEmail/:token')
  public async verifyEmail(@Param('token') token: string) {
    return this.authService.verifyEmail(token);
  }
}
