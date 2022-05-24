import { UnauthorizedException } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { DataStoredInToken } from '../auth/auth.service';
import jwt from 'jsonwebtoken';
import RequestWithUser from './requestwithcontext.interface';

export async function AuthMiddleware(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) {
  const jwtToken = req.header('Authorization');

  const secret = process.env.JWT_SECRET;
  try {
    const verificationResponse = jwt.verify(
      jwtToken,
      secret as string,
    ) as unknown as DataStoredInToken;
    const id = verificationResponse.id;
    console.log(id);
    const user = await this.userModel.findById(id);
    if (user && user.verifiedByEmail) {
      req.user = user;
      next();
    } else {
      throw new UnauthorizedException('You need sign up');
    }
  } catch (error) {
    next(
      new UnauthorizedException('You need to be logged in to see the resource'),
    );
  }
}
