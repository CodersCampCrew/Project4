import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User, UserRole } from '../interfaces/user.interface';

export type UserDocument = User & Document;

@Schema()
export class UserClass {
  @Prop()
  _id: string;
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

export const UserSchema = SchemaFactory.createForClass(UserClass);
