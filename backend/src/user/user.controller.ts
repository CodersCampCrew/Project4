import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  public getAll() {
    return this.userService.getUsers();
  }

  @Get(':id')
  public getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Delete(':id')
  public delete(@Param('id') id: string) {
    return this.userService.deletUser(id);
  }

  @Put(':id')
  public update(@Body() body, @Param('id') id: string) {
    return this.userService.updateUser(id, body);
  }
}
