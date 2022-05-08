import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // router.use('/auth', constroller)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public register(@Body() body) {
    return this.authService.register(body);
  }

  @Get('login') // router.get('/login', (req, rest, next))
  public login() {
    return this.authService.login();
  }
}
