import { Injectable } from '@nestjs/common';
import User from '../user/interfaces/user.interface';

const users = [];

@Injectable()
export class AuthService {
  public register(newUser: User) {
    users.push(newUser);
  }

  public login(username: string, password: string) {
    console.log('You are logged in');
    // const user = await UserModel.findOne({ username: body.username });
    // if (!user) {
    // throw new HttpException('bad user', HttpStatus.UNAUTHORIZED);
    // }
    return users;
  }

  public resetPassword(emailToken: string) {
    return emailToken;
  }
}
