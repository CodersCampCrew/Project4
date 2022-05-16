import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/userDto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

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
  public login(@Body() body: { username: string; password: string }) {
    return this.authService.login(body.username, body.password);
  }

  @Post('reset') // router.get('/login', (req, rest, next))
  public resetPassword(@Body() body) {
    return this.authService.resetPassword(body.emailToken);
  }
}
