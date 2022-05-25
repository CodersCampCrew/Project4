import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import IUser from '../user/interfaces/user.interface';
import { DateTime } from 'luxon';
import { UpdateUserDto } from '../user/dto/userDto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { type } from 'os';

export interface TokenData {
  token: string;
  expiresIn: Date;
}
export type DataStoredInToken = {
  id: string;
  userName: string;
  userEmail: string;
};
@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<IUser>,
    private readonly userService: UserService,
  ) {}

  public async login(emailOrUsername: string, password: string) {
    const user = await this.userService.getByUsernameOrEmail(emailOrUsername);
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const TokenData = this.generateAuthToken(user);

    return TokenData;
  }

  public resetPassword(emailToken: string) {
    return emailToken;
  }

  private generateAuthToken(user: IUser): TokenData {
    const expiresAt = DateTime.utc().plus({ hour: 1 }).toJSDate();
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken: DataStoredInToken = {
      id: user._id,
      userName: user.username,
      userEmail: user.email,
    };

    return {
      token: jwt.sign(dataStoredInToken, secret as string, {
        expiresIn: 60 * 60,
      }),
      expiresIn: expiresAt,
    };
  }

  public async verifyEmail(emailToken: string) {
    const userToVerify = await this.userModel.findOneAndUpdate(
      { emailToken },
      { verifiedByEmail: true },
      { new: true },
    );
    return userToVerify;
  }
}
