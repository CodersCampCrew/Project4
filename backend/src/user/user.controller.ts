import { Body, Controller, Post, Get, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  public getAll() {
    return this.userService.getUsers();
  }

  @Delete(':id')
  public delete(@Body() body) {
    //
  }

  @Put(':id')
  public update(@Body() body) {
    //
  }
}
