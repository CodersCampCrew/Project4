import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { createUserDto } from './dto/userDto';
import User from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  public async createUser(createUserDto: createUserDto) {
    console.log(createUserDto);

    const emailToken = randomUUID();

    const user: User = {
      ...createUserDto,
      verifiedByEmail: false,
      emailToken: emailToken,
    };

    this.users.push(user);

    return user;
  }

  public getUsers() {
    return this.users;
  }
}
