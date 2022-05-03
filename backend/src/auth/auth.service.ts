import { Injectable } from '@nestjs/common';
import User from './user.interface';

const users = [];

@Injectable()
export class AuthService {
  public register(newUser: User) {
    users.push(newUser);
  }

  public login() {
    console.log('You are logged in');
    return users;
  }
}
