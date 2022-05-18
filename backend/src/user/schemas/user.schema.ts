import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IUser, UserRole } from '../interfaces/user.interface';
import { Document } from 'mongoose';

export type UserDocument = IUser & Document;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  usename: string;
  @Prop()
  email: string;
  @Prop()
  phone: string;
  @Prop()
  password: string;
  @Prop()
  category: UserRole;
  @Prop()
  emailToken: string;
  @Prop()
  verifiedByEmail: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
