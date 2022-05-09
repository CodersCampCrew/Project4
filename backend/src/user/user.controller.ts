import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Post('register')
  public register(@Body() body) {
    //

  @Delete(':id')
  public delete(@Body() body) {
    //
  }

  @Put(':id')
  public update(@Body() body) {
    //
  }
}
