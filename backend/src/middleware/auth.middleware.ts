import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { DataStoredInToken } from '../auth/auth.service';
import jwt from 'jsonwebtoken';
import RequestWithUser from './requestwithcontext.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import IUser from '../user/interfaces/user.interface';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async use(req: RequestWithUser, res: Response, next: NextFunction) {
    const authCookie = req.cookies?.TokenData;
    const secret = process.env.JWT_SECRET;
    try {
      const verificationResponse = jwt.verify(
        authCookie,
        secret as string,
      ) as unknown as DataStoredInToken;
      const id = verificationResponse.id;
      const user = await this.userModel.findById(id);
      if (user && user.verifiedByEmail) {
        req.user = user;
        next();
      } else {
        throw new UnauthorizedException('You need sign up');
      }
    } catch (error) {
      next(
        new UnauthorizedException(
          'You need to be logged in to see the resource',
        ),
      );
    }
  }
}
